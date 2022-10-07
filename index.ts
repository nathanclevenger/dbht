export type Schema = {
  [string]: Model
}

export type Model = {
  [string]: Primitive | Relationship
}

export type Primitive = 'bool' | 'string' | 'number' | 'Date'

export type Relationship = `{Model}.{keyOf(Model)`
