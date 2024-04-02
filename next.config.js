/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['avatars.githubusercontent.com' , "media.licdn.com" , 'yt3.googleusercontent.com' , '2018.jsconf.is', 'pbs.twimg.com']
	}
};

module.exports = nextConfig;