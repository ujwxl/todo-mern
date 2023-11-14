

const todoModel = require('../models/todoModel')

module.exports.getToDo = async (req,res) => {
    console.log("getToDo")
    const todo  =  await todoModel.find().then(data => {console.log(data, "getToDo")
    
    res.send(data)}) 

    
}

module.exports.saveToDo = async (req,res) => {
    console.log(req.body, "req")

    const {text} = req.body;

    const todo  =  await todoModel.create({text}).then((data)=> {
        console.log("Added task successfully" , data)
        res.status(200).json(data)
    })
}

module.exports.updateToDo = async (req, res) => {
    const {_id , text} = req.body;

    todoModel.findByIdAndUpdate(_id, {text}).then((data)=> {res.send(data)}).catch(err => res.json({error: err}))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    console.log(_id , req.body);

    todoModel.findByIdAndDelete(_id).then((data)=> {res.send(data)}).catch(err => res.json({error: err}))
}