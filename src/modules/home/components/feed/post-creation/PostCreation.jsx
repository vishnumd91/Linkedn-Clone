import {
  Avatar,
  Box,
  Card,
  FormControl,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import StrollerOutlinedIcon from "@mui/icons-material/StrollerOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { grey } from "@mui/material/colors";

const PostBox = styled(Box)(() => ({
  width: "100%",
  height: "9em",
  overflow: "hidden",
}));
const PostCreation = () => {
  return (
    <>
      <PostBox>
        <Card sx={{ height: "inherit" }}>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ bgcolor: grey[300], color: "black", marginRight: "20px" }}
            >
              MJ
            </Avatar>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                sx={{ borderRadius: "40px" }}
                placeholder="Start a Post"
              />
            </FormControl>
          </Box>
          {/* Media Posting Section */}
          <Box sx={{ display: "flex", width: "90px" }}>
            <Avatar sx={{ display: "flex", color: "blue", bgcolor: "white" }}>
              <InsertPhotoOutlinedIcon
                sx={{ width: "290px", fontSize: "30px" }}
              />
            </Avatar>
            <Typography sx={{ display: "flex", marginTop: "10px" }}>
              Photo
            </Typography>
            <Avatar sx={{ display: "flex", color: "blue", bgcolor: "white" }}>
              <VideocamOutlinedIcon
                sx={{ width: "290px", fontSize: "40px", color: "green" }}
              />
            </Avatar>
            <Typography sx={{ display: "flex", marginTop: "10px" }}>
              Photo
            </Typography>
            <Avatar sx={{ display: "flex", color: "blue", bgcolor: "white" }}>
              <StrollerOutlinedIcon
                sx={{ width: "290px", fontSize: "40px", color: "purple" }}
              />
            </Avatar>
            <Typography sx={{ display: "flex", marginTop: "10px" }}>
              Photo
            </Typography>
            <Avatar sx={{ display: "flex", color: "blue", bgcolor: "white" }}>
              <DescriptionOutlinedIcon
                sx={{ width: "290px", fontSize: "30px", color: "red" }}
              />
            </Avatar>
            <Typography sx={{ display: "flex", marginTop: "10px" }}>
              Photo
            </Typography>
          </Box>
        </Card>
      </PostBox>
    </>
  );
};

export default PostCreation;
