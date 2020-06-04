import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },
  footer: {
    marginBottom: theme.spacing(3),
    whiteSpace: "nowrap",
  },
});

const Footer = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          company,
          companyUrl,
          contact: { email },
        },
      },
    },
  } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography component="span" variant="caption">
            ©{new Date().getFullYear()} <a href={companyUrl}>{company}</a>{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {email}
          </Typography>
        </span>
      </footer>
    </>
  );
});

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            companyUrl
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
