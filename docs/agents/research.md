---
sidebar_position: 5
---

# Research Agent

Research agents gather, synthesize, and summarize information from multiple sources.

## Configuration

```typescript
const agent = new Agent({
  name: 'research-agent',
  skills: ['search', 'summarize', 'extract'],
  connectors: ['google-drive', 'notion'],
});
```

## Capabilities

- Multi-source information gathering
- Cross-reference and fact-checking
- Citation tracking
- Structured report generation

## Usage

```typescript
const report = await agent.research({
  topic: 'AI agent frameworks comparison',
  depth: 'comprehensive',
  format: 'markdown',
});
```
