/** @type {import('next').NextConfig} */
const nextConfig = {
   
}



module.exports = nextConfig

module.exports = {
    webpack: (config, { dev, isServer }) => {
      // Enable importing files without the '.tsx' extension
      config.resolve.extensions.push('.ts');
  
      // Return the modified webpack configuration
      return config;
    },
  };

module.exports = {
    typescript: {
        // Enable importing TypeScript extensions
        allowImportingTsExtensions: true,
      },
    env: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  };
  

 