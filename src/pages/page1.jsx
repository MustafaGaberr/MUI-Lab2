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
    Button
} from '@mui/material';
import BoltIcon from "@mui/icons-material/Bolt";
import FigmaIcon from "@mui/icons-material/DesignServices";

const Page1 = () => {
    return (
        <>

            <Typography variant="h3" component="h1" color='textDisabled' fontWeight="bold" sx={{ mt: 20, textAlign: 'center' }}>
                Boost your building
            </Typography>
            <Typography variant="h3" component="h1" color='dark' fontWeight="bold" sx={{ mt: 2, textAlign: 'center' }}>
                process with <Typography variant="h3" component="h1" color='success' fontWeight="bold" sx={{ display: 'inline' }}>
                    Minimal
                </Typography>
            </Typography>
            <Typography variant="h3" component="h1" color='dark' fontWeight="light" sx={{ mt: 4, textAlign: 'center', fontSize: 20 }}>
                The starting point for your next project is based on MUI.
            </Typography>
            <Typography variant="h3" component="h1" color='dark' fontWeight="light" sx={{ textAlign: 'center', fontSize: 20, mt: 2 }}>
                Easy customization helps you build apps faster and better.
            </Typography>

            <Box display="flex" gap={2} sx={{ mt: 4, justifyContent: 'center' }}>

                <Button
                    variant="contained"
                    startIcon={<BoltIcon />}
                    sx={{
                        backgroundColor: "#121212",
                        color: "white",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        "&:hover": { backgroundColor: "#1a1a1a" },
                    }}
                >
                    Live preview
                </Button>


                <Button
                    variant="outlined"
                    startIcon={<FigmaIcon />}
                    sx={{
                        borderColor: "#121212",
                        color: "#121212",
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                            borderColor: "#121212",
                        },
                    }}
                >
                    Figma preview
                </Button>
            </Box>

        </>
    );
};

export default Page1;