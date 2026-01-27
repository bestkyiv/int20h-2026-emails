/* config.production.js */
/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    output: {
      path: "build_production",
    },
  },

  externalAssets: process.env.EXTERNAL_ASSETS_URL,
  countdownTimer: process.env.COUNTDOWN_TIMER_URL,

  beforeCreate({ config }) {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const githubRepo =
      "https://raw.githubusercontent.com/bestkyiv/int20h-2026-emails/refs/heads/main/images";

    if (!cloudName) {
      throw new Error("STOP: CLOUDINARY_CLOUD_NAME is missing in .env");
    }

    // 3. Construct the "Fetch" URL
    // Result: https://res.cloudinary.com/xyz/image/fetch/f_png,q_auto/https://raw.github.../images
    config.imageSource = `https://res.cloudinary.com/${cloudName}/image/fetch/f_png,q_auto/${githubRepo}`;
  },

  css: {
    inline: true,
    purge: true,
    shorthand: true,
  },
};
