import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/userModel';


export const register = async (req: Request, res: Response) => {

    const { email, username, password } = req?.body ?? {};

    console.log(email)

    try {
        const existingUser = await User.findOne({ email });
        const existingUsername = await User.findOne({ username }).exec()
        if (existingUser) {
            return res.status(400).json({ message: `email exists already` })
        } else if (existingUsername) {
            return res.status(400).json({ message: `Username exists already` })
        }
        const user = new User(req.body)

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        user.password = hashedPassword;
        await user.save();

        return res.status(201).json({ message: `user registered succesfully` })

    } catch (error) {
        console.error("Error while registering user", error);

    }
}