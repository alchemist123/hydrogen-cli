"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsconfigContent = void 0;
exports.tsconfigContent = {
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
