exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.patientBoard = (req, res) => {
    res.status(200).send("Patients Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};