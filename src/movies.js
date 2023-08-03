import React from 'react'

function movies(props) {
  return (
    <div>
      <div>
            <img src={props.image} alt=" " className='App.js'/> 
            <h1>Movie name: {props.mname}</h1>
            <p>Date of release: {props.rdate}</p>
            <p>Rating: {props.rate}</p>
        </div>
    </div>
  )
}

export default movies;


/*function movies(props)
{
    return (
        <div>
            
            <h1>Movie name: {props.mname}</h1>
            <br/>
            <p>Date of release: {props.rdate}</p>
            <br/>
            <p>Rating: {props.rate}</p>
        </div>
    );
}

export default movies;*/