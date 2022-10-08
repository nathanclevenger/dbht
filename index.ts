export type Schema<T> = {
  // name: string
  // host: string
  [key: keyof T]: Model
}

export type Model = {
  // _id?: keyof Model
  [key: string]: Primitive 
}

export type Visibility = 'public' | 'unlisted' | 'private'
export type Primitive = 'bool' | 'string' | 'number' | 'date' | 'time' | 'datetime' 
export type Calculated = 'slugify' | 'uuid' | 'now' | 'camelCase' | 'titleCase' | 'humanCase'
export type Defaults = 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'

export type Query<T> = {
  [key: string]: string
}

export type Models = 'Blog' | 'Author' | 'Tag'


export const db = (schema: Schema) => {
  list: query => ({query})
}


// const types = 'Blogs' | 'Authors' | 'Posts'

// const example: Schema<types> = {
//   Blog: {
//     name: 'string',
//     title: 'string',
//   },
//   Author: {
//     author: 'string'
//   },
//   T: {
//     gf: 'gdfgdfg'
//   }
// }