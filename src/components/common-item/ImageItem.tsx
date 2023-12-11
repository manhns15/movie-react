import { FC } from "react";

type ImageComponentProps = {
    src: string;
    alt: string;
    className?: string;
  }
  const ImageItem: FC<ImageComponentProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} />;
  };
export default ImageItem;