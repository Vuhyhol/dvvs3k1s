const Post = require('../models/postModel');

exports.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
};

exports.createPostForm = (req, res) => {
    res.render('create');
};

exports.createPost = async (req, res) => {
    const { title, description, author } = req.body;
    await Post.create({ title, description, author });
    res.redirect('/');
};

exports.editPostForm = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('edit', { post });
};

exports.updatePost = async (req, res) => {
    const { title, description, author } = req.body;
    await Post.findByIdAndUpdate(req.params.id, { title, description, author });
    res.redirect('/');
};

exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
};