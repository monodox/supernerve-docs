---
sidebar_position: 5
---

# Google Drive Connector

Access and manage files in Google Drive.

## Setup

```typescript
const drive = new Connector('google-drive', {
  credentials: process.env.GOOGLE_CREDENTIALS,
});
```

## Actions

- `listFiles(folderId)` — List files in a folder
- `readFile(fileId)` — Read file content
- `createFile(name, content, folderId)` — Create a file
- `search(query)` — Search for files

## Example

```typescript
const files = await drive.listFiles('folder-id');
const content = await drive.readFile(files[0].id);
```
