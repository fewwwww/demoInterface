import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import hyperOracle from "../../assets/logos/hyperOracle.png";
import ConnectButton from "../ConnectBtn";

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={true} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function NavBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar color={"transparent"}  elevation={0}>
                    <Container maxwidth={"lg"} sx={{mt: 2, mb:2}}>
                        <Toolbar disableGutters>
                            <img style={{height: '40px', width: '40px'}} src={hyperOracle} alt={"hyper_oracle"}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    ml: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none', flexGrow: 1
                                }}
                            >
                                 Hyper Oracle
                            </Typography>

                            <ConnectButton >Connect</ConnectButton>

                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container maxwidth={"lg"}>
                {props.children}
            </Container>
        </React.Fragment>
    );
}