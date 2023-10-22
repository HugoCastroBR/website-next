/** @type {import('next').NextConfig} */
const WithFeatureFlags = require('next-feature-flags')
const nextConfig = {
  WithFeatureFlags: {
    features: {
      serverActions: true, // Enable the Server Actions feature flag
    },
  },
}

module.exports = nextConfig
