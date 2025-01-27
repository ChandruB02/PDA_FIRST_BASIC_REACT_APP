import React from 'react'

function Profilecard({ title, handle, imageUrl, description }) {
  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleDateString();
  // const formattedTime = currentDate.toLocaleTimeString();
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className="image is-1by1">
           <img src={imageUrl} alt='images'/>
        </figure>
      </div>
      <div className="card-content">
              <div className="media-content">
         <p className='title is-4'>{title}</p>
          <p className='subtitle is-6'>{handle}</p>
          </div>
         <div className="content">
          {description}
            {/* <br />
                  <p><strong>CurrentDate: </strong>{formattedDate}
            </p>
            <p>
                  <strong>CurrentTime: </strong>{formattedTime}

            </p> */}
        </div>

          </div>
          
        
      </div>
    
  )
}

export default Profilecard