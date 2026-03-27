const requiredEnv = ['PORT', 'MONGO_URI', 'JWT_SECRET'];

const checkEnv = () => {
  requiredEnv.forEach((name) => {
    if (!process.env[name]) {
      console.error(`❌ Error: Environment variable ${name} is missing!`);
      process.exit(1);
    }
  });
  console.log("✅ All environment variables are set.");
};

module.exports = checkEnv;