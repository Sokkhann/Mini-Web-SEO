/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['hips.hearstapps.com', 'fakestoreapi.com', 'i0.wp.com'],
      // Use remotePatterns to specify custom domains
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'store.istad.co'
        },
        {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            pathname: '/564x/b8/69/a9/b869a9247c8ce0b0cd4bdf891aa004ba.jpg'
        }
      ],
    },
  };
  
  export default nextConfig;
  