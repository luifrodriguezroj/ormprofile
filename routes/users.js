var express = require('express');
var router = express.Router();
const userController = require('../controllers').user;

/* GET users listing. */
router.get('/', userController.list);

router.get('/:id', userController.find);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.delete);

module.exports = router;
