const { Task } = require('../models');

module.exports = {
    async create (req, res) {
        try {
            const task_instance = await Task.create({
                description : req.body.description,
                completed: req.body.completed
            });
            res.status(201).send(task_instance);
        } catch (err) {
            res.status(400).send(err.message);       }
    },

    async findAll (req, res) {
        try {
            const task_instance = await Task.findAll({});
            res.send(task_instance);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async findOne (req, res) {
        try {
            const task_instance = await Task.findByPk(req.params.id);
            if(!task_instance) {
                res.status(404).send({ error: "Task not found!"})
            }
            res.send(task_instance);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async update (req, res) {
        try {
            const payload = await Task.update({
                description: req.body.description,
                completed: req.body.completed
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.send(payload);
        } catch (err) {
            res.status(400).send(err.message);
        }
    },

    async delete (req, res) {
        try {
            const payload = await Task.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(payload);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
}