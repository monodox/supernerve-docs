---
sidebar_position: 1
---

# Connectors Overview

Connectors integrate supernerve agents with external services, enabling data flow in and out of your workflows.

## Available Connectors

| Connector | Description |
|-----------|-------------|
| [Slack](./slack.md) | Send/receive messages, manage channels |
| [Notion](./notion.md) | Read/write pages and databases |
| [GitHub](./github.md) | Issues, PRs, and repository data |
| [Google Drive](./google-drive.md) | File access and management |

## Using Connectors

```typescript
import { Connector } from '@supernerve/sdk';

const slack = new Connector('slack', {
  token: process.env.SLACK_TOKEN,
});

await slack.send('#general', 'Hello from supernerve!');
```
