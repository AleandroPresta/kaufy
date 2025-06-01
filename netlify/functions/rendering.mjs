import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Import the Angular SSR request handler
export { reqHandler as default } from '../../dist/kaufy/server/server.mjs';
