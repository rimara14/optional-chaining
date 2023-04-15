/**
 * handle null/undefined parent property recursively
 */
export function optionalChaining(base: any, childrenStr: string): any | undefined {
  if (!base) {
      return undefined;
  }


  if (!childrenStr) {
      return base;
  }

  const children = childrenStr.split(".");

  if (!children.length) {
      return base;
  }

  const firstChild = children.shift();
  const remainingChildren = children.join('.');
  return optionalChaining(base[firstChild], remainingChildren);
}
