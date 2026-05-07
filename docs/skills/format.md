---
sidebar_position: 8
---

# Format

Transform content structure and presentation.

## Usage

```typescript
const result = await Skill.run('format', {
  input: rawText,
  outputFormat: 'markdown',
  structure: 'headings-and-bullets',
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `input` | string | required | Content to format |
| `outputFormat` | string | `'markdown'` | Target format |
| `structure` | string | — | Desired structure |
