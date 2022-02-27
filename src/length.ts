export function min(value: string|number, valMin: number): Boolean {
  if (typeof value === "string") {
    return value.trim().length >= valMin;
  } else {
    return value >= valMin;
  }
}

export function max(value: string | number, valMax: number): Boolean {
  if (typeof value === "string") {
    return value.trim().length <= valMax;
  } else {
    return value <= valMax;
  }
}
  
export function between(value: string | number, valMin: number, valMax: number): Boolean {
  return min(value, valMin) && max(value, valMax);
}