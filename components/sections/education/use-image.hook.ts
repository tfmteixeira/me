import { useState, useEffect } from "react";

interface defaultStateInterface {
  image: HTMLElement | undefined;
  status: string;
}
const defaultState = {
  image: undefined,
  status: "loading",
} as defaultStateInterface;
export const useImage = (url: string) => {
  const res = useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  useEffect(() => {
    if (!url) return;
    const img = document.createElement("img") as HTMLImageElement;
    img.src = url;

    setState({ image: img, status: "loaded" });

    return () => {
      setState(defaultState);
    };
  }, [url, setState]);

  return [image, status];
};
