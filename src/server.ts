import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

(async () => {
  try {
    // Connect with database
    await mongoose.connect(config.DB_URI);

    // Start server
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
