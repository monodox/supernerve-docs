---
sidebar_position: 3
---

# Authentication

supernerve uses API keys to authenticate requests.

## Getting Your API Key

1. Sign up at [supernerve.monodox.com](https://supernerve.monodox.com)
2. Navigate to **Settings → API Keys**
3. Click **Create New Key**

## Configuration

Set your API key as an environment variable:

```bash
export SUPERNERVE_API_KEY=sk-your-api-key-here
```

Or pass it directly in code:

```typescript
import { SuperNerve } from '@supernerve/sdk';

const client = new SuperNerve({
  apiKey: process.env.SUPERNERVE_API_KEY,
});
```

## Key Rotation

Rotate your keys regularly for security. Old keys can be revoked from the dashboard.
