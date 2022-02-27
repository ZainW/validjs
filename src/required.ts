export function required (value: any): boolean {

  if (typeof value === "string") {
    return value.trim().length > 0
  }
  return value !== undefined && value !== null
}
