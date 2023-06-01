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
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(note);
        setNote({});
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
        <form className="create-note" onSubmit={handleSubmit}>
            {isExpanded && <input name="title" type="text" placeholder="Title" value={note.title || ""} onChange={handleChange}/>}
            <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content || ""} onChange={handleChange} onClick={expand}/>
            <Zoom in={isExpanded}><Fab type="submit"><AddIcon/></Fab></Zoom>
        </form>
    </div>
}