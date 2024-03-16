"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
const morgan = require('morgan');
const db = require('./src/models');
const port = 3000;
db.sequelize.sync()
    .then(() => {
    console.log("Synced db.");
})
    .catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
// db.sequelize.sync({ force: true })
//     .then(() => {
//     console.log("Drop and re-sync db.");
// });
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
