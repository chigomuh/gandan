/* eslint-disable camelcase */
import { NextApiRequest, NextApiResponse } from 'next';
import { requestKakaoToken } from '~/services/server/auth';
import {
  createUser,
  getGoogleUser,
  getKaKaoUser,
  getUser,
} from '~/services/server/user';
import {
  createToken,
  getParseGoogleUser,
  getParseKakaoUser,
} from './auth.utils';

const providers = {
  kakao: 'kakao',
  google: 'google',
};

const authHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  if (!req.body || !req.body.provider || !req.body.data) {
    return res.status(400).json({ message: 'Bad request' });
  }

  const { provider, data } = req.body;

  if (provider === providers.kakao) {
    const { code } = data;
    if (!code) {
      return res
        .status(400)
        .json({ message: 'Bad request', error: 'Invalid code' });
    }

    const { access_token } = await requestKakaoToken(code);
    const kakaoUser = await getKaKaoUser(access_token);
    const { id, ...others } = getParseKakaoUser(kakaoUser);
    const user = await getUser(id);
    const token = createToken({ userId: id });

    if (!user) {
      await createUser(id, {
        id,
        createAt: new Date(),
        loginType: providers.kakao,
        ...others,
      });

      return res.status(200).json(token);
    }

    return res.status(200).json(token);
  }

  if (provider === providers.google) {
    const { accessToken } = data;
    if (!accessToken) {
      return res
        .status(400)
        .json({ message: 'Bad request', error: 'Invalid accessToken' });
    }

    const googleUser = await getGoogleUser(accessToken);
    const { id, ...others } = getParseGoogleUser(googleUser);
    const user = await getUser(id);
    const token = createToken({ userId: id });

    if (!user) {
      await createUser(id, {
        id,
        createAt: new Date(),
        loginType: providers.google,
        ...others,
      });

      return res.status(200).json(token);
    }

    return res.status(200).json(token);
  }

  return res
    .status(400)
    .json({ message: 'Bad request', error: 'Invalid provider' });
};

export default authHandler;
