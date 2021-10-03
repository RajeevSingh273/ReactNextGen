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
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import React, { FC, ReactElement } from "react";

const About: FC<{}> = (): ReactElement => {
  return (
    <Container maxWidth="md">
      <Card>
        <CardHeader title="ReactNextGen" />
        <CardContent>
          <Grid item xs={12}>
            <strong>
              Start your next react + Type-script + Redux-toolkit + Material-Ui
              project in seconds
            </strong>
          </Grid>
          <Grid item xs={12}>
            {/* TABLE OF CONTENTS  */}
            <Typography variant="h6">Table of Contents</Typography>
            {/* <Typography>
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                  {'color="inherit"'}
                </Link>
                <Link href="#" variant="body2">
                  {'variant="body2"'}
                </Link>
              </Typography> */}
            <List
              component="nav"
              // className={classes.root}
              aria-label="contacts"
            >
              <ListItem button>
                1.&nbsp;
                <Link href="#about-the-project">{"About The Project"}</Link>
              </ListItem>
              <ListItem button>
                2.&nbsp;
                <Link href="#Project-structure">Project structure</Link>
              </ListItem>
              <ListItem button>
                3.&nbsp;
                <Link href="#getting-started">Getting Started</Link>
                <List component="div" disablePadding>
                  <ListItem button>
                    *.&nbsp;
                    <Link href="#prerequisites">Prerequisites</Link>
                  </ListItem>
                  <ListItem button>
                    *.&nbsp;
                    <Link href="#installation">Installation</Link>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem button>
                4.&nbsp;
                <Link href="#usage">Usage</Link>
              </ListItem>
              <ListItem button>
                5.&nbsp;
                <Link href="#roadmap">Roadmap</Link>
              </ListItem>
              <ListItem button>
                6.&nbsp;
                <Link href="#contributing">Contributing</Link>
              </ListItem>
              <ListItem button>
                7.&nbsp;
                <Link href="#license">License</Link>
              </ListItem>
              <ListItem button>
                8.&nbsp;
                <Link href="#contact">Contact</Link>
              </ListItem>
              <ListItem button>
                9.&nbsp;
                <Link href="#acknowledgements">Acknowledgements</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            {/* ABOUT THE PROJECT */}
            <div id="about-the-project">
              ## About The Project This is a starter boilerplate/Template app
              I've put together using the following technologies: *
              [React](https://github.com/facebook/react) * [React Router
              Redux](https://github.com/reactjs/react-router-redux) Redux/React
              Router bindings.
              {/* <!-- PROJECT STRUCTURE--> */}
              ## Project structure ``` . └── ReactNextGen/ ├── public/ │ ├──
              data │ ├── enums │ └── model ├── src/ │ ├── app/ │ │ ├── data │ │
              ├── enums │ │ └── model │ ├── assets/ │ │ ├── config/ │ │ │ └──
              default.json │ │ ├── images │ │ ├── styles/ │ │ │ ├──
              commonStyle.ts │ │ │ └── index.ts │ │ └── themes/ │ │ ├── index.ts
              │ │ ├── darkTheme.ts │ │ └── lightTheme.ts │ ├── components/ │ │
              ├── footer │ │ ├── header/ │ │ │ ├── banner.tsx │ │ │ ├──
              index.tsx │ │ │ ├── navBar.tsx │ │ │ └── subMene.tsx │ │ ├── help
              │ │ ├── about.tsx │ │ └── home.tsx │ ├── modulesAPI/ │ │ ├──
              bannerMessgeAPI.ts │ │ └── requestAPI.ts │ ├── modulesSlice/ │ │
              ├── bannerMessageSlice.ts │ │ └── index.ts │ ├── reduxStore/ │ │
              └── store.ts │ ├── routes/ │ │ └── appRoutes.tsx │ ├── App.css │
              ├── App.test.tsx │ ├── App.tsx │ ├── index.css │ ├── index.tsx │
              └── logo.svg ├── .env ├── package.json └── tsconfig.json ```
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- GETTING STARTED --> */}
            <div>
              ## Getting Started This is an example of how you may give
              instructions on setting up your project locally. To get a local
              copy up and running follow these simple example steps. ###
              Prerequisites This is an example of how to list things you need to
              use the software and how to install them. * npm ```sh npm install
              npm@latest -g ``` ### Installation 1. Clone the repo ```sh git
              clone https://github.com/your_username_/Project-Name.git ``` 2.
              Install NPM packages ```sh npm install ``` 3. Run App ```sh npm
              start ```
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- USAGE EXAMPLES --> */}
            <div>## Usage</div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- ROADMAP --> */}
            <div>
              ## Roadmap See the [open
              issues](https://github.com/RajeevSingh273/ReactNextGen/issues) for
              a list of proposed features (and known issues).
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- CONTRIBUTING --> */}
            <div>
              ## Contributing Contributions are what make the open source
              community such an amazing place to be learn, inspire, and create.
              Any contributions you make are **greatly appreciated**. 1. Fork
              the Project 2. Create your Feature Branch (`git checkout -b
              feature/AmazingFeature`) 3. Commit your Changes (`git commit -m
              'Add some AmazingFeature'`) 4. Push to the Branch (`git push
              origin feature/AmazingFeature`) 5. Open a Pull Request
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- LICENSE --> */}
            <div>
              ## License Distributed under the MIT License. See `LICENSE` for
              more information.
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- CONTACT --> */}
            <div>
              ## Contact Rajeev kumar Singh -
              [@rajeevsingh273](https://twitter.com/rajeevsingh273) -
              rajeevsingh273@gmail.com Project Link:
              [https://github.com/RajeevSingh273/ReactNextGen](https://github.com/RajeevSingh273/ReactNextGen)
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* <!-- ACKNOWLEDGEMENTS --> */}
            <div id="acknowledgements">
              ## Acknowledgements * [GitHub Emoji Cheat
              Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) *
              [Choose an Open Source License](https://choosealicense.com) *
              [Font Awesome](https://fontawesome.com)
            </div>
          </Grid>
          <Grid item xs={12}></Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
