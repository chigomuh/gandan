import { PropsWithChildren, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: PropsWithChildren) => {
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);

  useEffect(() => {
    const isExistPortal = document.querySelector('#portal');

    if (isExistPortal) {
      setPortalContainer(isExistPortal);
      return;
    }

    const root = document.querySelector('body');
    const container = document.createElement('div');
    container.id = 'portal';
    root?.appendChild(container);
    setPortalContainer(container);
  }, []);

  return portalContainer ? createPortal(children, portalContainer) : null;
};

export default Portal;
