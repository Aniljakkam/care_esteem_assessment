import React from "react";
import { Paper, Grid, Typography, Divider } from "@mui/material";

const archivedAssessments = [
  {
    id: 1,
    trainingCompleted: "Yes",
    readPolicy: "Yes",
    knowAccessPolicy: "Yes",
    washedHands: "Yes",
    properlyPrepared: "Yes",
    firstSignature: { name: "Admin 1", date: "2024-10-21" },
  },
];

const HistoricalAssessments = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Historical Assessments</h2>
      {archivedAssessments.map((assessment) => (
        <Paper
          key={assessment.id}
          elevation={3}
          style={{ padding: "20px", marginBottom: "20px" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Assessment #{assessment.id}</Typography>
              <Divider />
            </Grid>

            <Grid item xs={12}>
              <Typography>
                Training Completed: {assessment.trainingCompleted}
              </Typography>
              <Typography>Read Policy: {assessment.readPolicy}</Typography>
              <Typography>
                Know Access Policy: {assessment.knowAccessPolicy}
              </Typography>
              <Typography>Washed Hands: {assessment.washedHands}</Typography>
              <Typography>
                Properly Prepared: {assessment.properlyPrepared}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>
                First Admin: {assessment.firstSignature.name}
              </Typography>
              <Typography>Date: {assessment.firstSignature.date}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default HistoricalAssessments;
