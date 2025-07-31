import { Group } from "@mui/icons-material";
import { Box, AppBar, Toolbar, Container, MenuItem, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundImage: 'linear-gradient(135deg, #4b6cb7 0%, #182848 70%)'
      }}>
        <Container maxWidth={false}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography variant="h4" fontWeight="bold">ActivityLocator</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>
                Activities
              </MenuItemLink>
              <MenuItemLink to='/createActivity'>
                Create activity
              </MenuItemLink>
            </Box>
            <MenuItem>
              User menu
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
