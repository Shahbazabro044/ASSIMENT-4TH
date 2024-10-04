import React from 'react'
interface typrops{
    Name:string,
    AGE:number,
    RollNo:number,
    Class:string
}

const Cards = (props:typrops) => {
  return (
    <div>
        <h1>Name:{props.Name}</h1>
        <h1>AGE:{props.AGE}</h1>
        <h1>RollNO:{props.RollNo}</h1>
        <h1>Class:{props.Class}</h1>
    </div>
  )
}

export default Cards