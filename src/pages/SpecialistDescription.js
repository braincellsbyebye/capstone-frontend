import React from "react";
import { Box, Typography, IconButton, Paper, List, ListItem, Skeleton } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { Icon } from "@iconify/react";

const SpecialistDescription = () => {
  return (
    <div className="specialist-description-container container">
      <div className="content">
        <Box className="page-image" component="img" src="/static/doct-removebg.svg" style={{ maxWidth: "100%", maxHeight: "100%" }} alt="logo" />
        <div className="content-item">
          <Paper sx={{ width: '100%', display: 'flex', alignItems: 'center' }} elevation={0}>
            <img src="/static/doc1.svg" style={{ border: '2px solid #ADE9F7', borderRadius: '100%', width: '75px', height: '75px' }} />
            <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
              <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
              <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
            </Typography>
          </Paper>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3 }}>About Doctor</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra nulla a
            elit sodales iaculis. Proin volutpat commodo commodo. Proin odio quam, laoreet
            ac aliquam quis, iaculis at velit. Vestibulum faucibus mi quis dui egestas sodales. Vestibulum at nisl tellus. Vivamus tempor blandit ultrices.
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 4 }}>Upcoming Schedules</Typography>
          <List>
            <ListItem>
              <Paper sx={{ backgroundColor: '#6BA7CE', color: 'white', width: '100%', height: '65px', display: 'flex', alignItems: 'center', px: 2 }} elevation={0}>
                <div style={{ backgroundColor: '#0675B0', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography>12</Typography>
                  <Typography>Aug</Typography>
                </div>
                <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant="h5" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Consultation</Typography>
                  <Typography sx={{ display: 'flex', mt: 1 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Monday</Typography>
                    <Typography sx={{ fontWeight: 'bold', ml: 3 }}>9 am - 11 am</Typography>
                  </Typography>
                </Typography>
              </Paper>
            </ListItem>
            <ListItem>
              <Paper sx={{ backgroundColor: '#115293', color: 'white', width: '100%', height: '65px', display: 'flex', alignItems: 'center', px: 2 }} elevation={0}>
                <div style={{ backgroundColor: '#0675B0', borderRadius: '8px', width: '50px', height: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography>12</Typography>
                  <Typography>Aug</Typography>
                </div>
                <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                  <Typography variant="h5" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Consultation</Typography>
                  <Typography sx={{ display: 'flex', mt: 1 }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Monday</Typography>
                    <Typography sx={{ fontWeight: 'bold', ml: 3 }}>9 am - 11 am</Typography>
                  </Typography>
                </Typography>
              </Paper>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default SpecialistDescription;
