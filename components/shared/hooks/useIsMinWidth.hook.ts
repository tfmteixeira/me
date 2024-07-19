import { useCallback, useEffect, useState } from "react";

const useIsMinWidth = (breakpoint: number) => {
  const isClient = typeof window !== "undefined";

  const checkForDevice = useCallback(
    () => (isClient ? window.innerWidth <= breakpoint : false),
    [isClient, breakpoint]
  );

  const [isMinWidth, setIsMinWidth] = useState(checkForDevice());

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handlePageResized = () => {
      setIsMinWidth(checkForDevice());
    };

    window.addEventListener("resize", handlePageResized);
    window.addEventListener("orientationchange", handlePageResized);
    window.addEventListener("load", handlePageResized);
    window.addEventListener("reload", handlePageResized);

    return () => {
      window.removeEventListener("resize", handlePageResized);
      window.removeEventListener("orientationchange", handlePageResized);
      window.removeEventListener("load", handlePageResized);
      window.removeEventListener("reload", handlePageResized);
    };
  }, [isClient, checkForDevice]);

  return isMinWidth;
};

export default useIsMinWidth;
