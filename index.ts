import express, { Express, Request, Response } from "express";
import apiRouter from './src/routes';
const app: Express = express();
const morgan = require('morgan');
const db = require('./src/models')
    
const port = 3000;

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err:Error) => {
        console.log("Failed to sync db: " + err.message);
    });

db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Drop and re-sync db.");
    });
   
app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});