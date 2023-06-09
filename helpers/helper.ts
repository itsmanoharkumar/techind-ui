import { IMAGE_SIZE } from "@/types/enums";
import { StrapiImageData } from "@/types/ImageDataType";
import cookie from "cookie";
import placeholder from "@/images/placeholder.png";

export function parseCookies(req: any) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export function handleNetworkError(networkError: any) {
  const networkErrorResponse = networkError.response;
  const errorData = networkErrorResponse?.data;
  const errorStatus = networkErrorResponse?.status;
  const error = new Error();
  error.stack = networkError?.stack;
  if (errorStatus === 400) {
    error.name = errorData?.error?.name;
    error.message = errorData?.error?.message;
  } else {
    error.name = networkError?.name;
    error.message = `Internal Server Error`;
    console.log(networkError);
  }
  return error;
}

export function extractImageData(
  imageData: StrapiImageData,
  imageSize: IMAGE_SIZE
): { width: number; height: number; src: any } {
  if (!imageData) {
    return {
      width: 0,
      height: 0,
      src: placeholder,
    };
  }
  const formats = imageData?.attributes?.formats;
  const formatData = formats && formats[imageSize];
  const { width, height, url } = formatData || imageData?.attributes;
  let src = url;
  if (url?.startsWith("/")) {
    src = url
      .replace("/", process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/")
      .replace("api/", "");
  }
  return {
    width,
    height,
    src,
  };
}
