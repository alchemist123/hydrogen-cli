export const tsconfigContent = {
    compilerOptions: {
      target: 'ES2020',
      module: 'commonjs',
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      outDir: './dist',
      experimentalDecorators: true,
      emitDecoratorMetadata: true,
      moduleResolution: 'node',
    },
    include: ['src'],
    exclude: ['node_modules'],
  };
  