export type Schema<T> = {
  [key in keyof T]: Model
}

export type Model = {
  // _id?: keyof Model
  [key: string]: Primitive 
}

export type Visibility = 'public' | 'unlisted' | 'private'
export type Primitive = 'bool' | 'string' | 'number' | 'date' | 'time' | 'datetime' 
export type Calculated = 'slugify' | 'uuid' | 'now' | 'camelCase' | 'titleCase' | 'humanCase'
export type Defaults = 'createdBy' | 'createdAt' | 'updatedBy' | 'updatedAt'
export type Variations = '' | '[]' | '?'

// export type Options = `${Primitive}${Variations}`

export type Query<T> = {
  [key: string]: string
}

export type Models = 'Blog' | 'Author' | 'Tag'


export const db = (schema: Schema<Models>) => {
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



// function pluck<DataType, KeyType extends keyof DataType>(
//   items: DataType[],
//   key: KeyType
// ): DataType[KeyType][] {
//   return items.map(item => item[key])
// }

// const dogs = [
//   { name: 'Mimi', age: 12 },
//   { name: 'LG', age: 14 }
// ]

// pluck(dogs, 'name')

// const plucks = () => {}

// const pluck = <DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] => items.map(item => item[key])

// const dogs = [
//   { name: 'Mimi', age: 12 },
//   { name: 'LG', age: 14 }
// ]

