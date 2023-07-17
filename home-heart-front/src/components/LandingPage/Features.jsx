import React from "react"; 
import { Container, List, ListItem, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container2: {
    width: 1500,
    height: 726,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
  },
  content: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    // backgroundColor: "blue",
  },
  featureList: {
    width: '100%',
    marginRight: theme.spacing(4),
  },
  featureItem: {
    marginBottom: theme.spacing(2),
  },
  featureImage: {
    width: '35%', 
    height: '100%',
  },
}));


const Features = () => {

      const classes = useStyles();

      return (
      <Container className={classes.container2}>
        <div className={classes.content}>
        <List className={classes.featureList}>
            <ListItem className={classes.featureItem}>
              <Typography variant="h6" component="span">Language and Cultural Matching: Connect with mental health professionals from your home country, for therapy in your native language and cultural context.</Typography>
            </ListItem>
            <ListItem className={classes.featureItem}>
              <Typography variant="h6" component="span">Affordable Pricing: We leverage economic disparities to offer you affordable prices, making mental health care more accessible.</Typography>
            </ListItem>
            <ListItem className={classes.featureItem}>
              <Typography variant="h6" component="span">Verified Professionals: All professionals on our platform are thoroughly verified to ensure you receive reliable and quality care.</Typography>
            </ListItem>
            <ListItem className={classes.featureItem}>
              <Typography variant="h6" component="span">Secure and Confidential: Your privacy is our top priority. We provide secure communication channels and protect your personal information.</Typography>
            </ListItem>
            <ListItem className={classes.featureItem}>
              <Typography variant="h6" component="span">Rich Resource Library: Access a wide range of resources related to mental health and the immigrant experience, to enhance your understanding and provide additional support.</Typography>
            </ListItem>
        </List>
          <img
            src="https://assets.pkimgs.com/pkimgs/ab/images/dp/wcm/202312/0116/camp-extra-wide-dresser-o.jpg"
            alt="Feature Image"
            className={classes.featureImage}
          />
        </div>
    </Container>
    );
};

export default Features; 