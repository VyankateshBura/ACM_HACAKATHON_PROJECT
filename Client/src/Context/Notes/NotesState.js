import React from 'react';
import NotesContext from './NoteContext';

const NotesState = (props)=>{
    const state = {
        "name":"vyankatesh",
        "class":"B.Tech"
    }
    return (
        <NotesContext.Provider value = {state}>
            {props.children}
        </NotesContext.Provider>
    )

};

export default NoteContext;