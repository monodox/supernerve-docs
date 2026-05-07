---
sidebar_position: 5
---

# Connectors API

## List Connectors

```
GET /v1/connectors
```

## Configure Connector

```
POST /v1/connectors/:connectorName/configure
```

```json
{
  "token": "xoxb-...",
  "options": { "defaultChannel": "#general" }
}
```

## Execute Connector Action

```
POST /v1/connectors/:connectorName/execute
```

```json
{
  "action": "send",
  "params": { "channel": "#alerts", "message": "Hello!" }
}
```

## Get Connector Status

```
GET /v1/connectors/:connectorName/status
```
