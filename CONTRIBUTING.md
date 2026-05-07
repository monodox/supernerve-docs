# Contributing to supernerve

First off — thank you. Every contribution makes the nervous system smarter.

## How to Contribute

### 🐛 Found a Bug?

1. Check [existing issues](https://github.com/monodox/supernerve-docs/issues) first
2. Open a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, browser)

### 💡 Have an Idea?

Open a [discussion](https://github.com/monodox/supernerve-docs/discussions) or issue tagged `enhancement`. Describe:
- The problem you're solving
- Your proposed solution
- Alternatives you've considered

### 📝 Improving Documentation

Documentation PRs are always welcome. This is a docs site — every word matters.

## Development Setup

```bash
# Clone the repo
git clone https://github.com/monodox/supernerve-docs.git
cd supernerve-docs

# Install dependencies
npm install

# Start dev server
npm start
```

The site will be available at `http://localhost:3000`.

## Pull Request Process

1. **Fork** the repository
2. **Branch** from `main` — use descriptive names:
   - `docs/add-redis-connector-guide`
   - `fix/broken-link-agents-page`
   - `feat/api-reference-search`
3. **Commit** with clear messages:
   ```
   docs: add Redis connector setup guide

   Adds step-by-step instructions for configuring the Redis
   connector including authentication and connection pooling.
   ```
4. **Test** your changes locally with `npm run build`
5. **Open a PR** against `main`

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use |
|--------|-----|
| `docs:` | Documentation changes |
| `fix:` | Bug fixes |
| `feat:` | New features |
| `chore:` | Maintenance tasks |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructuring |

## Style Guide

### Documentation

- Write in second person ("You can configure...")
- Use active voice
- Keep sentences short and direct
- Include code examples for every concept
- Use admonitions (`:::tip`, `:::warning`) sparingly but effectively

### Code

- TypeScript for all source files
- Prettier for formatting (runs on commit)
- No unused imports or variables

## Review Process

- PRs require 1 approval before merge
- Maintainers may request changes — this is collaborative, not adversarial
- We aim to review within 48 hours

## Community

- Be kind. See our [Code of Conduct](CODE_OF_CONDUCT.md)
- Ask questions in Discussions — no question is too basic
- Help others when you can

---

*The best nervous systems are built by many minds. Welcome aboard.*
