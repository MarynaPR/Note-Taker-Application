// The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

const router = require("express").Router();
const path = require("path");

// The following HTML routes should be created:
// * `GET /notes` should return the `notes.html` file.
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// * `GET *` should return the `index.html` file
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;