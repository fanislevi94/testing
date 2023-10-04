/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "http://localhost:3001/api/get",
    uriEdit: "http://localhost:3001/edit",
  },
};

module.exports = nextConfig;
