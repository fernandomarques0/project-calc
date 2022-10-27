import './App.css';
import React from 'react';
import { useState } from 'react';
import { Box, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  const [values, setValues] = useState({
    vcc: 0,
    vbb: 0,
    ganho: 0,
    rb: 0,
    rc: 0,
  });

  const [results, setResults] = useState({
    ib: 0,
    ic: 0,
    vce: 0
  })

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target;
    setValues({...values, [name]:value})
  }

  const handleSubmit = (values) => {
    console.log(values)
    setValues(values)
    calculate()
  }

  const calculate = () => {
    const ib = (values.vbb / values.rb);
    const ic = (values.ganho * ib)
    const vce = (values.vcc - (ic * values.rc))
    setResults({...results, ib:ib, ic:ic, vce:vce})
  }

  return (
    <>
    <Box sx={{ flexGrow: 1, padding: '25px 50px 75px 100px' }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic" label="Vcc" name="vcc" variant="outlined" onChange={handleChange} value={values.vcc}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic" label="Vbb" name="vbb" variant="outlined" onChange={handleChange} value={values.vbb} 
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic" label="Ganho" name="ganho" variant="outlined" onChange={handleChange} value={values.ganho} 
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic" label="Rb" name="rb" variant="outlined" onChange={handleChange} value={values.rb}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic" label="Rc" name="rc" variant="outlined" onChange={handleChange} value={values.rc}
          />
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="outlined" onClick={() => handleSubmit(values)}>Calcular</Button>
        </Grid>
      </Grid>
      {
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="subtitle2" component="h2">
            ib = {results.ib}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" component="h2">
            ic = {results.ic}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2" component="h2">
            vce = {results.vce}
          </Typography>
        </Grid>
		  </Grid>
      }
    </Box>
    </>
  );
}

export default App;
