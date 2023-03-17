const db = require("../models");
const { user: User, blog: Blog, role: Role, refreshToken: RefreshToken,   } = db;

const jwt = require ("jsonwebtoken");


// CREATE NEW Blog
exports.create = (req, res) => {

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtKey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");
  // }

  const blog = new Blog({
      title: req.body.title || "Untitled Blog",
      description: req.body.description,
      category: req.body.category,
      cover: req.body.cover,
      date: req.body.date,
      published: req.body.published ? req.body.published : false
  });

  // Save Blog in the database
  blog.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some Error Occurred While Creating The Blog."
      });
  });
};

// GET ALL Blog
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  Blog.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some Error Occurred While Retrieving Blogs."
      });
    });
};

//  GET SINGLE Blog
exports.findOne = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Blog with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Blog with id=" + id
        });
      });
};


// UPDATE SINGLE Blog BY ID
exports.update = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id)
    .then((blog) => {
      blog.title = req.body.title;
      blog.category = req.body.category;
      blog.description = req.body.description;
      blog.published = req.body.published ? req.body.published : false
      blog
        .save()
        .then(() => res.json("Blog Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// DELETE SINGLE Blog BY ID
exports.delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Blog with is now Deleted...`))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Find all published Blog
exports.findAllPublished = (req, res) => {
    Blog.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blog."
      });
    });
};

/* UPDATE */
exports.likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const blog = await Blog.findById(id);
    const isLiked = blog.likes.get(userId);

    if (isLiked) {
      blog.likes.delete(userId);
    } else {
      blog.likes.set(userId, true);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { likes: blog.likes },
      { new: true }
    );

    res.status(200).json(updatedBLog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};