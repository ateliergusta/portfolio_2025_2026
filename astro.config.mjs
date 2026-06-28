// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

function webpPlugin() {
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
    },
    async closeBundle() {
      const distDir = path.join(projectRoot, 'dist');
      await cleanOriginals(distDir);
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
        if (['.jpg', '.jpeg', '.png'].includes(ext) && !entry.name.endsWith('.webp') && !entry.name.endsWith('.avif')) {
          const webpPath = fullPath.replace(/\.[^.]+$/, '.webp');
          if (!fs.existsSync(webpPath)) {
            await sharp(fullPath).rotate().webp({ quality: 80 }).toFile(webpPath);
            console.log(`  ✓ ${path.relative(projectRoot, webpPath)}`);
          }
        }
      }
    }
  }

  async function cleanOriginals(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await cleanOriginals(fullPath);
      } else {
        const ext = path.extname(entry.name);
        if (imageExtensions.includes(ext)) {
          fs.unlinkSync(fullPath);
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
