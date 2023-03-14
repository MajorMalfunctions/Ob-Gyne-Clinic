const db = require("../models");
const { user: User, booking: Booking, role: Role, refreshToken: RefreshToken,   } = db;


// CREATE NEW Booking
exports.create = (req, res) => {
  // Create a Booking
  const booking = new Booking({
      // title: req.body.title || "Untitled Booking",
      name: req.body.name,
      time: req.body.time,
      date: req.body.date,
      published: req.body.published ? req.body.published : false
  });

  // Save Booking in the database
  booking.save()
  .then(data => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Booking."
      });
      console.log(booking)
  });
};

// GET ALL Booking
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

  // const title = req.query.title;
  // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Booking.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

//  GET SINGLE Booking
exports.findOne = (req, res) => {
    const id = req.params.id;

    Booking.findById(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: "Cannot find Booking with id=" +  id
            // message: `Cannot find Booking with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Booking with id=" + id
        });
      });
};

// UPDATE SINGLE Booking BY ID
exports.update = (req, res) => {
  Booking.findByIdAndUpdate(req.params.id)
    .then((booking) => {
      booking.name = req.body.name;
      booking.time = req.body.time;
      booking.date = req.body.date;
      booking
        .save()
        .then(() => res.json("Booking Updated..."))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// exports.update = (req, res) => {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!"
//     });
//   }

//   const id = req.params.id;

//   Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else res.send({ message: "Tutorial was updated successfully." });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating Tutorial with id=" + id
//       });
//     });
// };

// DELETE SINGLE Booking BY ID

exports.delete = (req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Booking with is now Deleted...`))
    .catch((err) => res.status(400).json("Error: " + err));
};

// exports.delete = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByIdAndRemove(id)
//     .then(data => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//         });
//       } else {
//         res.send({
//           message: "Tutorial was deleted successfully!"
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete Tutorial with id=" + id
//       });
//     });
// };

// Find all published Booking

exports.deleteAll = (req, res) => {
  Booking.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Booking were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Booking."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Booking.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Booking."
      });
    });
};