import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PeopleIcon from '@mui/icons-material/People';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ClassIcon from '@mui/icons-material/Class';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const drawerWidth = 64; 
const AdminMenu = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Categories', icon: <ClassIcon />, path: '/categories' },
  { text: 'Users', icon: <PeopleIcon />, path: '/userPage' },
  { text: 'Borrowings', icon: <RedoOutlinedIcon />, path: '/borrowings' },
  { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
  { text: 'Log Out', icon: <LogoutIcon />, path: '/logout' },
];

const UserMenu = [
  { text: 'Books', icon: <MenuBookIcon />, path: '/books' },
  { text: 'Categories', icon: <CategoryIcon />, path: '/categories' },
  { text: 'My Library', icon: <TurnedInIcon />, path: '/myLibrary' },
  { text: 'Favourites', icon: <FavoriteIcon />, path: '/favourites' },
  { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' },
  { text: 'Log Out', icon: <LogoutIcon />, path: '/logout' },
];

export default function AppMenu() {
  const [isAdmin, _setIsAdmin] = React.useState(false);
  const theme = useTheme();
  const menuItems = isAdmin ? AdminMenu : UserMenu;
  const navigate = useNavigate();
  
  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
      PaperProps={{
      
      
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:theme.palette.primary.main,
            
        marginTop:"64px"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
              }}
            >
              <ListItemButton
                onClick={() => handleMenuItemClick(item.path)}
                sx={{
                  justifyContent: 'center',
                  minHeight: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  color: 'white',
                  
                  padding: '18px 3px',
                  margin: 0,
                  boxSizing: 'border-box',
                  
                  '&:hover': {
                    backgroundColor: '#1e3a8a',
                    
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:theme.palette.background.paper,
                   
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    
                    color:theme.palette.background.paper,
                    textAlign: 'center',
                    
                  }}
                  primaryTypographyProps={{ style: { fontSize: '10px' } }}
                  secondaryTypographyProps={{ style: { fontSize: '10px' } }}
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
</Box>
    </Box>
  );
}

