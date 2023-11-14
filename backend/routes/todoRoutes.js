const {Router} = require('express');

const router = Router();
const {getToDo, saveToDo , updateToDo, deleteToDo} = require('../controllers/todoController');
console.log("getTodo" ,getToDo)


router.get('/' , getToDo)
router.post('/save' , saveToDo)
router.put('/update' , updateToDo)
router.delete('/delete/:id' , deleteToDo)

module.exports = router