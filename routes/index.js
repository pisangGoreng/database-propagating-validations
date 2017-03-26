var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/register', function(req, res) {
  let data = {
      title: req.body.title,
      name: req.body.name,
      email: req.body.email,
      tanggal: req.body.tanggal
    }

    model.create(data).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
});

module.exports = router;
