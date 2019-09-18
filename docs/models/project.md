# Project Model

## Project (Container)
```
{
  id: Number,
  name: String,
  image: String,
  details: {
    authors: Array,
    genres: Array,
    versions: Versions (Array),
    cast: Array,
    contributors: Contributors (Array),
    description: String,
    copyright: String,
    disclaimer: String
  }
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
  contents: Tree
}
```

## Contributors

```
{
  id: Number,
  account: Number,
  name: String,
  contact: {},
  notes: String,
  role: Role
}
```

## Versions

```
{
  id: Number,
  published_on: Date,
  genres: Array,
  ISBN: String,
  format: String,
  notes: String,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
}
```

## Section
```
{
  id: Number,
  name: String,
  status: Number,
  summary: String,
  notes: String,
  content: String,
  length: Number,
  tags: Array,
  created_at: Date,
  modified_at: Date,
  deleted_at: Date
}
```
