---
sidebar_position: 2
---

# API Authentication

## API Keys

Include your API key in every request:

```bash
curl -H "Authorization: Bearer sk-your-api-key" \
  https://api.supernerve.monodox.com/v1/agents
```

## Endpoints

### Create API Key

```
POST /v1/auth/keys
```

### List API Keys

```
GET /v1/auth/keys
```

### Revoke API Key

```
DELETE /v1/auth/keys/:keyId
```
