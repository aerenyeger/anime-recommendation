import { useState } from "react"
import React from 'react'

const PageButton = ({ page,setpage }) => {
  const incrementPage=()=>{
    if(page>=20){
      return;
    }
    else{
      setpage(page+1)
    }
  }
  const decrementPage=()=>{
    if(page<=1){
      return
    }
    else{
      setpage(page-1)
    }
  }
  return (
    <div>
      <button onClick={(e) => { decrementPage()}}>Prev</button>
      <button disabled={true}>{page}</button>
      <button onClick={(e) => { incrementPage()}}>Next</button>
    </div>
  )
}

export default PageButton
