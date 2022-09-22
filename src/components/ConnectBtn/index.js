import * as React from 'react';
import {makeStyles, styled} from '@mui/styles';
import {Button} from "@material-ui/core";



const StyledConnectButton = styled(Button)({
    // background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
    border: "2px solid #6953d2",
    borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 48,
    width: 180,
    padding: '0 30px',
});

const useStyles = makeStyles({
    root: {
        borderRadius: 3,
        height: 48,
        width: 180,
        padding: '0 30px',
        '&:hover': {
            boxShadow: '0 0 16px 0 rgb(111 76 255 / 88%)',
        }
    },
});

const ConnectButton = () =>{
    const classes = useStyles();
    return <Button style={{textTransform: "unset", border: "2px solid #6953d2", fontWeight: 'bold'}} color="inherit" className={classes.root}>Connect</Button>;

}

export default  ConnectButton;