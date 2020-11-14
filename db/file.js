const { response } = require('express');
const fs = require('fs');
const path = require("path");
const uniqid = require('uniqid'); //npm install uniqid

const readNotes = async () => {
    const result = await fs.promises.readFile("./db/db.json", "utf-8")
    console.log("test", result)
    return JSON.parse(result)
};

const writeNotes = async (data) => {
    const new_page = await fs.promises.writeFile("./db/db.json", JSON.stringify(data), "utf-8")
};

function addNotes(newNote) {
    readNotes().then(res => {
        newNote.id = uniqid.apply()
        res.push(newNote)
        console.log("newArr", res)
        writeNotes(res)
    })
};

// * `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. 
//In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
function deleteNotes(id) {
    // const ((filteredNotes) => await writeNotes(filteredNotes));
    readNotes().then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => writeNotes(filteredNotes));
}

module.exports = {
    readNotes,
    writeNotes,
    addNotes,
    deleteNotes
}
