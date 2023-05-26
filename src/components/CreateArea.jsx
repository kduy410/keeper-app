import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const expand = () => {
        setExpanded(true);
    }
    
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
        <form className="create-note">
            {isExpanded && <input name="title" type="text" placeholder="Title" onChange={handleChange}/>}
            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleChange} onClick={expand}/>
            <Zoom in={isExpanded}><Fab onClick={addNote}><AddIcon /></Fab></Zoom>
        </form>
    </div>
}