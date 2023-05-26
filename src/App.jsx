import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note"
import CreateArea from "./components/CreateArea";

export default function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (note) => {
        setNotes(prevValue => [
            ...prevValue,
            note,
        ]);
    }
    
    const deleteNote = (id) => {
        setNotes(prevValue => prevValue.filter((value, index) => id !== index));
    }

    return <div>
        <Header />
        <CreateArea addNote={addNote}/>
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
        <Footer/>
    </div>
}