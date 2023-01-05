import express from 'express';

const unmined = express.Router();

unmined.get('/properties', async (req, res, next) => {
  res.send('');
});

export default unmined;