const db = require("../models");
const { user: User, blog: Blog, role: Role, refreshToken: RefreshToken,   } = db;


// CREATE NEW Blog
exports.create = (req, res) => {
  const blog = new Blog({
      title: req.body.title || "Untitled Blog",
      cover: req.body.cover,
      description: req.body.description,
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
      blog.subtitle = req.body.subtitle;
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