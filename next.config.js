module.exports = {
  async redirects_() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
};
