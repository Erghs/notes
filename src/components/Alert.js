import React  from 'react'
export const Alert=({alert})=>{
    return(
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Внимание!</strong> {alert.text}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
     
 }