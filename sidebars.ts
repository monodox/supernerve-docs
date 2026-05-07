import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/installation',
        'getting-started/authentication',
      ],
    },
    {
      type: 'category',
      label: 'Agents',
      items: [
        'agents/overview',
        'agents/memory',
        'agents/connector',
        'agents/workflow',
        'agents/research',
        'agents/task',
        'agents/interface',
      ],
    },
    {
      type: 'category',
      label: 'Skills',
      items: [
        'skills/overview',
        'skills/summarize',
        'skills/extract',
        'skills/classify',
        'skills/generate',
        'skills/search',
        'skills/compare',
        'skills/format',
      ],
    },
    {
      type: 'category',
      label: 'Connectors',
      items: [
        'connectors/overview',
        'connectors/slack',
        'connectors/notion',
        'connectors/github',
        'connectors/google-drive',
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      items: ['libraries/overview'],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/overview',
        'workflows/triggers',
        'workflows/steps',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/authentication',
        'api/agents',
        'api/skills',
        'api/connectors',
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/overview',
        'deployment/aws',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
