import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

function Grid_() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 6 }}>
                    <Item><img src="https://images.unsplash.com/photo-1740688053492-9d24f32dc53c?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image" width={400} height={300} /></Item>
                </Grid>
                <Grid size={{ xs: 3, md: 3 }}>
                    <Item><img src="https://picsum.photos/200/300" alt="random image" /></Item>
                </Grid>
                <Grid size={{ xs: 3, md: 3 }}>
                    <Item><img src="https://picsum.photos/200/300" alt="random image" /></Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Grid_;