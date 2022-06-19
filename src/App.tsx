import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import "./styles/App.css";

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
          <div></div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
