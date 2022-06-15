import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ?? 'urara-demo.netlify.app',
  title: 'Shaum',
  subtitle: '',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Shaum',
    photo: '/assets/maskable@192.png',
    status: '🌸',
    bio: 'Hello World!'
  },
  themeColor: '#3d4451'
}
