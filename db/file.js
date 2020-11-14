const { response } = require('express');
const fs = require('fs');
const path = require("path");
const uniqid = require('uniqid'); //npm install uniqid

const readNotes = async () => {
    const result = await fs.promises.readFile("./db/db.json", "utf-8")
    return JSON.parse(result)
};

const writeNotes = async (data) => {
    const new_page = await fs.promises.writeFile("./db/db.json", JSON.stringify(data), "utf-8")
};

function addNotes(newNote) {
    readNotes().then(res => {
        newNote.id = uniqid.apply()
        res.push(newNote)
        writeNotes(res)
    })
};

function deleteNotes(id) {
    readNotes().then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => writeNotes(filteredNotes));
}

module.exports = {
    readNotes,
    writeNotes,
    addNotes,
    deleteNotes
}