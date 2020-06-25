import { BASE_FONT_SIZE } from "./const";

export function pxToRem(target) {
  return `${(target / BASE_FONT_SIZE) * 1}rem`;
};

export default pxToRem;
