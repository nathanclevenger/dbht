# db.ht - The Hyper Text Database

```javscript
import { db } from 'db.ht'

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
  content: markdown
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


```javascript
import { db } from 'dbht'

db.blogs.all()
db.blogs.find({title: 'Hello'})
db.blogs.create({ title: 'This is a Test', author: 'John Smith' })
```

