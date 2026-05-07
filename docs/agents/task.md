---
sidebar_position: 6
---

# Task Agent

Task agents execute specific, well-defined actions and return structured results.

## Configuration

```typescript
const agent = new Agent({
  name: 'task-agent',
  skills: ['extract', 'classify'],
});
```

## Features

- Single-purpose execution
- Structured input/output
- Retry logic
- Timeout handling

## Usage

```typescript
const result = await agent.execute({
  task: 'classify-email',
  input: { subject: 'Meeting tomorrow', body: '...' },
});
// { category: 'calendar', confidence: 0.95 }
```
