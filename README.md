# dbht

```typescript
import db from 'dbht'

const book = await db.books.get(123)
```

`schema.yaml`:
```yaml

Blog:
  _id: name
  name: string
  image: image
  description: markdown
  tags: Tag.blogs
  url: url

Post: 
  _id: slugify(title)
  title: string
  subtitle: string
  image: image
  tags: Tag.posts

Author:
  _id: slugify(name)
  name: string
  bio: markdown
  blogs: Blog.author

Tag:
  _id: slugify(name)
  name: string
  blogs: Blog.tags
  posts: Post.tags

```
