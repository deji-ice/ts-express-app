import express from 'express';
import { Request, Response } from 'express';
import { register } from '../controllers/authController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

router.post('/register', register)


export default router;  