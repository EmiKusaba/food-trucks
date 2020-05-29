import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function Schedule(props) {


  /* const [category, setCategory] = React.useState("");
  const handleCategory = (event) => {
    setCategory(event.target.value);
  }; */

  const [location, setLocation] = React.useState("");
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="schedule" ref={props.linkRef}>
      
      <Typography variant="h3" className="detailHeroText">
          Schedule
        </Typography>
        <Typography variant="h5" className="detailHeroText">
          Available Time
        </Typography>
        <Container maxWidth="sm">
          <form className="schedule-form">
            <FormControl variant="outlined" >
              <InputLabel id="select-label-location">Select</InputLabel>
              <Select className="selectMenu"
                labelId="select-label-location"
                id="select-location"
                value={location}
                onChange={handleLocation}
              >
                <MenuItem value={"11:00"}>11:00</MenuItem>
                <MenuItem value={"11:30"}>11:30</MenuItem>
                <MenuItem value={"12:00"}>12:00</MenuItem>
                <MenuItem value={"12:30"}>12:30</MenuItem>
                <MenuItem value={"13:00"}>13:00</MenuItem>

              </Select>
            </FormControl>
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="secondary">
              Start to order
            </Button>
          </form>
        </Container>
      
    </div>
  );
}

export default Schedule;