---
sidebar_position: 3
---

# Notion Connector

Read and write Notion pages, databases, and blocks.

## Setup

```typescript
const notion = new Connector('notion', {
  token: process.env.NOTION_TOKEN,
});
```

## Actions

- `getPage(pageId)` — Retrieve a page
- `createPage(parentId, content)` — Create a new page
- `queryDatabase(dbId, filter)` — Query a database
- `updateBlock(blockId, content)` — Update a block

## Example

```typescript
const pages = await notion.queryDatabase('db-id', {
  filter: { property: 'Status', equals: 'In Progress' },
});
```
