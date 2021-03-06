import { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Typography } from "@material-ui/core";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable/ContactsTable";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    headContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);

export default function Contacts() {
  const classes = useStyles();
  const contacts = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.headContainer}>
          <Typography variant="h3" component="h1">
            Contacts
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <CircularProgress />;
            }

            if (contacts.isError) {
              return <div>...error</div>;
            }
            return <ContactsTable data={contacts.data}/>;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
}
