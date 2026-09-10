import type { DepTypeMetadata } from '../types.ts';

export const knownDepTypes = [
  {
    depType: 'require',
    description: 'Production dependency from `require` section',
  },
  {
    depType: 'require-dev',
    description: 'Development dependency from `require-dev` section',
  },
  {
    depType: 'indirect',
    description: 'Transitive dependency from `composer.lock`',
  },
] as const satisfies readonly DepTypeMetadata[];
