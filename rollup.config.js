const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const packageJson = require('./package.json');

/** @type {import('rollup').RollupOptions} */
module.exports = {
  input: 'src/index.ts',
  output: [
    {
      dir: path.dirname(packageJson.main),
      format: 'cjs',
      preserveModules: true,
      sourcemap: true,
    },
    {
      dir: path.dirname(packageJson.module),
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
  ],
  external: [
    'react/jsx-runtime',
  ],
  plugins: [
    typescript(),
  ],
};
