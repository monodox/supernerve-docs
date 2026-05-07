---
sidebar_position: 2
---

# Triggers

Triggers define when a workflow starts executing.

## Trigger Types

| Type | Description | Example |
|------|-------------|---------|
| `schedule` | Cron-based timing | `{ cron: '0 9 * * *' }` |
| `webhook` | HTTP request | `{ path: '/trigger/deploy' }` |
| `event` | Connector event | `{ connector: 'github', event: 'push' }` |
| `manual` | API call | `{ type: 'manual' }` |

## Example

```typescript
const trigger = {
  type: 'event',
  connector: 'github',
  event: 'issue.created',
  filter: { labels: ['bug'] },
};
```
