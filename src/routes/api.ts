import express from 'express';
import unmined from './unmined';

const api = express.Router();
api.use('/unmined', unmined);

export default api;
