---
sidebar_position: 5
---

# Generate

Create new content from prompts and templates.

## Usage

```typescript
const result = await Skill.run('generate', {
  prompt: 'Write a product description for a smart watch',
  tone: 'professional',
  maxLength: 100,
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `prompt` | string | required | Generation prompt |
| `tone` | string | `'neutral'` | Writing tone |
| `maxLength` | number | 500 | Max words |
| `template` | string | — | Template to follow |
