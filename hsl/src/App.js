import './App.css';
import Main from './components/Main';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Mapview from './components/Mapview'
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";


function App() {
  return (
    <div >
      <AppBar position="static" >
                <Toolbar className="Toolbar">
                    <Typography class="Font">
                        <b>Grandinkulma bus schedule</b>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container >
                <Grid item xs={12} md={12} >
                    <Paper >
                    <Main/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Paper >
                        <Mapview />
                    </Paper>
                </Grid>
            </Grid>
    </div>
  );
}

export default App;
