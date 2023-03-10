import { css } from '@emotion/react';
import { useSyncExternalStore, useEffect } from 'react';
import Portal from '~/components/common/Portal';
import toastStore from '../toast.store';
import { ToastHandleProps } from '../toast.types';
import Toast from './Toast';

const ToastContainer = () => {
  const toasts = useSyncExternalStore(
    toastStore.subscribe,
    toastStore.getSnapshot,
    toastStore.getSnapshot
  );

  return (
    <Portal>
      <div
        id="toast-container"
        css={css`
          position: fixed;
          left: 50%;
          bottom: 1rem;
          transform: translateX(-50%);
          gap: 1rem;
          display: flex;
          flex-direction: column;
          z-index: 3000;
        `}
      >
        {toasts.map(toastProps => {
          return <ToastHandleComponent key={toastProps.id} {...toastProps} />;
        })}
      </div>
    </Portal>
  );
};

const ToastHandleComponent = ({ duration, ...rest }: ToastHandleProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      rest.onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <Toast {...rest} />;
};

export default ToastContainer;
