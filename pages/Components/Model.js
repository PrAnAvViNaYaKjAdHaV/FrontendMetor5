import React from 'react'
const Modal_style = {
  position:'fixed',
  top:'29%',
  left:'55%',
  transform:'translate(50%,-50%)',
  backgroundColor:'#FFF',
  padding:'50px',
  zIndex:10000
}
const mod = {
  // display:'flex',
  position:'relative',
  zIndex:'10000'
}
export default function Model({open,children}) {
    if(!open) return null
  return (
    <div style={Modal_style}>{children}</div>
  )
}
