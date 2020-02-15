import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import {mainColor} from '../style/global';
import TimeSlider from './TimeSlider'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: `${mainColor}`
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



export default function Cart() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
function valuetext(value) {
  return `${value}°C`;
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              篩選器
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              清除
            </Button>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText primary="只顯示有食物且仍營業的店家"/>
            <Switch
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </ListItem>
          <Divider />
          <ListItem style={{flexDirection:'column'}}>
            <ListItemText primary="食物領取時間" style={{display:'inline-block'}}/>
            <TimeSlider/>
            {/* <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            /> */}
          </ListItem>
          <ListItem>
            <ListItemText primary="餐廳類型"/>

          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}
