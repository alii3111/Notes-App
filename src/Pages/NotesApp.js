import React, { useEffect, useState } from 'react'
// import notes from '../Assets/data'

import ListItem from '../components/ListItem'
import AddBtton from '../components/AddButton'


function NotesApp() {

useEffect(() => {
  getNotes()
}, [])

let [notes, setNotes] = useState([])

let getNotes = async() => {
let response = await fetch('https://json-server1131.herokuapp.com/notes')
let data = await response.json()

setNotes(data)
}



  return (
  <div className='notes'>
    <div className='notes-header'>
      <h1 className='notes-title'>&#9782;Notes</h1>
      <p className='notes-count'>{notes.length}</p>
    </div>

  <div className='notes-list'>
      {notes.map(note => (

      <ListItem note = {note} key={note.id}/>
      ))}
   </div>
   <AddBtton />
    
 </div>
  )
}

export default NotesApp