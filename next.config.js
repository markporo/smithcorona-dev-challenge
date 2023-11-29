module.exports = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.picsum.photos',
          port: '',
          pathname: '/300/300/**',
        },
      ],
    },
  }