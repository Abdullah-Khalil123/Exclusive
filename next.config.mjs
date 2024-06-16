/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/About",
        destination: "/Pages/About",
      },
      {
        source: "/SignUp",
        destination: "/Pages/SignUp",
      },
    ];
  },
};

export default nextConfig;
