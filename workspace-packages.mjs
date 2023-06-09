const packages = [
  { name: 'dev-server-hmr', type: 'js', environment: 'node', strict: true },
  { name: 'import-maps-resolve', type: 'js', environment: 'node' },
  { name: 'lit-helpers', type: 'ts', environment: 'browser', outDir: "./" },
  { name: 'scoped-elements', type: 'js', environment: 'browser' },
  { name: 'testing-helpers', type: 'js', environment: 'browser' },
];

export { packages };
