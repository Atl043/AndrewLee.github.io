import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            I'm Andrew Lee. I'm a Software Developer at Microsoft under the C + Ai Silver Org. You can check out my career and stuff I work on here.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            I'm a Software Developer
          </Typography>
          <Typography variant="body1" paragraph>
            This is a sample portfolio website built with React and Material UI.
            Feel free to customize it with your own content and style.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
