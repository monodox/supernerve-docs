---
sidebar_position: 4
---

# Classify

Categorize content into predefined or dynamic labels.

## Usage

```typescript
const result = await Skill.run('classify', {
  input: 'The server is returning 500 errors',
  labels: ['bug', 'feature', 'question', 'docs'],
});
// { label: 'bug', confidence: 0.92 }
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `input` | string | required | Text to classify |
| `labels` | string[] | required | Possible categories |
| `multiLabel` | boolean | `false` | Allow multiple labels |
