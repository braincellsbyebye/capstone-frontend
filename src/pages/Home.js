import * as React from 'react';
import {
  Box, AppBar, IconButton, List, ListItem,
  Toolbar, Typography, Skeleton, Grid, Paper,
  Button, ClickAwayListener, Grow, Popper, MenuItem, MenuList, Stack
} from '@mui/material';
import { Icon } from "@iconify/react";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function logout()
  {
    localStorage.clear();
    history.push("/login")
  }

  let user = JSON.parse(localStorage.getItem('user-info'))
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <Skeleton variant="circular" width={40} height={40} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }} />
            <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <h5>{user.name}</h5>
              <h6>{user.email}</h6>
            </Typography>
          </Typography>
          <Box>
            <IconButton sx={{ color: '#fff' }}>
              <Icon icon="ant-design:home-filled" />
            </IconButton>
            <IconButton
              sx={{ color: '#fff' }}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}>
              <Icon icon="carbon:notification-filled" />
            </IconButton>
            <button onClick={logout}>Log Out</button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper>
                    <Typography sx={{ fontWeight: 'bold', mx: 2, pt: 2 }} variant="h6">Notifications</Typography>
                    <List>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                      <ListItem>
                        <Paper sx={{ width: '300px', height: '40px', display: 'flex', alignItems: 'center', px: 1 }} elevation={3}>
                          <Icon icon="ant-design:calendar-filled" style={{ color: '#8F97CB', fontSize: '30px' }} />
                        </Paper>
                      </ListItem>
                    </List>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <IconButton sx={{ color: '#fff' }}>
              <Icon icon="ant-design:calendar-filled" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ width: '100%', p: 3 }}>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid xs={12} lg={6} sx={{ borderRight: { lg: '2px solid #80868B80' } }}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant="h5">Announcement</Typography>
            <List>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', px: 2 }} elevation={3}></Paper>
              </ListItem>
            </List>
          </Grid>
          <Grid xs={12} lg={6}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant="h5">Specialist</Typography>
            <List>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc1.svg" style={{ border: '2px solid #05FF00', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc.svg" style={{ border: '2px solid #FF0000', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Not Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc1.svg" style={{ border: '2px solid #05FF00', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc.svg" style={{ border: '2px solid #FF0000', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Not Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc1.svg" style={{ border: '2px solid #05FF00', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc.svg" style={{ border: '2px solid #FF0000', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Not Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc1.svg" style={{ border: '2px solid #05FF00', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc.svg" style={{ border: '2px solid #FF0000', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Not Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
              <ListItem>
                <Paper sx={{ width: '100%', height: '70px', display: 'flex', alignItems: 'center', px: 2 }} elevation={3}>
                  <img src="/static/doc1.svg" style={{ border: '2px solid #05FF00', borderRadius: '100%', width: '60px', height: '60px' }} />
                  <Typography sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                    <Typography variant="h6" sx={{ lineHeight: 1, fontWeight: 'bold' }}>Doctor Name</Typography>
                    <Typography>Available</Typography>
                    <Typography sx={{ fontWeight: 'bold', marginTop: '4px' }}>Specialist</Typography>
                  </Typography>
                </Paper>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
