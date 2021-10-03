import express, {
    ErrorRequestHandler,
    Request,
    Response,
    NextFunction,
} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', routes);

const errorHandler = (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // log the error, for now just console.log
    console.log(err);
    res.status(500).send('Something broke!');
};

app.use(errorHandler);

export default app;
