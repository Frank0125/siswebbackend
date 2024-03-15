"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/', (req, res) => {
    res.send('Get a list of products');
});
productRouter.get('/:id', (req, res) => {
    res.send(`Get the product ${req.params.id}`);
});
productRouter.post('/', (req, res) => {
    res.send(`Create a new product with ID: ${req.body.id}`);
});
productRouter.patch('/:id', (req, res) => {
    res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and ${req.body.stock}`);
});
productRouter.delete('/', (req, res) => {
    res.send(`Deleting the product ${req.body.id}`);
});
exports.default = productRouter;
