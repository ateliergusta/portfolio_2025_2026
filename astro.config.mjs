// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

function webpPlugin() {
  const extensions = ['.jpg', '.jpeg', '.png'];
  let projectRoot = '';

  return {
    name: 'vite-plugin-webp',
    enforce: 'pre',
    configResolved(config) {
      projectRoot = config.root;
    },
    async buildStart() {
      const publicDir = path.join(projectRoot, 'public');
      await convertToWebp(publicDir);
    }
  };

  async function convertToWebp(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await convertToWebp(fullPath);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (extensions.includes(ext) && !entry.name.endsWith('.webp') && !entry.name.endsWith('.avif')) {
          const webpPath = fullPath.replace(/\.[^.]+$/, '.webp');
          if (!fs.existsSync(webpPath)) {
            await sharp(fullPath)
              .webp({ quality: 80 })
              .toFile(webpPath);
            console.log(`  ✓ ${path.relative(projectRoot, webpPath)}`);
          }
        }
      }
    }
  }
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), webpPlugin()]
  }
});
