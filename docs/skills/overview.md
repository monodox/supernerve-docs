---
sidebar_position: 1
---

# Skills Overview

Skills are reusable AI capabilities that agents can invoke. Each skill performs a specific function and can be composed together.

## Available Skills

| Skill | Description |
|-------|-------------|
| [Summarize](./summarize.md) | Condense text into key points |
| [Extract](./extract.md) | Pull structured data from unstructured text |
| [Classify](./classify.md) | Categorize content into labels |
| [Generate](./generate.md) | Create new content from prompts |
| [Search](./search.md) | Find relevant information |
| [Compare](./compare.md) | Analyze differences between inputs |
| [Format](./format.md) | Transform content structure |

## Using Skills

```typescript
import { Skill } from '@supernerve/sdk';

const summary = await Skill.run('summarize', {
  input: longDocument,
  maxLength: 200,
});
```
