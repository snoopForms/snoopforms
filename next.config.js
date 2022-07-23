/** @type {import('next').NextConfig} */
var path = require("path");

const nextConfig = {
  webpack5: false,
  reactStrictMode: false,
  serverRuntimeConfig: {
    // Will only be available on the server side
    nextauthSecret: process.env.NEXTAUTH_SECRET,
    nextauthUrl: process.env.NEXTAUTH_URL,
    mailFrom: process.env.MAIL_FROM,
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPassword: process.env.SMTP_PASSWORD,
    smtpSecureEnabled: process.env.SMTP_SECURE_ENABLED,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    posthogApiHost: process.env.POSTHOG_API_HOST,
    posthogApiKey: process.env.POSTHOG_API_KEY,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/forms/",
        permanent: false,
      },
    ];
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["react"] = path.resolve("./node_modules/react");
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
