import React from 'react'

const NewsItem = ({ title, description, imgUrl }) => {

   return (
      <div className='my-4'>
         <div className="card" >
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title my-3"> {title}</h5>
               <p className="card-text my-3">{description}</p>
            </div>
         </div>
      </div>
   )

}

export default NewsItem