import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
// import { red } from "@mui/material/colors";

export const ProfileCard = () => {
  return (
    <Box>
      <Card>
        <CardHeader avatar={<Avatar>M</Avatar>} />
        <CardContent>
          <Typography sx={{ variant: "body2", fontWeight: "bold" }}>
            Monica Joseph
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Senior Software Engineer
          </Typography>
          <Box />
          <Typography sx={{ color: "gray", fontWeight: "bold", float: "left" }}>
            Who's viewed your profile ?{" "}
            <span
              style={{
                color: "blue",
                float: "right",
                fontWeight: "bold",
                paddingLeft: "32px",
              }}
            >
              50
            </span>
          </Typography>
          <Typography sx={{ color: "gray", fontWeight: "bold", float: "left" }}>
            Impression of your post{" "}
            <span
              style={{
                color: "blue",
                float: "right",
                fontWeight: "bold",
                // paddingLeft: "42px",
              }}
            >
              9195
            </span>
            <Divider />
          </Typography>

          <IconButton>
            <BookmarkBorderOutlinedIcon />
            <Typography
            //   sx={{ color: "gray", fontWeight: "bold", marginTop: "2px" }}
            >
              My items
            </Typography>
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
};
