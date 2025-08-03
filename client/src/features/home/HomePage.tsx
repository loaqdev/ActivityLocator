import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
    return (
        <Paper
            sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                gap: 6,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundImage: 'linear-gradient(135deg, #4b6cb7 0%, #182848 70%)'
            }}
        >
            <Box sx={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                color: "white",
                gap: 3
            }}
            >
                <Group sx={{ height: 110, width: 110 }} />
                <Typography variant="h1">
                    Activity Locator
                </Typography>
            </Box>
            <Typography variant="h2">
                Welcome to activity locator
            </Typography>
            <Button
                component={Link}
                to="/activities"
                size="large"
                variant="contained"
                sx={{ height: 80, borderRadius: 4, fontSize: "1.5rem" }}
            >
                Take me to the activities
            </Button>
        </Paper>
    )
}