---
sidebar_position: 2
---

# AWS Deployment

Deploy supernerve agents to AWS using Lambda, ECS, or EC2.

## Lambda (Serverless)

Best for task agents and event-driven workflows.

```bash
npx supernerve deploy --platform aws-lambda --region us-east-1
```

## ECS (Containers)

Best for long-running agents with persistent memory.

```bash
npx supernerve deploy --platform aws-ecs --cluster my-cluster
```

## Required AWS Permissions

- `lambda:CreateFunction` / `lambda:UpdateFunctionCode`
- `ecs:CreateService` / `ecs:UpdateService`
- `logs:CreateLogGroup` / `logs:PutLogEvents`
- `secretsmanager:GetSecretValue`

## Configuration

```json
{
  "deploy": {
    "platform": "aws-lambda",
    "region": "us-east-1",
    "memory": 512,
    "timeout": 30
  }
}
```
