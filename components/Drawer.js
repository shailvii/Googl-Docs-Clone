import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Apps as AppsIcon, DriveFolderUpload as DriveIcon, Mail as MailIcon } from "@mui/icons-material";

function Sidebar() { // Sidebar initializes the isDrawerOpen state variable using the useState hook, initially set to false
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => { // defined to toggle the state of the drawer when the button is clicked
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleAppClick = (app) => { // function is a placeholder that logs a message to the console when an app icon is clicked
    console.log(`Open ${app}`);
    // Implement your logic to open the respective app
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        anchor="right" //Specifies that the drawer should be anchored to the right side of the screen.
        open={isDrawerOpen} //whether the drawer is open or closed based on the isDrawerOpen state
        onClose={toggleDrawer} //Specifies the function to be called when the drawer is closed
        classes={{
          paper: "w-64",
        }}
      >
        
        <List> 
          <ListItem button onClick={() => handleAppClick("Drive")}> {/*Each <ListItem> contains a <ListItemIcon> component to render the app icon and a <ListItemText>
           component to display the app name */}
            <ListItemIcon>
              <DriveIcon />
            </ListItemIcon>
            <ListItemText primary="Drive" />
          </ListItem>
          <ListItem button onClick={() => handleAppClick("Gmail")}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Gmail" />
          </ListItem>
          {/* Add more app icons and their handlers here */}
        </List>
      </Drawer>

      <button className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-md" //A button is rendered outside the <Drawer> component with fixed position on the right side of the screen and is styled with CSS classes.

        onClick={toggleDrawer} //event handler is assigned to the button to call the toggleDrawer function when clicked
      >
        <AppsIcon />
      </button>
    </Box>
  );
}

export default Sidebar;
