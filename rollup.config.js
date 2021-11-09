import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const globals = {
  react: 'React',
}

export default {
  input: 'src/index.ts',
  external: ['react'],
  output: [
    {
      file: `dist/index.js`,
      format: 'cjs',
      strict: true,
      sourcemap: true,
      exports: 'named',
      globals,
    },
    {
      file: `dist/index.esm.js`,
      format: 'esm',
      strict: true,
      sourcemap: true,
      exports: 'named',
      globals,
    },
    {
      format: 'umd',
      name: 'ReactIcons',
      file: `dist/index.umd.js`,
      strict: true,
      sourcemap: false,
      exports: 'named',
      globals,
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
}
