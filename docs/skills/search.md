---
sidebar_position: 6
---

# Search

Find relevant information across connected data sources.

## Usage

```typescript
const results = await Skill.run('search', {
  query: 'deployment best practices',
  sources: ['notion', 'google-drive'],
  limit: 10,
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `query` | string | required | Search query |
| `sources` | string[] | all | Data sources to search |
| `limit` | number | 10 | Max results |
| `filters` | object | — | Additional filters |
