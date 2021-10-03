import { Router } from 'express';
import { predict } from './controller';
import { middleware } from './middleware';
import { Body } from './schemas';

const router = Router({ mergeParams: true });

router.post('/', [middleware(Body, 'body')], predict);

export default router;
