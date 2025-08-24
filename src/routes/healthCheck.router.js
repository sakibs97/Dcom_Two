import e from 'express';
import healthCheck from '../controllers/healthCheck.controller.js';


const router = e.Router();
router.get('/health', healthCheck);
export default router;
