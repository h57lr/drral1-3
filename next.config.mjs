/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/en/veneers-dr-ali-jordan",
        destination: "/en/best-veneers-doctor-amman-dr-ali-alheneiti",
        permanent: true
      },
      {
        source: "/en/services/hollywood-smile-jordan",
        destination: "/en/services/dental-veneers-jordan",
        permanent: true
      },
      {
        source: "/ar/services/hollywood-smile-jordan",
        destination: encodeURI("/ar/services/فينير-الأسنان-في-الأردن"),
        permanent: true
      },
      {
        source: "/en/reels",
        destination: "/en/transformations",
        permanent: true
      },
      {
        source: "/ar/reels",
        destination: encodeURI("/ar/تحولات-الابتسامة"),
        permanent: true
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" }
        ]
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
