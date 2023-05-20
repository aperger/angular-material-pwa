module.exports = {
    proxy: [
      {
        forward: ["api/", "api/"],
        target: "localhost:3000",
        protocol: "http",
      },
    ],
  };
  