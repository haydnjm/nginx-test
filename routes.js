
module.exports = app => {
  app.get('/api/get', (req, res) => res.send('this was a get'));

  app.post('/api/post', (req, res) => res.send('this was a post'));
};
