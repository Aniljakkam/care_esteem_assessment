import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material";

const AssessmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    trainingCompleted: "",
    readPolicy: "",
    knowAccessPolicy: "",
    washedHands: "",
    properlyPrepared: "",
    firstSignature: { name: "", date: "" },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignatureChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      firstSignature: { ...formData.firstSignature, [name]: value },
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Box>
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Training and Policy
        </Typography>
        <Divider />
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>
                Has the member of staff completed training on the safe handling
                of medicines?
              </FormLabel>
              <RadioGroup
                name="trainingCompleted"
                value={formData.trainingCompleted}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>
                Has the member of staff read the medication policy and signed to
                indicate that they have done so?
              </FormLabel>
              <RadioGroup
                name="readPolicy"
                value={formData.readPolicy}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>
                Does the member of staff know how to access the medication
                policy if they wish to check any information?
              </FormLabel>
              <RadioGroup
                name="knowAccessPolicy"
                value={formData.knowAccessPolicy}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Administration of Medicines
        </Typography>
        <Divider />
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>
                Did the member of staff wash their hands before starting to
                administer any medication and follow appropriate hygiene
                measures?
              </FormLabel>
              <RadioGroup
                name="washedHands"
                value={formData.washedHands}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel>
                Did the member of staff make sure that everything was properly
                prepared before starting the medication round?
              </FormLabel>
              <RadioGroup
                name="properlyPrepared"
                value={formData.properlyPrepared}
                onChange={handleChange}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Box mb={4}>
        <Typography variant="h6">
          Signature of all the involved persons in the Assessment Required
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Admin Name"
              name="name"
              value={formData.firstSignature.name}
              onChange={handleSignatureChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.firstSignature.date}
              onChange={handleSignatureChange}
              fullWidth
              placeholder="Enter Date"
            />
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default AssessmentForm;
