import { Request, Response } from 'express';


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: `Email and password required` })
    }

    return res.status(200).json({ message: `Login successful` })

}