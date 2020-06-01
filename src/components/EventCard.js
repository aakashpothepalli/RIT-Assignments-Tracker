import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button"
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange ,deepOrange } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "../App.css"
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    width:"90%",
    backgroundColor:"#161625",
    color:"#bdbdbd",
    marginTop:20,
    fontFamily:'Quicksand'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: deepOrange[600],
    fontSize:12,
    color:"#bdbdbd !important"
   
  },
  text:{
      color:"#bdbdbd",
      fontFamily:'Quicksand'

  }
}));
const theme = createMuiTheme({
    palette: {
      secondary: deepOrange,
    },
  });

export default function EventCard({subjectCode, subjectName , left,deadline,type,submitLink,content,contentLink}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onShare = ()=>{

  }
  return (
    <MuiThemeProvider theme={theme}>

    <Card  className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      }),classes.root}
      onClick={handleExpandClick}>
      <CardHeader

        avatar={
          <Avatar aria-label="Subject" className={classes.avatar}>
        {subjectCode}
          </Avatar>
        }
        // color="#bdbdbd"

        title={<b>subjectName</b>}
        // subheader="Deadline - September 14, 2016"
      />
   
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon  className={classes.text}/>
        </IconButton> */}
        {/* <IconButton aria-label="share" onClick={onShare}>
          <ShareIcon className={classes.text}/>
        </IconButton> */}

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          }),classes.text}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          
        </IconButton>

        <Typography style={{marginLeft:60}}>
        {
            type==="test"?`date : ${deadline}`:`deadline : ${deadline}`
        }
          </Typography>
          
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.text}>
          <Typography paragraph>Date: {deadline}</Typography>

          <Typography paragraph>
          <Typography paragraph="paragraph" display="block">
                        <pre style={{
                            color: "#bdbdbd",
                            fontFamily: 'Quicksand'

                        }}>
                            {content}
                        </pre>
                    </Typography>

          </Typography>
          
          {(contentLink!==undefined)?(<Typography paragraph>Syllabus: 
            <Button
            style={{marginLeft:10}}
            onClick={()=>{
                window.open(contentLink)
            }}
            variant="outlined"
            color="secondary">
                link
            </Button>
          </Typography>): (<></>) }

          {(submitLink!==undefined)?(<Typography paragraph>submit: 
            <Button
            style={{marginLeft:10}}
            onClick={()=>{
                window.open(submitLink)
            }}
            variant="outlined"
            color="secondary">
                link
            </Button>
          </Typography>): (<></>) }
      
            
        </CardContent>
      </Collapse>
    </Card>
    </MuiThemeProvider>

  );
}
