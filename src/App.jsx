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
                if (res.status === 200) {
                    console.log("successfully fetch data!")
                }
                return res.json();
            })
            .then(notes => {
                console.log(notes);
                setNotes(notes);
            })
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
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleDelete = (id) => {
        console.log(id);
        fetch(URL + "/deletebyid/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log("Delete note successfully!");
                console.log(res);
                setNotes(prev => prev.filter((value) => value._id !== id))
            })
            .catch(error => {
                console.log(error);
            })
    }

    return <div>
        <Header />
        <CreateArea handleSubmit={handleSubmit} />
        {
            notes.length > 0 && notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={note._id}
                        title={note.title}
                        content={note.content}
                        onDelete={handleDelete}
                    />);
            })
        }
        <Footer />
    </div>
}