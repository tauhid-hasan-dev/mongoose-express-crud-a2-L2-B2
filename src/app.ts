import express, { Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/users.routes';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running for mongoose express crud project');
});

export default app;
