// src/api/controllers/keywords_controller.js
const mongoose = require('mongoose');
const Keywords = require('../models/keywords_model');


exports.list_all_keywords = (req, res) => {
    Keywords.find({}, (error, keywords) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(200);
        res.json(keywords);
      }
    })
  }

exports.create_a_keywords = (req, res) => {
  let new_keyword = new Keywords(req.body);

  
  

  try {
    new_keyword.save((error, key) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        res.json(key)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.get_a_keywords = (req, res) => {
  try {
    Keywords.findById(req.params.keywords_id, (error, key) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(key)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.update_a_keywords = (req, res) => {
  try {
    Keywords.findByIdAndUpdate(req.params.mkeywords_id, req.body, {new:true}, (error, key) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(key)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_a_keywords = (req, res) => {
  try {
    Keywords.findByIdAndRemove(req.params.keywords_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Keyword supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}