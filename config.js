import "dotenv/config";

/** @type {import('@maizzle/framework').Config} */
export default {
  // Define defaults here
  countdownTimer: "http://localhost:8080",
  imageSource: "",
  fontSource: "../fonts",

  build: {
    content: ["emails/**/*.html"],
    static: {
      source: ["images/**/*.*"],
      destination: "images",
    },
  },
};
