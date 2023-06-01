import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note"
import CreateArea from "./components/CreateArea";
import config from "./core/config/config.dev"

export default function App() {
    const [notes, setNotes] = useState([]);
    const URL = `http://${config.host}:${config.port}/${config.route}`

    useEffect(() => {
        fetch(URL + "/allnotes")
            .then(res => {
                console.log(res.body)
                return res.json()
            })
            .then(notes => setNotes(notes))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = (note) => {
        fetch(URL + "/addnote", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(note),
        })
            .then(res => res.json())
            .then(res => {
                console.log("Create note successfully!");
                console.log(res);
                setNotes(prev => [
                    ...prev,
                    res
                ])
            }).catch(error => {
                console.log(error);
            })
    }

    const deleteNote = (id) => {
        setNotes(prevValue => prevValue.filter((value, index) => id !== index));
    }

    return <div>
        <Header />
        <CreateArea handleSubmit={handleSubmit} />
        {
            notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />);
            })
        }
        <Footer />
    </div>
}