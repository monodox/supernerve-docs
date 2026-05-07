# Changelog

All notable changes to supernerve will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioned per [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned
- Redis connector
- Azure deployment guide
- Workflow visual editor docs
- Python SDK reference

---

## [0.1.0] — 2026-05-07

### 🧠 The First Impulse

The nervous system awakens.

### Added

- **Agent Framework** — Memory, Connector, Workflow, Research, Task, and Interface agents
- **Skills Engine** — Summarize, Extract, Classify, Generate, Search, Compare, Format
- **Connectors** — Slack, Notion, GitHub, Google Drive
- **Workflow Engine** — Triggers (schedule, webhook, event, manual) and multi-step execution
- **REST API** — Full CRUD for agents, skills, connectors with Bearer auth
- **Deployment** — AWS Lambda and ECS support
- **Documentation Site** — Built with Docusaurus 3, full API reference, guides, and examples
- **TypeScript & Python SDKs** — Type-safe client libraries

### Architecture Decisions

- Chose agent-first architecture over traditional microservices
- Skills are composable primitives, not monolithic features
- Connectors are bidirectional — they push and pull
- Memory is a first-class citizen, not an afterthought

---

*"Every great system starts with a single signal."*
