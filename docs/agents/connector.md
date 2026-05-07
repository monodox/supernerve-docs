---
sidebar_position: 3
---

# Connector Agent

Connector agents interface with external services, enabling data flow between supernerve and third-party platforms.

## Configuration

```typescript
const agent = new Agent({
  name: 'connector-agent',
  connectors: ['slack', 'notion', 'github'],
});
```

## How It Works

1. Agent receives a task requiring external data
2. Selects the appropriate connector
3. Authenticates and fetches/pushes data
4. Returns results to the caller

## Supported Connectors

See the [Connectors section](../connectors/overview.md) for the full list.
