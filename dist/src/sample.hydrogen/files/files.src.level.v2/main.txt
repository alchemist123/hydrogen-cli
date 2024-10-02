import sequelize from './config/database';
import app from './app';
import dotenv from 'dotenv';

dotenv.config();
sequelize.sync();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
