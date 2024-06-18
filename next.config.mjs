/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Exclusive",
  output: "export",
  images: { unoptimized: false },
  async rewrites() {
    return [
      {
        source: "/About",
        destination: "/About",
      },
      {
        source: "/SignUp",
        destination: "/SignUp",
      },
      {
        source: "/Login",
        destination: "/Login",
      },
      {
        source: "/Product/:id",
        destination: "/Product/:id",
      },
    ];
  },
};

export default nextConfig;
