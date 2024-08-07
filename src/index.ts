// src/index.ts
import express from 'express';
import authRoute from './routes/authRoute';
import dbConnection from './db/conn';
const app = express();
const port = 3000;

await dbConnection()
app.use(express.json())
app.use("/auth", authRoute)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});