import React from 'react'
import CustomBtn from './custom'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "15%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})

function NavBar() {
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={styles().bar}>
            <img src={logo} className={styles().logo} />
            <img src={logoMobile} className={styles().logoMobile} />
            <Typography variant="h6" className={styles().menuItem}>
                About
                </Typography>
            <Typography variant="h6" className={styles().menuItem}>
                Blog
                </Typography>
            <Typography variant="h6" className={styles().menuItem}>
                Careers
                </Typography>
            <Typography variant="h6" className={styles().menuItem}>
                Demos
                </Typography>
            <Typography variant="h6" className={styles().menuItem}>
                Contact Us
                </Typography>
            <CustomBtn txt="Trial Our Product" />
        </Toolbar>
    )
}

export default NavBar