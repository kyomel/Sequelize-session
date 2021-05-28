const router = require('express').Router();
const taskController = require('./controller/taskController');
const userController = require('./controller/userController');

// user route
router.post('/users', userController.create);
router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOne);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// task route
router.post('/tasks', taskController.create);
router.get('/tasks', taskController.findAll);
router.get('/tasks/:id', taskController.findOne);
router.put('/tasks/:id', taskController.update);
router.delete('/tasks/:id', taskController.delete);
module.exports = router;