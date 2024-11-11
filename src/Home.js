import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Itemcard from './Itemcard';
import data from './Data';

function Home() {
  return (
    <>
      <div className='container mt-3 '>
        <h1 className='text-center mt-5 text-muted'>All Items</h1>
        <div className='row'>
        {data.productData.map((item) => {
          return (
            <Itemcard
             key = {item.id}
             img = {item.img}
             title={item.title}
             price={item.price}
             desc={item.desc}
             item={item}
            />
          )
        })}
        </div>

      </div>
    </>
  )
}

export default Home
