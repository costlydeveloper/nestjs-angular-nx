export function generateRandomString(length: number = 12): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}
