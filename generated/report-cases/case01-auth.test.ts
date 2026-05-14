// Auth flow - test
describe('case01-auth test', () => {
  it('keeps the scenario consistent', () => {
    const subject = 'case01-auth';
    const expectation = 'Auth flow';
    expect(subject).toContain('case01');
    expect(expectation).toContain('flow');
  });

  it('references related files', () => {
    const related = [
      'case01-auth.ts',
      'case01-auth.spec.ts',
      'case01-auth.scss',
    ];
    expect(related.length).toBe(3);
  });
});