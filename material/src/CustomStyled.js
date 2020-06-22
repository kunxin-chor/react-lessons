import React from "react"
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
        root: {
          backgroundColor:"red"
         },
  });

class CustomStyled extends React.Component {
    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            Hi there
        </div>

    }
}

export default withStyles(useStyles)(CustomStyled);