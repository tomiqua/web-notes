const express = require('express');
const app = express();

// app.use('/', express.static('views'));
app.use('/css', express.static('css'));

app.get('/', (req,res) => {
    res.render('notes.ejs', { notes: myNotes });
  });


app.listen(3000, ()=> {
    console.log('it working')
});
const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes',
    'I like the Summer'
  ];
  const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/notes', (req, res) => { 
  myNotes.push(req.body.note);
  res.redirect('/');
});