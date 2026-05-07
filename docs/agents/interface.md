---
sidebar_position: 7
---

# Interface Agent

Interface agents provide user-facing interactions, handling conversations and UI-driven tasks.

## Configuration

```typescript
const agent = new Agent({
  name: 'interface-agent',
  interface: {
    type: 'chat',
    memory: true,
  },
});
```

## Features

- Conversational UI support
- Multi-turn dialogue management
- Context-aware responses
- Handoff to specialized agents

## Usage

```typescript
const response = await agent.chat('What tasks are due today?');
```
