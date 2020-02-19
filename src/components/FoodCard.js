import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Avatar
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styled from "styled-components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  card: {
    margin: "0 auto",
    marginBottom: "10px",
    width: "90%",
    borderRadius: "20px",
    position: "relative"
  },
  imgContainer: {
    width: "100%",
    borderRadius: "20px"
  },
  media: {
    height: "150px"
  },
  info: {
    position: "absolute",
    top: "40%",
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    width: "100%"
  },
  infoTextContainer: {
    background: "rgba(0,0,0,0.5)",
    padding: "3px"
  },
  infoText: {
    verticalAlign: "middle"
  },
  infoImage: {
    verticalAlign: "middle"
  },
  tip: {
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30px",
    display: "flex",
    color: "#fff",
    justifyContent: "space-between",
    padding: "5px",
    boxSizing: "border-box"
  },
  location: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "70px",
    height: "70px",
    zIndex: 2
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingBottom: 0,
    width: "60%",
    borderRadius: "20px",
    backgroundColor: "#FFF",
    paddingLeft: "10px",
    paddingTop: "10px",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "2",
    height: "100%",
    fontSize: "14px",
    color: "#293132"
  },
  contentText: {
    marginBottom: "20px",
    width: "100%",
    textAlign: "center"
  },
  remainingNumber: {
    fontSize: "24px"
  },
  share: {
    padding: "5px"
  }
});

const DiscountContainer = styled.div`
  width: 35px;
  height: 35px;
  background-color: #499ba2;
  color: #fff;
  position: absolute;
  border-radius: 0 0 10px 0;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
`;

const LikesContainer = styled.div`
  width: 55px;
  height: 35px;
  background-color: #499ba2;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
`;

export default function FoodCard(props) {
  const classes = useStyles();

  const restaurantDetail = props.data;
  if (restaurantDetail) {
    return (
      <Card className={classes.card}>
        <div className={classes.imgContainer}>
          <DiscountContainer>30%</DiscountContainer>
          <CardMedia
            className={classes.media}
            image="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fwww.upmedia.mg%2Fupload%2Farticle%2F20180828124352040787.JPG&sp=988e7f77d9a375df83fea9f5fdbeb99d&anticache=196378"
            title="Paella dish"
          />
          <div className={classes.info}>
            {/* <div className={classes.infoTextContainer}>
          <span className={classes.infoText}>300</span>
          <FavoriteIcon className={classes.infoImage} />
        </div> */}
            {/* <div className={classes.infoTextContainer}>
          <span>1 left</span>
        </div> */}
          </div>
          {/* <Avatar
        src="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSsolVYVPXBPOxV-za3sfIec5SVM9G3TyWuWwpjo2yreg-QzWbH3DHPxO4ixg%26s&sp=73a4c09106199a7ad867b133b287246e&anticache=769570"
        className={classes.avatar}
      /> */}
          {/* <div className={classes.tip}>
        <div className={classes.location}>
          <LocationOnIcon />
          <span>795m</span>
        </div>
        <div>NT$1000</div>
      </div> */}
        </div>
        <CardContent className={classes.content}>
          <LikesContainer>
            <FavoriteBorderIcon fontSize="small" />
            <span>{restaurantDetail.assessment}</span>
          </LikesContainer>
          <h3 className={classes.contentText}>{restaurantDetail.name}</h3>
          <p>
            {restaurantDetail.start_time.slice(0, 5)} -
            {restaurantDetail.end_time.slice(0, 5)}
          </p>
          <p>1.1KM</p>
          <p>
            數量：
            <span className={classes.remainingNumber}>
              {restaurantDetail.foods_count}
            </span>
          </p>
        </CardContent>
        {/* <ShareIcon className={classes.share} /> */}
      </Card>
    );
  }
  return <div>none</div>;
}
