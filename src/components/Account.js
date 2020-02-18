import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Account() {
  return (
     <AccountContainer>
      <Avatar alt="Remy Sharp" />
      <p>Name</p>
      <Grid container alignItems="center">
        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
        <Divider orientation="vertical" flexItem />
        <div></div>
        <p>30 reseved</p>
      </Grid>
    </AccountContainer>
  )
}
