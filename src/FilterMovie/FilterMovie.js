import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import'./FilterMovie.css'
import * as Unicons from '@iconscout/react-unicons';
import ReactStars from 'react-stars';

const FilterMovie = ({ inputSearch, setinputSearch ,newRate,setNewRate}) => {
  const reset = ()=>{
  setinputSearch('')
  setNewRate(0)
  }


  return (
    <div className='inputsearch'> <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <Unicons.UilSearch /></InputGroup.Text>
    <Form.Control
      placeholder="Search Movie by Title or desc..."
      value={inputSearch}
      onChange={(e)=>setinputSearch(e.target.value)}/>
      
  </InputGroup>
  <ReactStars size={25} half={false} value={newRate}
  onChange={(rate)=>setNewRate(rate)}/>
  <Button onClick={()=>reset()} variant='light'><Unicons.UilBan  />ResetFilter</Button>
  </div>
  
  )
}

export default FilterMovie