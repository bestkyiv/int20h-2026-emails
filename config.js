import "dotenv/config";

/** @type {import('@maizzle/framework').Config} */
export default {
  // Define defaults here
  externalAssets: "https://localhost:8080/assets",
  countdownTimer: "https://localhost:8080",
  imageSource: "",

  build: {
    content: ["emails/**/*.html"],
    static: {
      source: ["images/**/*.*"],
      destination: "images",
    },
  },
};
