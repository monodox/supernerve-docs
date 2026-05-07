# Security Policy

## Our Commitment

supernerve takes security seriously. An enterprise nervous system must be as resilient as it is intelligent. We treat every vulnerability report as a critical signal in our own feedback loop.

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 0.1.x   | ✅ Active support  |
| < 0.1   | ❌ Not supported   |

## Reporting a Vulnerability

**Please do not open public GitHub issues for security vulnerabilities.**

Instead, report them privately:

1. **Email:** security@monodox.com
2. **Subject:** `[SECURITY] Brief description`
3. **Include:**
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact assessment
   - Suggested fix (if any)

## Response Timeline

| Stage | Timeframe |
|-------|-----------|
| Acknowledgment | Within 48 hours |
| Initial assessment | Within 5 business days |
| Fix development | Depends on severity |
| Public disclosure | After fix is released |

## Severity Classification

- **Critical** — Remote code execution, authentication bypass, data exfiltration
- **High** — Privilege escalation, significant data exposure
- **Medium** — Limited data exposure, denial of service
- **Low** — Information disclosure with minimal impact

## Security Best Practices for Users

- Rotate API keys regularly
- Use environment variables for secrets — never hardcode them
- Keep dependencies updated
- Enable audit logging in production deployments
- Restrict connector permissions to minimum required scope

## Recognition

We maintain a security hall of fame for responsible disclosures. Reporters will be credited (with permission) in our changelog and security advisories.

---

*A nervous system that can't protect itself isn't worth building. Thank you for helping us stay sharp.*
