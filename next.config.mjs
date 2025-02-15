/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio", // Change this to match your repository name
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
