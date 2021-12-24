import { useCallback } from 'react';

// TODO: Add throttle?
const useScrollToElement = (ref: React.RefObject<HTMLElement>) => {
  const scrollToElement = useCallback(() => {
    if (ref?.current) {
      ref?.current?.scrollIntoView();
    }
  }, [ref]);

  return { scrollToElement };
};

export default useScrollToElement;
