export function secondsToTime(seconds: number): string {
  const zeroLeft = (n: number) => Math.floor(n).toString().padStart(2, '0'); //Colocar um zero a esquerda, quando o numero for menor que dez.
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
