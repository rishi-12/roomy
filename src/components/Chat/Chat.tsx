import * as React from "react";
import Container from "@mui/material/Container";
import { styleConstants } from "../../constants/styleConstants";
import "../../css/chat.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
// import

export default function Chat() {
  // const [conversations, setConversations] = useState({

  // })
  return (
    <>
      <Container
        sx={{ bgcolor: styleConstants.bg_color, minHeight: "100vh", pt: "2em" }}
        maxWidth={false}
        disableGutters
      >
        <div className="chatPane">
          <div className="contactNames">
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>
          <div className="messagesPane">
            <div className="chat">
              <div className="contact bar">
                <div className="pic stark"></div>
                <div className="name">Tony Stark</div>
                <div className="seen">Today at 12:56</div>
              </div>
              <div className="messages" id="chat">
                <div className="time">Today at 11:41</div>
                <div className="message parker">
                  Hey, man! What's up, Mr Stark? 👋
                </div>
                <div className="message stark">Kid, where'd you come from?</div>
                <div className="message parker">Field trip! 🤣</div>

                <div className="message stark">
                  <div className="typing typing-1"></div>
                  <div className="typing typing-2"></div>
                  <div className="typing typing-3"></div>
                </div>
              </div>
              <div className="input">
                <i className="fas fa-camera"></i>
                <i className="far fa-laugh-beam"></i>
                <input placeholder="Type your message here!" type="text" />
                <i className="fas fa-microphone"></i>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
