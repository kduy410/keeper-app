import React from "react";

var noteTitle = "This is the note title"
var noteContent = "This is the note content"

function Note(){
    return <div className="note">
        <h1>{noteTitle}</h1>
        <p>{noteContent}</p>
    </div>
}
export default Note;