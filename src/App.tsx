// Emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Container, createTheme, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Header from "./components/Header";
import TextFieldWrap from "./components/FormsUI/TextFieldWrap";
import SelectorWrap from "./components/FormsUI/SelectorWrap";
import selectorOptions from "./data/selectorOptions.json";
import "./styles/App.css";
import DateTimePicker from "./components/FormsUI/DateTimePicker";

// Would need to refactor and use ThemeProvider if theme was being used in other components
const theme = createTheme({ spacing: 8 }); // use createTheme hook to create a theme object

const styles = {
  formWrap: css({
    marginTop: theme.spacing(5), // takes value and * by theme spacing value
    marginBottom: theme.spacing(8),
  }),
};

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
  country: "",
  date: new Date(),
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short...")
    .max(16, "Too Long...")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short...")
    .max(16, "Too Long...")
    .required("Required"),
  email: Yup.string()
    .min(5, "Too Short...")
    .max(36, "Too Long...")
    .email("Invalid Email...")
    .required("Required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Invalid Phone Number...")
    .min(10, "Too Short...")
    .max(10, "Too Long...")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  date: Yup.date()
    .min(new Date(), "Please select a date in the future")
    .required("Required"),
});

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
          <div css={styles.formWrap}>
            <Formik
              initialValues={INITIAL_FORM_STATE}
              onSubmit={(values) => console.log(values)}
              validationSchema={VALIDATION_SCHEMA}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrap
                      name="firstName"
                      type="text"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrap
                      name="lastName"
                      type="text"
                      label="Last Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrap name="email" type="text" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrap
                      name="phoneNumber"
                      type="text"
                      label="Phone Number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Your Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrap
                      name="addressLine1"
                      type="text"
                      label="Address Line 1"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextFieldWrap
                      name="addressLine2"
                      type="text"
                      label="Address Line 2"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextFieldWrap name="city" type="text" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectorWrap
                      name="province"
                      label="Province"
                      options={selectorOptions.provinces}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectorWrap
                      name="country"
                      label="Country"
                      options={selectorOptions.countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="date" />
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
