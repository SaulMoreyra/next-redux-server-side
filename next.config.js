module.exports = {
  rewrites: async () => [
    {
      source: "/health",
      destination: "/api/health",
    },
  ],
  experimental: { styledComponents: true },
  feature: {
    webpack5: true,
  },
};
