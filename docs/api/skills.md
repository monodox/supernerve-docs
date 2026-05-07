---
sidebar_position: 4
---

# Skills API

## List Skills

```
GET /v1/skills
```

## Run Skill

```
POST /v1/skills/:skillName/run
```

```json
{
  "input": "Long text to summarize...",
  "options": { "maxLength": 200 }
}
```

## Get Skill Info

```
GET /v1/skills/:skillName
```

Returns skill metadata, supported options, and usage examples.
