export function checkEmpty<T extends N, N>(field: T, emptyValue: N): 1 | 0 {
  if (field === emptyValue) {
    return 1;
  } else {
    return 0;
  }
}
