
import React from 'react'
import '@/scss/components/btn.scss'

const Btn = (props) =>  {
  const classes = 'flex-align-item-center rounded-4 d-inline-flex ' + props.className;



  return (
    <div>
      <button onClick={props.onClick}  className={classes}>{props.children}</button>
    </div>
  )
}

export default Btn;
