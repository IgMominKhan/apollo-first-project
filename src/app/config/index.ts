import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 5000,
  DB_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/apollo-project-1',
  DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,
  SALT_ROUND: process.env.SALT_ROUND,
};
