export const db = <T, P extends keyof T>(schema: T) => {
  [P extends keyof T as `get${P}`]: schema[P]
}
