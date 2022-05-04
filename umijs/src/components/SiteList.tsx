import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import styles from "./components.less"


export default function FolderList() {
    const siteList=[
        {
            avatar:<GoogleIcon />,
            url:'https://www.google.com.hk',
            name:'Google'
        },
        {
            avatar:<YouTubeIcon />,
            url:'https://www.youtube.com',
            name:'YouTube'
        },
        {
            avatar:<TwitterIcon />,
            url:'https://www.twitter.com',
            name:'Twitter'
        },
        {
            avatar:<GitHubIcon />,
            url:'https://www.github.com',
            name:'Github'
        },
    ]
    const goTo=(url:string)=>{
        window.open(`/${url.split('://')[0]}/${url.split('://')[1]}`)
    }



  return (
    <List sx={{ width: 350, bgcolor: 'background.paper' }}
    className={styles.siteList}
    subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Proxy List
        </ListSubheader>
      }
    >
        
      {
          siteList.map(i=>
              <ListItemButton onClick={()=>goTo(i.url)}>
            <ListItemAvatar>
              <Avatar>
                {i.avatar}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={i.name} secondary={i.url} />
            </ListItemButton>
          )
      }
    </List>
  );
}
