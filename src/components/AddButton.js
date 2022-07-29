import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as AddIcon} from '../Assets/add.svg'

function AddBtton() {
  return (
    <Link to='/note/new' className='floating-button'>
       <AddIcon />
    </Link>


    )
}

export default AddBtton