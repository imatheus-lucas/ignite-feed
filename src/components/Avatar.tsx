import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean;
};
export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatar_with_border : styles.avatar}
      {...rest}
    />
  );
}
