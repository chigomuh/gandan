const env = {
  KAKAO_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  KAKAO_REDIRECT_URL: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
} as const;

export default env;
