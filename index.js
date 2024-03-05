const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

let codes = []

apiRouter.post('/save',(req, res) => {
    const data = req.body;
    codes.push(data)
    res.json({message: "Successfully saved data"})
});

apiRouter.get('/load', (req, res) => {
    if (codes.length > 0) {
        res.json(codes[codes.length - 1]); 
    } else {
        res.status(404).send('No code found.');
    }
});

apiRouter.get('/load_all', (req, res) => { 
    if (codes.length > 0) {
        res.json(codes); 
    } else {
        res.status(404).send('No code found.');
    }
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  