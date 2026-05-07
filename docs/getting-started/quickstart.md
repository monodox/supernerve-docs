---
sidebar_position: 1
---

# Quickstart

Get up and running with supernerve in under 5 minutes.

## 1. Install the SDK

```bash
npm install @supernerve/sdk
```

## 2. Create Your First Agent

```typescript
import { Agent } from '@supernerve/sdk';

const agent = new Agent({
  name: 'my-first-agent',
  skills: ['summarize', 'extract'],
});

const result = await agent.run('Summarize the latest news about AI.');
console.log(result);
```

## 3. Run It

```bash
npx ts-node agent.ts
```

## Next Steps

- [Installation](./installation.md) — detailed setup instructions
- [Authentication](./authentication.md) — configure API keys
- [Agents Overview](../agents/overview.md) — learn about agent capabilities
