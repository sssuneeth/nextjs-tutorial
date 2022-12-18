import { Inter } from '@next/font/google'
import { Box, Grid, Typography } from '@mui/material'
import User from '../components/user'
import { AppProps } from 'next/app';

export default function Home({ users }) {
   return (
      <>
         <Box sx={{padding:{xs:1, sm:4}}}>
            <Typography variant='h4' fontWeight={600} mb={3} >Showing all Users</Typography>
            <Grid container spacing={2}>
               {
                  users.map(user => (
                     <Grid key={user.id} item xs={12} sm={6} md={4}>
                        <User user={user} />
                     </Grid>
                  ))
               }
            </Grid>
         </Box>
      </>
   )
}

export async function getStaticProps() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await response.json()

   return {
      props: {
         users: data
      }
   }
}