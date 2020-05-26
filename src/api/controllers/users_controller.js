// src/api/controllers/users_controller.js
const mongoose = require('mongoose');
const Users = require('../models/users_model');

exports.list_all_users = (req, res) => {
    Users.find({}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(users);
        }
    })
}

exports.create_a_users = (req, res) => {
    let new_user = new Users(req.body);




    try {
        new_user.save((error, user) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Il manque des infos"
                });
            } else {
                res.status(201);
                res.json(user)
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({
            message: "Erreur serveur"
        })
    }
}

exports.get_a_users = (req, res) => {
    try {
        Users.findById(req.params.users_id, (error, user) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Id introuvable"
                });
            } else {
                res.status(200);
                res.json(user)
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({
            message: "Erreur serveur"
        })
    }
}

exports.update_a_users = (req, res) => {
    try {
        Users.findByIdAndUpdate(req.params.users_id, req.body, {
            new: true
        }, (error, user) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Id introuvable"
                });
            } else {
                res.status(200);
                res.json(user)
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({
            message: "Erreur serveur"
        })
    }
}

exports.delete_a_users = (req, res) => {
    try {
        Users.findByIdAndRemove(req.params.users_id, (error) => {
            if (error) {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Id introuvable"
                });
            } else {
                res.status(200);
                res.json({
                    message: "User supprimé"
                })
            }
        })
    } catch (e) {
        res.status(500);
        console.log(e);
        res.json({
            message: "Erreur serveur"
        })
    }
}