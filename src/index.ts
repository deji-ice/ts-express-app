// src/index.ts
import express from 'express';
import authRoute from './routes/authRoute';
const app = express();
const port = 3000;
app.use("/auth", authRoute)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});