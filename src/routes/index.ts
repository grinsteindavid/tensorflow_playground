import { Router } from 'express';
import predictionsRouter from './predictions';

const router = Router();

router.use('/predictions', predictionsRouter);

export default router;
