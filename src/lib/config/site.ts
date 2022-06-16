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
    photo: 'https://lh3.googleusercontent.com/a-/AOh14Ggr4G6iQsNn7Zmm6DU_J1qLpDYDZqVIf_5E01kfzA=s432-p-rw-no',
    status: '🌸',
    bio: 'Hello World!'
  },
  themeColor: '#3d4451'
}
