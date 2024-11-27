const cloudinary = require('cloudinary').v2;

try {
  // Load environment variables from the .env file
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });

  console.log('Cloudinary configured successfully');
} catch (error) {
  console.error('Error configuring Cloudinary:', error.message);
  // Optionally throw the error if you want to stop the application startup
  throw new Error('Cloudinary configuration failed');
}

module.exports = cloudinary;
