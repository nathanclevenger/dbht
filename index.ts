export type Schema = {
  [string]: Model
}

export type Model = {
  _id?: keyof Model
  [string]: Primitive | Relationship
}

export type Primitive = 'bool' | 'string' | 'number' | 'Date' | 'createdBy'
export type Defaults = 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'

export type Query<T> = {
  [string]: string
}

export type Models = 'Blog' | 'Author' | 'Tag'


export const db = (schema: Schema) => {
  list: query => ({query})
}
