import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../Assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'




function NotePage({history}) {

  let [notes, setNotes] = useState([null])
  let params = useParams()
  // let note = notes.find(note => note.id ==`${params.id}`)
  
  useEffect(() =>{
    getNote()
  }, [params.id])

  let getNote = async() =>{
    if(params.id === 'new') return
    let response = await fetch(`https://json-server1131.herokuapp.com/notes/${params.id}`)
    let data = await response.json()

    setNotes(data)
  }


  let createNote = async() => {
    await fetch(`https://json-server1131.herokuapp.com/notes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...notes, 'updated': new Date()})
})
}

let updateNote = async() => {
    await fetch(`https://json-server1131.herokuapp.com/notes/${params.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...notes, 'updated': new Date()})
})
}

let deleteNote = async() => {
  await fetch(`https://json-server1131.herokuapp.com/notes/${params.id}`, {
    method: 'DELETE',

    headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(notes)

  })

}

let handleSubmit = () => {
 if(params.id !=='new' && !notes.body){
  deleteNote()
  
 }else if(params.id !=='new'){
  updateNote()
 }else if(params.id === 'new' && notes !== null & notes !==''){
  createNote()
 }
 


}
  

  return (
    <div className='note'>
    <div className='note-header'>
      <h3>
      <Link to= '/'>
        <ArrowLeft onClick={handleSubmit}/>
      </Link>
      </h3>

      <Link to= '/'>
    { params.id !=='new' ? (
      <button onClick={deleteNote}>Delete</button>

    ):(
      <button onClick={handleSubmit}>Done</button>
    ) }

      </Link>

    </div>

    <textarea onChange={e =>{setNotes({...notes, 'body': e.target.value})}} value={notes.body}></textarea>
    </div>
  )
}

export default NotePage