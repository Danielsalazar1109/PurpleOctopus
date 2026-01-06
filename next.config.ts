module.exports = {
  // Avoid Next.js incorrectly inferring the workspace root when multiple lockfiles exist on disk.
  outputFileTracingRoot: __dirname,
  images: {
    // images.domains is deprecated; use remotePatterns instead.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'custom-images.strikinglycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'brilliantbrothersservices.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}