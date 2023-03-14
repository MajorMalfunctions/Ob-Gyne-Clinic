const db = require("../models");
const Patient = db.patient;

// Get Patients
exports.findAll =  async (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { $regex: new RegExp(id), $options: "i" } } : {};

    Patient.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Patients."
        });
      });
};

// Create Patient
exports.create = (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        address: req.body.address,
        mobile: req.body.mobile,
        dob: req.body.dob,
        avatar: req.body.avatar
    });

    patient.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Patient."
        });
        console.log(patient)
    });
};

// Get Single Patient
exports.findOne = (req, res) => {
    const id = req.params.id;

    Patient.findById(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: "Cannot find Patient with id=" +  id
            // message: `Cannot find Patient with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Patient with id=" + id
        });
      });
};

// Update Patient
exports.updateOne = (req, res) => {
    Patient.findByIdAndUpdate(req.params.id)
      .then((patient) => {
        patient.name = req.body.name;
        patient.email = req.body.email;
        patient.age = req.body.age;
        patient.address = req.body.address;
        patient.mobile = req.body.mobile;
        patient.dob = req.body.dob;
        patient.avatar = req.body.avatar;
        patient
          .save()
          .then(() => res.json("Patient Updated..."))
          .catch((err) => res.status(400).json("Error: " + err));
      })
      .catch((err) => res.status(400).json("Error: " + err));
};

// Delete Patient
exports.deleteOne = (req, res, next) => {
    Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json(`Patient with is now Deleted...`))
    .catch((err) => res.status(400).json("Error: " + err));
}