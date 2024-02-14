import AppController from '../controllers/AppController';
import app from '../server';

 app.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  app.getStats('/stats', (req, res) => {
    AppController.getStats(req, res);
  });
  