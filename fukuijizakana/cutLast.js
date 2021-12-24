export const cutLast = (s, ch) => {
  const n = s.lastIndexOf(ch);
  if (n < 0) {
    return s;
  }
  return s.substring(n + ch.length);
};
