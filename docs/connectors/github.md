---
sidebar_position: 4
---

# GitHub Connector

Interact with repositories, issues, pull requests, and actions.

## Setup

```typescript
const github = new Connector('github', {
  token: process.env.GITHUB_TOKEN,
  owner: 'supernerve',
  repo: 'supernerve-docs',
});
```

## Actions

- `getIssues(filter)` — List issues
- `createIssue(title, body)` — Create an issue
- `getPRs(filter)` — List pull requests
- `getFile(path, branch)` — Read a file

## Example

```typescript
const issues = await github.getIssues({ state: 'open', labels: ['bug'] });
```
