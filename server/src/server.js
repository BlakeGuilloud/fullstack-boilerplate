// ------------------------------
// Import Dependencies
// ------------------------------
import express    from 'express';
import bodyParser from 'body-parser';
import { Model }  from 'objection';
import cors       from 'cors';
import path       from 'path';

// ------------------------------
// Import Routers
// ------------------------------
import userRouter  from './routers/User.router';

// ------------------------------
// Establish Knex Connection
// ------------------------------
import knex       from 'knex';
import knexConfig from './db/knexfile.js';

const connection = knex(knexConfig);
Model.knex(connection);

// ------------------------------
// Configure Express
// ------------------------------
const app = express();

app.set('appPath', path.join('', 'client'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${app.get('appPath')}/build`));

// ------------------------------
// Configure Routes
// ------------------------------
app.use('/api/users', userRouter);

// We want any routes that are not prefaced with api to be sent to client.
app.route('/*').get((req, res) => res.sendFile(path.resolve(`${app.get('appPath')}/index.html`)));

// ------------------------------
// Initialize Server
// ------------------------------
const port = process.env.PORT || 8080;
app.listen(port);
