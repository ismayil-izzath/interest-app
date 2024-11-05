import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  
  const[principle,setPrinciple]=useState('')
  const[rate,setRate]=useState('')
  const[year,setYear]=useState('')
  
  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  const[interest,setInterest]=useState(0)

  const handleReset=()=>{
    setPrinciple('')
    setRate('')
    setYear('')
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  const calculate=()=>{
    setInterest((principle*rate*year)/100)
  }

  const validate = (e)=>{
    // console.log(e.target.value);
    const {name,value} = e.target
    console.log(name);
    console.log(value);
    // match(regExp) - return array when values matches with regular expressions else return null
    // ^[0-9]
    // console.log(!!value.match('^[0-9]*$'));
    if(!!value.match('^[0-9]*$')){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
      else{
        if(name=='principle'){
          setPrinciple(value)
          setIsPrinciple(false)
        }
        else if(name=='rate'){
          setRate(value)
          setIsRate(false)
        }
        else{
          setYear(value)
          setIsYear(false)
        }
      }
  }

  return (
    <>
     <div className='bg-black d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%'}}>

        <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>

          <h3 style={{textAlign:'center'}}>SIMPLE INTEREST APP</h3>
          <h6 style={{textAlign:'center'}}>Calculate Your Simple Interest Easily</h6>

          <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded flex-column' style={{height:'150px'}}>
            
            <h1>₹{interest}</h1>
            <h6>Total Simple Interest</h6>

          </div>

          <div className='my-3'>
          <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="Principle Amount" variant="outlined" onChange={(e)=>validate(e)} />
            { isPrinciple==false&&<p className='text-danger'>*invalid input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of Interest" variant="outlined" onChange={(e)=>validate(e)} />
          { isRate==false&&<p className='text-danger'>*invalid input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={year} name='year' label="Year" variant="outlined" onChange={(e)=>validate(e)} />
          {isYear==false&&<p className='text-danger'>*invalid input</p>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button disabled={isPrinciple && isRate && isYear ? false:true} variant="contained" className='p-3' color="success" style={{width:'190px'}} onClick={calculate}>Calculate</Button>
          <Button variant="outlined" className='p-3'  style={{width:'190px'}} onClick={handleReset}>Reset</Button>
          </div>

        </div>

     </div>
    </>
  )
}

export default App;