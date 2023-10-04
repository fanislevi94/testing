/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "http://localhost:3000/api/get",
    uriEdit: "http://localhost:3000/edit",
  },
};

module.exports = nextConfig;
