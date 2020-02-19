import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import FilterIcon from "@material-ui/icons/FilterList";
import styled from "styled-components";
import { mainColor } from "../style/global";
import TimeSlider from "./TimeSlider";
import Filter from "./Filter";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    margin: "5px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const BarContainer = styled.div`
  background-color: ${mainColor};
  position: fixed;
  z-index: 3;
  width: 100vw;
  left: 50%;
  transform: translate(-50%, 0);
`;
export default function SearchBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <BarContainer>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="搜尋餐廳"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="filterList"
          onClick={handleClickOpen}
        >
          <FilterIcon />
        </IconButton>
      </Paper>
      <Filter open={open} setOpen={setOpen} />
    </BarContainer>
  );
}
