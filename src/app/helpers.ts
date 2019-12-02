import {isArray, isObject} from "util";

export function getError(error, defaultMsg) {
  if (isObject(error)) {
    return error.error || error.msg || error.message || defaultMsg;
  }else if (typeof error === 'string') {
    return error;
  }

  return defaultMsg;
}
