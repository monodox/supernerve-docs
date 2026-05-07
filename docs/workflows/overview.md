---
sidebar_position: 1
---

# Workflows Overview

Workflows define multi-step processes that agents execute. They combine triggers, steps, and conditions into repeatable pipelines.

## Creating a Workflow

```typescript
import { Workflow } from '@supernerve/sdk';

const workflow = new Workflow({
  name: 'daily-digest',
  trigger: { type: 'schedule', cron: '0 9 * * *' },
  steps: [
    { skill: 'search', params: { query: 'team updates' } },
    { skill: 'summarize', params: { style: 'bullet-points' } },
    { connector: 'slack', action: 'send', params: { channel: '#team' } },
  ],
});
```

## Concepts

- **Triggers** — What starts the workflow
- **Steps** — Sequential or parallel actions
- **Conditions** — Branching logic between steps
