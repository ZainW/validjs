export function required (value: string|boolean|number): boolean {

  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== undefined && value !== null;
}
