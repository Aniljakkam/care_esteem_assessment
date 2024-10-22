import React, { useState } from "react";
import AssessmentForm from "./components/AssessmentForm";
import HistoricalAssessments from "./components/HistoricalAssessments";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <Box
      style={{
        padding: "40px",
        backgroundColor: "#e8f4f9",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3}>
        {/* Main form section */}
        <Grid item xs={8}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                role="img"
                aria-label="user-icon"
                style={{ marginRight: "10px" }}
              >
                👤
              </span>
              Harish's Competency
            </Typography>
            <AssessmentForm onSubmit={handleSubmit} />
          </Paper>
        </Grid>

        {/* Sidebar for Historical Assessments */}
        <Grid item xs={4}>
          <Paper
            elevation={3}
            style={{ padding: "20px", position: "sticky", top: "20px" }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginBottom: "20px", width: "100%" }}
            >
              Historical Assessments
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {submittedData && <HistoricalAssessments />}
    </Box>
  );
}

export default App;
