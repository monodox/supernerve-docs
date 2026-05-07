---
sidebar_position: 2
---

# Slack Connector

Send messages, read channels, and respond to events in Slack.

## Setup

```typescript
const slack = new Connector('slack', {
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});
```

## Actions

- `send(channel, message)` — Post a message
- `read(channel, options)` — Read channel history
- `react(messageId, emoji)` — Add a reaction
- `listen(event, handler)` — Subscribe to events

## Example

```typescript
await slack.send('#alerts', 'Deployment complete ✅');
```
