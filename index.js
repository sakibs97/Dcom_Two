import { app } from './src/app.js';
import { PORT } from './src/constants.js';
import { dbConnect } from './src/db/index.js';

const serverStart = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server is running http://localhost:${PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
};

serverStart();
