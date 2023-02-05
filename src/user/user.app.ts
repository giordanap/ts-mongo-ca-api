import "dotenv/config";
import express from "express";
import cors from 'cors';
import userRoute from './infrastructure/router/user.routes';
import dbInit from './infrastructure/db/mongo';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 1809;

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`User, ready on port ${ port }`));