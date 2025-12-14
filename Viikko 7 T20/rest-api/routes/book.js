var express = require('express');
var router = express.Router();
var bookController = require('../controllers/bookController');

router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.remove);

module.exports = router;
