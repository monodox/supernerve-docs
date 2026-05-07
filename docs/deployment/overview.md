---
sidebar_position: 1
---

# Deployment Overview

supernerve can be deployed to various cloud environments.

## Deployment Options

| Platform | Status | Guide |
|----------|--------|-------|
| AWS | Supported | [AWS Guide](./aws.md) |
| GCP | Coming soon | — |
| Azure | Coming soon | — |
| Self-hosted | Supported | — |

## Requirements

- Node.js 18+ runtime
- 512MB+ RAM per agent
- Persistent storage for memory agents
- Network access for connectors

## Environment Variables

```bash
SUPERNERVE_API_KEY=sk-...
SUPERNERVE_ENV=production
SUPERNERVE_LOG_LEVEL=info
```
