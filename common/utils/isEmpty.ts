export function isEmpty(t: any) {
  if (t === "" || t === null || t === undefined || typeof t === "undefined") {
    return true;
  } else {
    return false;
  }
}
