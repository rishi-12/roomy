import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import ReactMarkdown from "react-markdown";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import WcIcon from "@mui/icons-material/Wc";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//need to add ImageLinks if any, no of roomates looking for
export interface POST {
  address?: ADDRESS;
  postId?: string;
  user?: USER;
  postBody?: string;
  gender?: string;
  size?: string;
  date?: string;
  rent?: number;
  noOfRoommates?: number;
  noOfFilledRoommates?: 0;
}

interface ADDRESS {
  addressId: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

interface USER {
  userId: string;
  username: string;
  name: string;
  email: string;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props: POST) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const genderIcon = () => {
    // console.log(`GENDER = ${props.gender}`);
    let sx = {
      fontSize: "28px",
    };
    if (props?.gender == null) return <></>;

    if (props.gender == "male") return <ManIcon sx={sx} />;
    else if (props.gender == "female") return <WomanIcon sx={sx} />;
    return <WcIcon sx={sx} />;
  };

  return (
    <Card sx={{ width: "55%", mb: "2em" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[300] }} aria-label="recipe">
            {props?.user?.name.charAt(0)}
          </Avatar>
        }
        action={
          <Button
            variant="contained"
            // onClick={() => onSubmit()}
            style={{
              backgroundColor: "#b197fc",
            }}
          >
            Connect
          </Button>
        }
        title={props?.user?.name}
        subheader={
          props.date &&
          new Date(props?.date).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })
        }
      />
      <CardContent
        sx={{
          margin: "20px 30px 20px 0px",
          // border: "1px solid black",
          padding: 0,
          paddingLeft: "30px",
        }}
      >
        <ReactMarkdown children={props?.postBody ? props?.postBody : ""} />
      </CardContent>

      <div className="post-info">
        <div className="post-info__row">
          <div className="post-info__item address_body">
            <div className="post-info__label address_label">Address</div>
            <div className="post-info__body post-info__address_display">
              <p>{props?.address != null && props?.address.address1}</p>
              <p>{props?.address != null && props?.address.address2}</p>
              <p>
                {props?.address != null &&
                  props?.address.city + ", " + props.address.state}
              </p>
            </div>
          </div>
        </div>

        <div className="post-info__row">
          <div className="post-info__item">
            <div className="post-info__label">Preferred Gender</div>
            <div className="post-info__body">
              <div className="post-info__gender">{genderIcon()}</div>
            </div>
          </div>
          <div className="post-info__item">
            <div className="post-info__label">Number of roommates needed</div>
            <div className="post-info__body">
              <p className="post-info__roommates">
                {props?.noOfRoommates != null &&
                props?.noOfFilledRoommates != null
                  ? props?.noOfRoommates - props?.noOfFilledRoommates
                  : 0}
              </p>
            </div>
          </div>
        </div>

        <div className="post-info__row">
          <div className="post-info__item">
            <div className="post-info__label">House Size</div>
            <div className="post-info__body">
              <div className="newPost_size selected">
                {props != null && props.size}
              </div>
            </div>
          </div>
          <div className="post-info__item">
            <div className="post-info__label">Rent</div>
            <div className="post-info__body">
              <p className="post-info__roommates">
                {"₹ " + (props?.rent != null ? props?.rent : 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
