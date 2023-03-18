import { useState, useRef, useLayoutEffect } from "react";

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (elementRef && elementRef.current && elementRef.current.clientWidth) {
      const width = elementRef.current.clientWidth;
      setWidth(width);
    }
  });
  return { width, elementRef };
};

export default useSizeElement;
