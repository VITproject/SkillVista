import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import "./Pop.css";
import {useNavigate } from "react-router-dom";




export default function BasicSelect() {
  const [course, setCourse] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCourse(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    if (course!="") {
      navigate("/StudentDashboard");
      console.log(`Selected Course: ${course}`);
    } else {
      alert("Please select a course before submitting.");
    }
  };

  return (
    <>
      <Box sx={{ width: '50%', marginTop: '20%', marginLeft: "25%" }}>
        <h1>Select your Course Carefully*</h1>
        <FormControl fullWidth>
          <InputLabel id="select-label">Course</InputLabel>
          <Select
            labelId="select-label"
            id="demo-simple-select"
            value={course}
            label="course"
            onChange={handleChange}
          >
            <MenuItem value="MCA">MCA</MenuItem>
            <MenuItem value="Mtech">Mtech</MenuItem>
            <MenuItem value="MBA">MBA</MenuItem>
          </Select>
        </FormControl><br />
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
}