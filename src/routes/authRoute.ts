import express from 'express';
import { Request, Response } from 'express';
import { login } from '../controllers/authController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

router.post('/login', login)


export default router;  