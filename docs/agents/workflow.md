---
sidebar_position: 4
---

# Workflow Agent

Workflow agents orchestrate multi-step processes, coordinating between skills and connectors.

## Configuration

```typescript
const agent = new Agent({
  name: 'workflow-agent',
  workflow: {
    steps: ['fetch-data', 'analyze', 'summarize', 'notify'],
  },
});
```

## Features

- Sequential and parallel step execution
- Conditional branching
- Error handling and retries
- Progress tracking

## Example

```typescript
const result = await agent.run({
  trigger: 'daily-report',
  params: { team: 'engineering' },
});
```
