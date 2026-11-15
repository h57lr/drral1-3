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
        source: "/ar/veneers-dr-ali-jordan",
        destination: encodeURI("/ar/افضل-دكتور-فينير-عمان-علي-الحنيطي"),
        permanent: true
      },
      {
        source: "/:locale(en|ar)/services/hollywood-smile-jordan",
        destination: "/:locale/services/veneers-in-jordan",
        permanent: true
      },
      {
        source: "/:locale(en|ar)/reels",
        destination: "/:locale/transformations",
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
