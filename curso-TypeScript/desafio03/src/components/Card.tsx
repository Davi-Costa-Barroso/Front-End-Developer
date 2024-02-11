import {Box} from '@chakra-ui/react';
import './Card.css';


export const Card = ({children}: any) => {

  return (
    <div>
      <Box backgroundColor='#1e192c' borderRadius='25px' padding='15px' className='card'>
       {children}
      </Box>
    </div>
  )
}