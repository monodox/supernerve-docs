---
sidebar_position: 2
---

# Summarize

Condense long text into concise summaries while preserving key information.

## Usage

```typescript
const result = await Skill.run('summarize', {
  input: 'Long article text...',
  maxLength: 150,
  style: 'bullet-points', // or 'paragraph'
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `input` | string | required | Text to summarize |
| `maxLength` | number | 200 | Max words in output |
| `style` | string | `'paragraph'` | Output format |
