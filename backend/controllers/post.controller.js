const db = require("../models");
const { user: User, post: Post } = db;


// CREATE NEW Posts
exports.create = (async (req, res) => {
    const newPost = new Post(req.body)
    try {
      const savePost = await newPost.save()
      res.status(200).json(savePost)
    } catch (error) {
      res.status(500).json(error)
    }
});

// GET ALL Posts
exports.findAll = (async(req, res) => {
    const name = req.query.user
    const categoryName = req.query.category
    try {
      let posts
      if (name) {
        posts = await Post.find({ name: name })
      } else if (categoryName) {
        posts = await Post.find({
          categories: {
            $in: [categoryName],
          },
        })
      } else {
        posts = await Post.find()
      }
      res.status(200).json(posts)
    } catch (error) {
      res.status(404).json(error)
    }
});

//  GET SINGLE Posts
exports.findOne = (async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
      } catch (error) {
        res.status(404).json(error)
      }
});

// UPDATE SINGLE Posts BY ID
exports.update = (async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.name === req.body.name) {
          try {
            const updatePost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            )
            res.status(200).json(updatePost)
          } catch (error) {
            res.status(500).json(error)
          }
        } else {
          res.status(401).json("You can update only your post!")
        }
      } catch (error) {
        res.status(500).json(error)
      }
});

// DELETE SINGLE Posts BY ID
exports.delete = (async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.name === req.body.name) {
          try {
            await post.delete()
            res.status(200).json("Post Has been delete!")
          } catch (error) {
            res.status(500).json(error)
          }
        } else {
          res.status(401).json("You can delete only your post!")
        }
      } catch (error) {
        res.status(500).json(error)
      }
});


