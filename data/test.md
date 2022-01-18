---
title: "Building markdown based page in Next.js"
author: "Hisam Fahri"
date: 2022-01-17
tags: ["nextjs", "markdown", "web"]
---

# Test

```js
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
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  }
}

```