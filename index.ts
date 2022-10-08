export type Schema = {
  [key: string]: Model
}

export type Model = {
  // _id?: keyof Model
  [key: string]: Primitive 
}

export type Calculated = 'slugify' | 'uuid' | 'now' | 'camelCase' | 'titleCase' | 'humanCase'
export type Primitive = 'bool' | 'string' | 'number' | 'date' | 'time' | 'datetime' 
export type Defaults = 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'

export type Query<T> = {
  [key: string]: string
}

export type Models = 'Blog' | 'Author' | 'Tag'


export const db = (schema: Schema) => {
  list: query => ({query})
}
