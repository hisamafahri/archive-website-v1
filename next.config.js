/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/project',
        permanent: true,
      },
      {
        source: '/works',
        destination: '/project',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
