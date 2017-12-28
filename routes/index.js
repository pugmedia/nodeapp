var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res) {
  res.send('test time hello test2')
});

router.get('/things/:name/:id', function(req, res) {
	   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
	});

router.get('/dynamic_view', function(req, res){
	   res.render('dynamic', {
	      name: "TutorialsPoint", 
	      url:"http://www.tutorialspoint.com"
	   });
	});

module.exports = router;
