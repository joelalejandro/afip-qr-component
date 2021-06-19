module.exports = {
  targets: {
    '@paperchest/afip-qr-react': {
      name: '@paperchest/afip-qr-react',
      hasFolder: false,
      createFolder: false,
      entry: {
        default: 'index.jsx',
        development: null,
        production: null,
      },
      type: 'node',
      library: true,
      transpile: true,
      output: {
        default: {
          js: '[target-name].js',
        },
        development: {
          js: '[target-name].js',
        },
      },
    },
  },
};
