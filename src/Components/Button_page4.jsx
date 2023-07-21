import React from 'react'

function Button() {
  return (
    // <div>
    //   <button className="btn btn-outline-success d-flex  justify-content-center justify-content-center mx-auto" type="submit" style={{ width: "339px" , height:"75px" , color:"white" , backgroundColor:"#45776B" ,borderRadius:"15px" , marginTop:"61px" , fontSize:"20px"}}>View All Mentor</button>
    // </div>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-auto">
        <button className="btn btn-primary" style={{ width: "339px" , height:"75px" , color:"white" , backgroundColor:"#45776B" ,borderRadius:"15px" , marginTop:"61px" , fontSize:"20px", marginBottom:"22px"}}>View All Mentor</button>
      </div>
    </div>
  </div>
  )
}

export default Button
