/** @type {import('next').NextConfig} */
const nextConfig = {

  
 

    images:{
        remotePatterns: [
          
            {
           
              hostname:'"res.cloudinary.com"',
            },
            {
              protocol: 'https',
              hostname: '"lh3.googleusercontent.com"',
            },
          ]
    },


    
};

export default nextConfig;
