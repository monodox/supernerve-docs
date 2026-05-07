---
sidebar_position: 2
---

# Memory Agent

Memory agents retain context across sessions, enabling long-running conversations and persistent knowledge.

## Configuration

```typescript
const agent = new Agent({
  name: 'memory-agent',
  memory: {
    type: 'persistent',
    store: 'redis',
    ttl: '30d',
  },
});
```

## Memory Types

- **Short-term** — within a single session
- **Long-term** — persisted across sessions
- **Episodic** — event-based recall

## Usage

```typescript
await agent.remember('user prefers dark mode');
const context = await agent.recall('user preferences');
```
