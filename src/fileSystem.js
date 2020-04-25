const fileSystem = () => {
  const system = {
    name: 'nodejs-package',
    type: 'directory',
    meta: { hidden: true },
    children: [
      {
        name: 'Makefile',
        type: 'file',
        meta: {},
      },
      {
        name: 'README.md',
        type: 'file',
        meta: {},
      },
      {
        name: 'dist',
        type: 'directory',
        meta: {},
      },
      {
        name: '__tests__',
        type: 'directory',
        meta: {},
        children: [
          {
            name: 'half.test.js',
            type: 'file',
            meta: { type: 'text/javascript' },
          }
        ],
      },
      {
        name: 'babel.config.js',
        type: 'file',
        meta: { type: 'text/javascript' },
      },
      {
        name: 'node_modules',
        type: 'directory',
        meta: { owner: 'root', hidden: false },
        children: [
          {
            name: '@babel',
            type: 'directory',
            meta: {},
            children: [
              {
                name: 'cli',
                type: 'directory',
                meta: {},
                children: [
                  {
                    name: 'LICENSE',
                    type: 'file',
                    meta: {},
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
  return system;
};
export default fileSystem;