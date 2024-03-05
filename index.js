const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/save',(req, res) => {
    const data = req.body;
    res.json({message: "Successfully saved data"})
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  