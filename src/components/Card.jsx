import React from 'react'



function Card({cardData}) {
return <div className="col">
  <div className="card h-100">
<img src={cardData.image} className="card-img-top" alt="Courses" title='All-Courses'/>
    <div className="card-body m-3">
      <h5 className="card-title">{cardData.about}</h5>
      <p className="card-text">{cardData.content}</p>
      <a className='fw-bold text-decoration-none'>READ MORE <i className="fa-solid fa-angles-right"></i></a>
    </div>
    <div className="card-footer text-muted m-4">
      <span>{cardData.date} {cardData.month} 2023</span>
      <span> No comments<i class='bx bxs-comment-detail'></i></span>
    </div>
  </div>
</div>
}

export default Card