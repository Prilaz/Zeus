import React from "react";
import Button from "@mui/material/Button";
import { Box, Grid2, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Box p={5} bgcolor={"#ccddee"}>
        {" "}
        <Grid2 container>
          <Grid2 item size={{ xs: 12, md: 6 }} bgcolor={"#f9fbe7"} p={5}>
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{ textDecoration: "underline", mb: 3 }}
              color="primary"
            >
              Address
            </Typography>
            <Typography variant="h5" color="info">
              Nagarjuna College
            </Typography>
            <Typography variant="h5" color="info">
              Phone:01-098280
            </Typography>
            <Typography variant="h5" color="info">
              Email:info@nagarjunacollege.com
            </Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12, md: 6 }} bgcolor={"#cceffa"} p={5}>
            <Typography
              variant="h3"
              textAlign={"center"}
              sx={{ textDecoration: "underline" }}
              color="primary"
              mb={5}
            >
              Contact Form
            </Typography>
            <TextField
              label="E-mail"
              placeholder="Enter your email here"
              helperText="eg=info@nfof.gmail.com"
              required
              color="success"
              variant="filled"
              fullWidth
            />
            <TextField
              label="Subject"
              required
              color="success"
              variant="filled"
              fullWidth
            />
            <TextField
              label="Message"
              required
              color="success"
              variant="filled"
              fullWidth
              sx={{ mt: 2 }}
              multiline
              rows={5}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="medium"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 12 }} bgcolor={"#33ffe3"}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.213262371289!2d85.3298751!3d27.679802799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ca771e9e55%3A0xc94f84d1f057520f!2sNagarjuna%20College%20of%20IT!5e0!3m2!1sen!2snp!4v1740623593913!5m2!1sen!2snp"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Contact;
