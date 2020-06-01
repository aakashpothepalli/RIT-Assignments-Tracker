import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from "@material-ui/core/Box"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from "@material-ui/core/Button"
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { randomColor } from "randomcolor"
import "../../App.css"
const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 345,
        width: "90%",
        backgroundColor: "#161625",
        color: "#bdbdbd",
        marginBottom: 20,
        fontFamily: 'Quicksand'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme
            .transitions
            .create('transform', { duration: theme.transitions.duration.shortest })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: deepOrange[600],
        fontSize: 12,
        // color:"#bdbdbd !important"

    },
    text: {
        color: "#bdbdbd",
        fontFamily: 'Quicksand'

    }
}));

export default function ExamCard({
    subjectCode,
    title,
    date,
    submitLink,
    description,
    moreDetailsLink
}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    var color = useState(randomColor())[0];

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
            }),
                classes.root}
            onClick={handleExpandClick}>

            <CardHeader
                avatar={<Avatar aria-label="Subject" className={
                    classes.avatar
                }
                    style={{ backgroundColor: color }} > {
                        subjectCode
                    }
                </Avatar>}
                title={<b>{title}</b>} />

            <Box display="flex">
                <Box alignSelf="center" flexGrow={1} marginLeft={2}>

                    {`Date : ${date}`}

                </Box>

                <Box >
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        style={{
                            color: "#bdbdbd"
                        }}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more">
                        <ExpandMoreIcon />

                    </IconButton>
                </Box>

            </Box>

            <Collapse in={expanded} timeout="auto" unmountOnExit="unmountOnExit">
                <CardContent className={classes.text}>

                    <Typography paragraph="paragraph" display="block">
                        <pre style={{
                            color: "#bdbdbd",
                            fontFamily: 'Quicksand',
                            overflowX: "auto",
                            whiteSpace: "pre-wrap",
                            whiteSpace: "-moz-pre-wrap",
                            whiteSpace: "-pre-wrap",
                            whiteSpace: "-o-pre-wrap",
                            wordwrap: "break-word"

                        }}>
                            {description}
                        </pre>
                    </Typography>

                    {
                        (moreDetailsLink !== "")
                            ? (
                                <Typography paragraph="paragraph">More Details:
                                    <Button
                                        style={{
                                            marginLeft: 10,
                                            borderColor: color,
                                            color: color
                                        }}
                                        onClick={() => {
                                            window.open(moreDetailsLink)
                                        }}
                                        variant="outlined">
                                        Click Here
                                    </Button>
                                </Typography>
                            )
                            : (<></>)
                    }

                </CardContent>
            </Collapse>
        </Card>

    );
}
