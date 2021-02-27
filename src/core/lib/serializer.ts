export function serializeBounds(arg: any) {
  const b = arg?.map((b: any) => new Array(b.join(","))).join(";");
  return b;
}

export function unserializeBounds(arg: any) {
  let b = arg?.split(";").map((o: any) => o.split(","));
  return b;
}
