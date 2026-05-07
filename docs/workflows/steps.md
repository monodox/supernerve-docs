---
sidebar_position: 3
---

# Steps

Steps are the individual actions within a workflow.

## Step Types

- **Skill step** — Invoke a skill
- **Connector step** — Call a connector action
- **Condition step** — Branch based on logic
- **Agent step** — Delegate to another agent

## Example

```typescript
const steps = [
  {
    id: 'fetch',
    skill: 'search',
    params: { query: '{{trigger.data}}' },
  },
  {
    id: 'analyze',
    skill: 'classify',
    params: { input: '{{steps.fetch.output}}', labels: ['urgent', 'normal'] },
  },
  {
    id: 'notify',
    condition: '{{steps.analyze.output.label}} == "urgent"',
    connector: 'slack',
    action: 'send',
    params: { channel: '#alerts', message: 'Urgent item detected' },
  },
];
```
