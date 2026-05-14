// Auth flow - source
export const case01_auth_SOURCE = {
  name: 'case01-auth',
  label: 'Auth flow',
  kind: 'source',
  relatedFiles: [
    'case01-auth.ts',
    'case01-auth.test.ts',
    'case01-auth.spec.ts',
  ],
  version: 1,
};

export function describeSource() {
  return 'case01-auth:source';
}