import React from 'react';
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
import { withStyles,makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import {mainColor} from '../style/global';
import TimeSlider from './TimeSlider'
import food1 from '../assets/food_type1.png'
import food2 from '../assets/food_type2.png'
import food3 from '../assets/food_type3.png'
import food4 from '../assets/food_type4.png'


const CustomSwitch = withStyles({
  switchBase: {
    color: '#cccccc',
    '&$checked': {
      color: '#499ba2',
    },
    '&$checked + $track': {
      backgroundColor: '#499ba2b3',
    },
  },
})(Switch);

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

  const FoodIcon =styled.img`
    border: 1px solid ${mainColor};
    cursor: pointer;
    border-radius: 5px;
    width: 75px;
    margin: 10px;
  `
  const ConfirmButton = styled(Button)`
    &.MuiButton-contained{
    background-color:#499ba2;
    color: #fff;
    display: block;
    margin: 0 auto;
    width: 50%;
  }
  `

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });


export default function Filter(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition} className={classes.root}>
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
            <CustomSwitch
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </ListItem>
          <Divider />
          <ListItem style={{flexDirection:'column'}}>
            <ListItemText primary="食物領取時間" style={{display:'inline-block'}}/>
            <TimeSlider/>
          </ListItem>
          <ListItem style={{flexDirection:'column'}}>
            <ListItemText primary="餐廳類型"/>
            <div>
              <FoodIcon src={food1} alt="bread"/>
              <FoodIcon src={food2} alt="bread"/>
              <FoodIcon src={food3} alt="bread"/>
              <FoodIcon src={food4} alt="bread"/>
            </div>
          </ListItem>
          <ConfirmButton variant="contained">確認</ConfirmButton>
        </List>
      </Dialog>
    </div>
  )
}
