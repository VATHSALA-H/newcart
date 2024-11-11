import React from 'react'
import { useCart } from 'react-use-cart'


function Itemcard(props) {
    const { addItem } = useCart();
    return (
        <>
            <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4 d-flex'>
                <div class="card overflow-hidden shadow h-200">
                    <img className="card-img-top h-100" src={props.img} alt="Card image cap" />
                    <div className="card-body">
                        <h3 className="card-title">{props.title}</h3>
                        <h3 className="card-text">{props.price}</h3>
                        <p className="card-text">${props.desc}</p> 
                        <button className='btn btn-info' onClick={()=>{addItem(props.item)}} >Add Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Itemcard
