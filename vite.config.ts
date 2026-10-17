/// <reference types="vitest" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import profile from './src/config/profile';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function profileMeta(): Plugin {
  const { site } = profile;
  const tokens: Record<string, string> = {
    __SITE_TITLE__: site.title,
    __SITE_DESCRIPTION__: site.description,
    __SITE_KEYWORDS__: site.keywords.join(', '),
    __SITE_URL__: site.url,
    __SITE_OG_IMAGE__: new URL(site.ogImage, site.url).toString(),
    __SITE_ACCENT__: site.accentColor,
  };
  return {
    name: 'profile-meta',
    transformIndexHtml(html) {
      return Object.entries(tokens).reduce(
        (out, [token, value]) => out.split(token).join(escapeHtml(value)),
        html,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), profileMeta()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
