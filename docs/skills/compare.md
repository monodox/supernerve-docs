---
sidebar_position: 7
---

# Compare

Analyze differences and similarities between two or more inputs.

## Usage

```typescript
const result = await Skill.run('compare', {
  inputs: [documentA, documentB],
  aspects: ['tone', 'key-points', 'structure'],
});
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `inputs` | string[] | required | Items to compare |
| `aspects` | string[] | all | Comparison dimensions |
| `format` | string | `'table'` | Output format |
