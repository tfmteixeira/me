import React, { forwardRef } from "react";
import ImageArray from "./imageArray.utils";

interface props {
  progress: any;
}
const ImageSequence = forwardRef<HTMLSpanElement, props>(
  //@ts-ignore
  ({ progress }, ref) => {
    const newImages = ImageArray();

    let index = Math.round(progress * (newImages.length - 1));

    return newImages.map((item, i) => (
      <span
        ref={ref}
        key={i}
        style={{
          display: i >= index ? "block" : "none",
          height: "100%",
          width: "100%",
          backgroundImage: `url('${
            item[0] ? (item[0] as HTMLImageElement).src : null
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ));
  }
);

export default ImageSequence;
