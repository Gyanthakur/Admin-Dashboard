/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enables font optimization if you are using Google Fonts or other custom fonts
    
  
    // Optional: Enabling React Strict Mode for better error handling in development
    reactStrictMode: true,
  
    // Optional: Enabling SWC minification (default in Next.js, but can be explicitly enabled)
    swcMinify: true,
  
    // If you use images from external sources, you can configure domains here
    images: {
      domains: ['example.com'], // Add the domains you're using for images
    },
  
    // If you use environment variables in your project, you can define them here
    env: {
      customKey: 'value', // Replace with your own environment variables if needed
    },
  
    // Optional: Configure custom headers, redirects, or rewrites
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-Custom-Header',
              value: 'my-custom-header-value',
            },
          ],
        },
      ]
    },
  }
  
  module.exports = nextConfig
  