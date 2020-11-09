/**
 * Converts a hex code to an rgb string.
 * The output is something like `255, 128, 0`
 * @param hex The hex code to convert
 */
export function hexToRgb(hex: string): string | null {
  const separatedColors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return separatedColors
    ? `${parseInt(separatedColors[1], 16)}, ${parseInt(separatedColors[2], 16)}, ${parseInt(separatedColors[3], 16)}`
    : null
}
