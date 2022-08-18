import React from 'react'
import { Link } from "react-router-dom";


const CardsContent = (props) => {
    console.log(props.props)
  return (
    <div>
        <div className="card" Style={"width: 18rem;"}>
            <Link to={`/profile/home/${props.props.id}`}>
                <img src={`http://localhost:3000/breathe.png`} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{props.props.description}</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default CardsContent
