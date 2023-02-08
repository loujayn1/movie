import React from 'react'
import Card from './card';

import "./movielist.css"
import { useState } from 'react';
import Datamovie from './Datamovie';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Cardlist() {
    const [movielist,setmovieList]=useState([...Datamovie]);
     const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    function addMovie(){
        setmovieList([...movielist, {title:"lucifer",
        description:"Lassé et mécontent de sa position de Seigneur des Enfers, Lucifer Morningstar démissionne et abandonne son royaume pour la bouillonnante Los Angeles. Dans la Cité des Anges, l'ex maître diabolique est le patron d'un nightclub baptisé Lux.",
        postUrl:"https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        perc:"71%"
        }])
        console.log(movielist)
    }
  return (
    <>
    <div className='list'>
        {movielist.map((ele)=>{
            return <Card
            name={ele.title}
            image={ele.postUrl}
            rate={ele.perc}
            />
        })}
    </div>
    

    
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>describe your movie!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input type="text" id="title"  required
       minlength="4" maxlength="8" size="10"></input>
        <input type ="text" id="url" 
        required
        minlength="4" maxlength="8" size="10"></input> 
        <input type="text" id="description" required
       minlength="4" maxlength="8" size="10"></input>
       <input type="text" id="rate" required
       minlength="4" maxlength="8" size="10"></input>
        
        </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    
  )
  
}
