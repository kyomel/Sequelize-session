const { User } = require('../models');

module.exports = {
    async create (req, res) {
        try {
            const user_instance = await User.create({
                name : req.body.name,
                email : req.body.email,
                age: req.body.age
            });
            res.status(201).send(user_instance);
        } catch (err) {
            res.status(400).send(err.message);       }
    },

    async findAll (req, res) {
        try {
            const user_instance = await User.findAll({});
            res.send(user_instance);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async findOne (req, res) {
        try {
            const user_instance = await User.findByPk(req.params.id);
            if(!user_instance) {
                res.status(404).send({ error: "User not found!"})
            }
            res.send(user_instance);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async update (req, res) {
        try {
            const payload = await User.update({
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
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
            const payload = await User.destroy({
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