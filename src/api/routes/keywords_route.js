// src/api/routes/keywords_route.js
const keywords_controller = require('../controllers/keywords_controller');

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route('/keywords')
    .get(keywords_controller.list_all_keywords)
    .post(keywords_controller.create_a_keywords);
  
    app.route('/keywords/:keywords_id') 
    // .get(postController.get_a_post)
    .put(keywords_controller.update_a_keywords)
    .delete(keywords_controller.delete_a_keywords);
}