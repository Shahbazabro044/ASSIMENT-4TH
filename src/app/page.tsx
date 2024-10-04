import React from 'react'
import Cards from './students/Cards'

const page = () =>{
  return (
    <>

      <div className='bg-yellow-400 text-center'><h1><b>STUDENTS CARDS</b></h1> </div>
   <div className='bg-black text-white text-center'><h1>1st card</h1></div>
      <div className='bg-yellow-400 text-center'><Cards Name='shahbaz' RollNo={1383} Class='monday'AGE={18}></Cards></div>
      <div className='bg-black text-white text-center'><h1>2nd card</h1></div>
      <div className='bg-yellow-400 text-center'>
      <Cards Name='basit' RollNo={3917} Class='tuesday'AGE={21}></Cards>
      </div>
      <div className='bg-black text-center text-white'><h1>3RD students</h1></div>
      <div className='bg-yellow-400 text-center text-bold'>
      <Cards Name='manzoor' RollNo={2344} Class='wenasday'AGE={19}></Cards>
      </div>

     
  
</>
)
}

export default page