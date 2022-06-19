// Emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";

// Material UI
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";

// Formik
import { Formik, Form } from "formik";

// Yup
import * as Yup from "yup";

// CSS
import "./styles/App.css";

const styles = {
  header: css({
    backgroundColor: "red",
    marginTop: "100px",
  }),
};

const INITIAL_FORM_STATE = {};

const VALIDATION_SCHEMA = {};

const App = () => {
  return (
    <Grid container>
      {/* A grid container holds grid items */}
      <Grid item xs={12}>
        {/* Breakpoints like xs sm md lg xl are like @media queries in css and
       determine the number of columns taken up at different screen sizes, 
      takes values from 1-12 with 12 being the full screen width */}
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth={"md"}>
          {/* A container centers your content horizontally */}
          <div css={styles.header}>
            <Formik
              initialValues={INITIAL_FORM_STATE}
              onSubmit={() => console.log("Submit")}
              validationSchema={VALIDATION_SCHEMA}
            >
              <Form></Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
