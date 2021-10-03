import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Link,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <Card>
        <CardHeader title="ReactNextGen" />
        <CardContent>
          <Grid item xs={12}>
            <Typography variant="h6">
              Start your next react + Type-script + Redux-toolkit + Material-Ui
              project in seconds
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <br />
            <Typography variant="h6">
              Edit <code>src/App.tsx</code> and save to reload.
            </Typography>
            <List  aria-label="contacts">
              <ListItem button>
                <Link
                  className="App-link"
                  href="https://github.com/RajeevSingh273/ReactNextGen#about-the-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Project
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  className="App-link"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  className="App-link"
                  href="https://redux-toolkit.js.org/usage/usage-with-typescript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Redux-toolkit
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  className="App-link"
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn TypeScript
                </Link>
              </ListItem>
              <ListItem button>
                <Link
                  className="App-link"
                  href="https://material-ui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn Material-UI
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}></Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
