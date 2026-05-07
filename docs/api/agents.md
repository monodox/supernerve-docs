---
sidebar_position: 3
---

# Agents API

## List Agents

```
GET /v1/agents
```

## Create Agent

```
POST /v1/agents
```

```json
{
  "name": "my-agent",
  "skills": ["summarize", "extract"],
  "connectors": ["slack"]
}
```

## Get Agent

```
GET /v1/agents/:agentId
```

## Run Agent

```
POST /v1/agents/:agentId/run
```

```json
{
  "input": "Summarize the latest team updates",
  "options": { "maxTokens": 500 }
}
```

## Delete Agent

```
DELETE /v1/agents/:agentId
```
