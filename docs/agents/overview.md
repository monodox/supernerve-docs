---
sidebar_position: 1
---

# Agents Overview

Agents are the core building blocks of supernerve. An agent is an autonomous AI entity that can reason, remember context, use skills, and connect to external services.

## Creating an Agent

```typescript
import { Agent } from '@supernerve/sdk';

const agent = new Agent({
  name: 'research-agent',
  memory: true,
  skills: ['summarize', 'search', 'extract'],
  connectors: ['notion', 'slack'],
});
```

## Agent Lifecycle

1. **Initialize** — configure skills, memory, and connectors
2. **Run** — execute a task or respond to a trigger
3. **Remember** — persist context for future interactions
4. **Report** — output results via connectors or API

## Agent Types

| Type | Description |
|------|-------------|
| Memory | Retains context across sessions |
| Connector | Interfaces with external services |
| Workflow | Orchestrates multi-step processes |
| Research | Gathers and synthesizes information |
| Task | Executes specific actions |
| Interface | Provides user-facing interactions |
