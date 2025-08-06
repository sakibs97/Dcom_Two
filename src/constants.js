import 'dotenv/config';

const PORT = process.env.PORT;
const WHAITELISTDOMAIN = process.env.WHAITELISTDOMAIN ?? 'http://localhost:8000';
const MONGODB_URL = process.env.MONGODB_URL;

export { PORT, WHAITELISTDOMAIN, MONGODB_URL };
