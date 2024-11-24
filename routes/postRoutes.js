const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes
router.get('/', postController.getPosts);
router.get('/create', postController.createPostForm);
router.post('/create', postController.createPost);
router.get('/edit/:id', postController.editPostForm);
router.post('/edit/:id', postController.updatePost);
router.post('/delete/:id', postController.deletePost);

module.exports = router;