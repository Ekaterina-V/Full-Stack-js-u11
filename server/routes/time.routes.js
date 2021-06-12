const axios = require('axios');

module.exports = function (app) {
  app.get('/api/timezone', (req, res) => {
    axios.get('http://worldtimeapi.org/api/timezone/Europe/Stockholm').then((response) => {
      if (response.status === 200) {
        res.send(response.data);
      }
    }).catch((err) => {
      res.send(err);
    });
  });
};
