const interpolate = (
  i: number,
  a: number,
  b: number,
  a2: number,
  b2: number
): number => ((i - a) * (b2 - a2)) / (b - a) + a2;

export const shadow = (depth: number) => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,

  elevation: depth,
});
