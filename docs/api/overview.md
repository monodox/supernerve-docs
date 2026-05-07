---
sidebar_position: 1
---

# API Overview

The supernerve REST API provides programmatic access to all platform features.

## Base URL

```
https://api.supernerve.monodox.com/v1
```

## Authentication

All requests require an API key in the `Authorization` header:

```
Authorization: Bearer sk-your-api-key
```

## Response Format

All responses return JSON:

```json
{
  "data": { ... },
  "meta": { "requestId": "req_abc123" }
}
```

## Rate Limits

- 100 requests/minute (free tier)
- 1000 requests/minute (pro tier)

## Endpoints

- [Authentication](./authentication.md)
- [Agents](./agents.md)
- [Skills](./skills.md)
- [Connectors](./connectors.md)
