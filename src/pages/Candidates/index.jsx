import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { store } from '../../store'
import Logout from '../../actions/Logout'
import ban from './ban.jpg'
import Loader from '../../components/Loader'
import RoundedAvatar from '../../components/RoundedAvatar'

function Candidates({ candidates, onClick }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // simulate a delay for fetching data

  
    if(candidates.length !== 0){
      setLoading(false)
    }

    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }, [candidates]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      
      {/* Header */}
      <Box marginTop='2rem'>
        <Typography variant='h2' textAlign='center' fontWeight='bolder'>
          Election Candidates
          <hr style={{width:"14rem"}}/>
        </Typography>
       
      </Box>

      {/* By Position Starts here */}

      <Box display='grid' justifyContent='center' marginTop='5rem'>
      <Typography variant='h3' textAlign='center' fontWeight='light'>
          Position - President
         
        </Typography>
      </Box>


      {/* Candidates */}
     { 
     
     <Box display='flex' justifyContent='center' marginTop='2rem'>
        <Box width='95%' display='flex' padding='1rem' justifyContent='space-evenly' flexWrap='wrap' gap='2rem'>
          {/* Candidate Component */}

          {candidates.map((candidate) => ( 
            
          <>
           { 
           candidate.candidatePosition === 'President' ? 
           <Box display='grid' textAlign='center' key={candidate.candidateName}>
            
              <Box>
                <RoundedAvatar />
              </Box>
              <Box>{candidate.candidateName}</Box>
              <Typography fontWeight='bolder'>{candidate.candidatePosition}</Typography>
              <Box>
                <button
                  style={{
                    width: 'max-content',
                    border: 'none',
                    backgroundColor: 'brown',
                    color: 'white',
                    borderRadius: '0.4rem',
                    padding: '0.5rem',
                    marginTop: '0.9rem',
                    cursor: 'pointer',
                  }}
                  onClick={onClick}
                  id={candidate.candidateName}
                >
                  View Candidate Details
                </button>
              </Box>
            </Box> : ''
            } 
            </>
          ))}
        </Box>
      </Box>
      
      }



{/* By Position Starts here */}

      <Box display='grid' justifyContent='center' marginTop='5rem'>
      <Typography variant='h3' textAlign='center' fontWeight='light'>
          Position - Organizers
         
        </Typography>
      </Box>
     { 
     
     <Box display='flex' justifyContent='center' marginTop='2rem'>
        <Box width='95%' display='flex' padding='1rem' justifyContent='space-evenly' flexWrap='wrap' gap='2rem'>
          {/* Candidate Component */}

          {candidates.map((candidate) => ( 
            
          <>
           { 
           candidate.candidatePosition === 'Organizer' ? 
           <Box display='grid' textAlign='center' key={candidate.candidateName}>
            
              <Box>
                <RoundedAvatar />
              </Box>
              <Box>{candidate.candidateName}</Box>
              <Typography fontWeight='bolder'>{candidate.candidatePosition}</Typography>
              <Box>
                <button
                  style={{
                    width: 'max-content',
                    border: 'none',
                    backgroundColor: 'brown',
                    color: 'white',
                    borderRadius: '0.4rem',
                    padding: '0.5rem',
                    marginTop: '0.9rem',
                    cursor: 'pointer',
                  }}
                  onClick={onClick}
                  id={candidate.candidateName}
                >
                  View Candidate Details
                </button>
              </Box>
            </Box> : ''
            } 
            </>
          ))}
        </Box>
      </Box>
      
      }
    </>
  )
}

export default Candidates
