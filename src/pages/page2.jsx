import * as React from 'react';
import {
    Box,
    Typography,
    Container,
    InputBase,
    IconButton,
    Paper,
    Select,
    MenuItem,
    FormControl,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid_ from '../components/grid';

const Page2 = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 20 }}>

                <Typography variant="h3" component="h1" fontWeight="bold" sx={{ mb: 4 }}>
                    Blog
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: 2 }}
                    >
                        <IconButton sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search blog posts' }}
                        />
                    </Paper>

                    <FormControl sx={{ minWidth: 150 }}>
                        <Select
                            value="latest"
                            displayEmpty
                            renderValue={() => (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography>Sort By: Latest</Typography>
                                    <KeyboardArrowDownIcon />
                                </Box>
                            )}
                            IconComponent={() => null}
                        >
                            <MenuItem value="latest">Latest</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                            <MenuItem value="popular">Most Popular</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Grid_ />


            </Container>
        </>
    );
};

export default Page2;