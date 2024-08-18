import express from 'express'; 

const route = express.Router();

route.get('/', (req, res) => {
  if (req.query.name) {
    res.json(`AsuraScans name: ${req.query.name}`);
  }
  if (req.query.info) {
    res.json(`AsuraScans URL: ${req.query.url}`);
  }
  if (req.query.image) {
    res.json(`AsuraScans Chapter: ${req.query.chapter}`);
  }
});

export default route;
