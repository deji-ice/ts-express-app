import { Document, Model, model, Schema } from "mongoose";

// Define the interface for the User document
interface IUser extends Document {
    name: string;
    email: string;
    username: string;
    password: string;
    date: Date;
  }

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

const User:Model<IUser> = model<IUser>('User', userSchema);

export default User;
