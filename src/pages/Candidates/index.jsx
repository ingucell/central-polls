import React, {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import { store } from '../../store'
import Logout from '../../actions/Logout'
import ban from './ban.jpg'

function Candidates({candidates}) {

 
  return (
    <>
    <p>Welcome {store.getState().auth.user}</p>
    <button
    onClick={()=>{
       store.dispatch(Logout(null))
       window.location.href='./home'
    }}
    >Logout</button>
    <p>as</p>
    
    {/* Header */}
    <Box marginTop='2rem'>
      <Typography variant='h2' textAlign='center' fontWeight='bolder'>Election Candidates</Typography>
    </Box>
   
    {/* Candidates */}
    <Box display='flex' justifyContent='center' marginTop='5rem'>
    <Box  width='95%' display='flex' padding='1rem' justifyContent='space-evenly' flexWrap='wrap' gap='2rem'>
      {/* Candidate Component */}
      {
        candidates.map((candidate)=>(
         <Box display='grid' textAlign='center'>
             <Box              >
               <img src={ban} alt=""  width='80%' height='90%' style={{borderRadius:'50%'}}/> 
             </Box>
             <Box>{candidate.candidateName}</Box>
             <Typography fontWeight='bolder'>{candidate.candidatePosition}</Typography>
             <Box>
             <button style={{
              width: 'max-content',
              border: 'none',
              backgroundColor: 'brown',
              color: 'white',
              borderRadius: '0.4rem',
              padding: '0.5rem',
              marginTop: '0.9rem',
              cursor: 'pointer'
              }}>View Candidate Details</button>
             </Box>
         </Box>
         ))
      }
    </Box>
    </Box>
    </>
  )
}

export default Candidates