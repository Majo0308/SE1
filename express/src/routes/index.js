const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');

const json_Data = fs.readFileSync('src/Data.json', 'utf-8');
let Data = JSON.parse(json_Data);



router.get('/signup', (req, res) => {
  res.render('signup');
});
router.get('/pagina', (req, res) => {
  res.render('pagina');
});
router.get('/', (req, res) => {
  res.render('index', 
  { Data, 
    user1 : req.body.user1,
    password1: req.body.password1
  });
});

router.post('/',(req, res) => {
  console.log(req.body.user1);
  res.render('index', 
  { Data, 
    user1 : req.body.user1, 
    password1: req.body.password1
  });
});

router.post('/signup', (req, res) => {

  const { name, email, user, password } = req.body;

  if (!name || !email || !user || !password) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newDat = {
    id: uuidv4(),
    name,
    email,
    user,
    password
  };

  // add a new book to the array
  Data.push(newDat);

  // saving the array in a file
  const json_Data = JSON.stringify(Data);
  fs.writeFileSync('src/Data.json', json_Data, 'utf-8');

  res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
  Data = Data.filter(Dat => Dat.id != req.params.id);

  // saving data
  const json_Data = JSON.stringify(Data);
  fs.writeFileSync('src/Data.json', json_Data, 'utf-8');

  res.redirect('/')
});

module.exports = router;