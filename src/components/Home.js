import React from 'react'
import NewsItem from './NewsItem.js';


export default function Home({ data }) {
   return (
      <>
         <h2 className='text-center pt-5' style={{ margin: '40px' }} > NewsApp - Top Headlines</h2>


         <div className='container my-3 '>
            <div className="row">
               {data.map((element) => {
                  return <div className="col-md-4" key={element.id} >
                     <NewsItem title={element.Heading}
                        description={element.news}
                        imgUrl={element.image}
                     />
                  </div>
               })}
            </div>

         </div>
      </>
   )
}
