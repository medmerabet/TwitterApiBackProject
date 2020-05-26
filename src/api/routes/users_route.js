// src/api/routes/users_route.js
const users_controller = require('../controllers/users_controller');

// Exporte la fonction anonyme
module.exports = (app) => {
    app.route('/users')
        .get(users_controller.list_all_users)
        .post(users_controller.create_a_users);

    app.route('/users/:users_id')
        // .get(postController.get_a_post)
        .put(users_controller.update_a_users)
        .delete(users_controller.delete_a_users);
}