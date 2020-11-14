const router = require("express").Router();
const {
    readNotes,
    writeNotes,
    addNotes,
    deleteNotes
} = require("../db/file");

router.get("/notes", async (req, res) => {
    let results = await readNotes();
    res.json(results);
});

router.post("/notes", async (req, res) => {
    await addNotes(req.body);
    res.end();
});

router.delete("/notes/:id", async (req, res) => {
    await deleteNotes(req.params.id)
    res.json({ ok: true })
});

module.exports = router;