export function fmt(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}
export function estOf(lo: number, hi: number): string {
  return fmt(lo) + ' \u2013 ' + fmt(hi);
}
