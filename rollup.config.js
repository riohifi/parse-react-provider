import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'src/index.tsx', // Entry point for the bundle
  output: [
    {
      file: pkg.main, // CommonJS (for Node) build
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module, // ES module (for bundlers) build
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json', // Use the project's TypeScript configuration
    }),
  ],
  external: ['react', 'parse'], // Specify external dependencies (like React and Parse)
};
