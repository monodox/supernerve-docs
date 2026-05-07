---
sidebar_position: 3
---

# Extract

Pull structured data from unstructured text, returning typed objects.

## Usage

```typescript
const result = await Skill.run('extract', {
  input: 'John Doe, age 30, lives in NYC...',
  schema: { name: 'string', age: 'number', city: 'string' },
});
// { name: 'John Doe', age: 30, city: 'NYC' }
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `input` | string | required | Source text |
| `schema` | object | required | Expected output shape |
| `strict` | boolean | `false` | Fail if fields are missing |
