import React, { useState } from "react";

export default function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    const addNote = (event) => {
        event.preventDefault();
        props.addNote(note);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNote({
            ...note,
            [name]: value,
        })
    }

    return <div>
        <form>
            <input name="title" type="text" placeholder="Title" onChange={handleChange}/>
            <textarea name="content" placeholder="Take a note..." rows={3} onChange={handleChange}/>
            <button onClick={addNote}>Add</button>
        </form>
    </div>
}