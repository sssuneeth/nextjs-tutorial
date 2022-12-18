import { Avatar, Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const User = ({ user }) => {
    return (
        <div>
            <Paper elevation={1} sx={{ padding: 3 }}>
                <Stack direction='row' spacing={2}>
                    <Avatar
                        alt={user.name}
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                        <Typography variant='h5' fontWeight={500}>{user.name}</Typography>
                        <Typography variant='subtitle1' color='text.secondary'>@{user.username}</Typography>
                    </Box>
                </Stack>
                <Typography textAlign='center' mt={2} variant='body1'>{user.email}</Typography>
            </Paper>
        </div>
    )
}

export default User