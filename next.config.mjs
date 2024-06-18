/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Exclusive",
  // output: "export",
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
      {
        source: "/Login",
        destination: "/Pages/Login",
      },
      {
        source: "/Product/:id",
        destination: "/Pages/Product/:id",
      },
    ];
  },
};

export default nextConfig;
