import React from "react";
import { Button } from "@mui/material";

const AptIndex = () => {
    return (
    <div className="d-flex justify-content-center" style={{ marginTop:450 }}>
        <Button href="/apt" variant="contained" size="large" color="info" sx={{ fontSize: "24px", mb: 18, marginRight: 50}}>Clinic Appointments</Button>
        <Button href="/dentalapp" variant="contained" size="large" color="info" sx={{ fontSize: "24px", mb: 18 }}>Dental Appointments</Button>
    </div>
    );
  };
  
  export default AptIndex;