import express from 'express';
import popular from './popular.js';

const route = express.Router();

route.get('/:id', async(req, res) => {
  if (req.params.id === 'popular') {
    console.log('Popular');
    const data = await popular();
    res.json(data);
  }
});

export default route;
