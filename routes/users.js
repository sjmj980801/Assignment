var express = require('express');
var router = express.Router();
var users = require('../public/users');

router.get('/update/:email', function(req, res, next) {
  // res.send('Placeholder');
  console.log(req);
  let user = users.find(x=>x.email === req.params.email);
  if(user)
  res.render('index', {title: 'Update User', user: user});
});


router.post('/update/:email', function(req, res, next) {
  // res.send('Placeholder');
  console.log(req);
  
  let user = users.find(x=>x.email === req.params.email);
  users = users.filter(x=>x.email !== req.params.email);
  users = [...users, {...user, ...req.body}].sort((a,b)=>a.username.localeCompare(b.username));
  res.render('index', {title: 'Contacts', users: users});
});


router.get('/delete/:email', function(req, res, next) {
  // res.send('Placeholder');
  console.log(req);
  users = users.filter(x=>x.email !== req.params.email);
  res.render('index', {title: 'Contacts', users: users});
});

module.exports = router;
