import "dotenv/config";

/** @type {import('@maizzle/framework').Config} */
export default {
  // Define defaults here
  externalAssets: "http://localhost:8080/assets",
  countdownTimer: "http://localhost:8080",
  imageSource: "",

  build: {
    content: ["emails/**/*.html"],
    static: {
      source: ["images/**/*.*"],
      destination: "images",
    },
  },
};
