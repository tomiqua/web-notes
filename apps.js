const express = require('express');
const axios =  require('axios');

//app.use('/', express.static('view'));

app.get('/', (req, res) => {
    res.render('notes.ejs', { notes: myNotes });
  });


app.listen(3000, ()=> {
    console.log('it working')
})
const myNotes = [
    'http is a protocol',
    'http requests have a url, method, header, and body',
    'I like tomatoes',
    'I like chickpeas'
  ];
