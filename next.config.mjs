/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns:[
         {
            hostname : "d11wbp5a59q34o.cloudfront.net",
            protocol : "https"
         }
      ]
   },
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
     config.resolve.alias.canvas = false;
     config.resolve.alias.encoding = false;
     config.resolve.alias = {
       ...config.resolve.alias,
       sharp$: false,
       "onnxruntime-node$": false,
     };

     return config;
   }
 };
 
 export default nextConfig;
 