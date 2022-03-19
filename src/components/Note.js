import React  from 'react'

export const Note=({notes})=>{
   return(
    <ul className="list-group list-group-flush">
        {notes.map(note=>(
            <li className="list-group-item note"
            key={note.id}>
                <strong>{note.title}</strong>
                <span>{new Date().toLocaleDateString()}</span>
                <button type="button" class="btn btn-primary">&times;</button>
            </li>
        ))}
  </ul>
   )
    
}