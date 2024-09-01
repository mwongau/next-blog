/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /*basePath: '/next-blog',*/
  
  output: "export",
  images: {
    /*loader: "akamai",*/
    path: "",
	
	
	unoptimized: true  },
  
  assetPrefix: "./",
};

export default nextConfig;



/** @type {import('next').NextConfig} */
/*const nextConfig = {
	basePath: '/nextjs-site',
	output: 'export',
	images: { unoptimized: true } 
}

module.exports = nextConfig*/

