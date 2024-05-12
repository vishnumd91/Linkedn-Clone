import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

const PostDisplayContainer = styled(Box)(() => ({
  paddingTop: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1em",
}));

export const PostDisplay = ({ feedData }) => {
  return (
    <PostDisplayContainer>
      {feedData?.map((feed) => {
        const { first_name: firstName, last_name: lastName } = feed?.user;
        return (
          <Card key={feed?.id}>
            {/* Card Header */}
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: "red" }}
                  aria-label="feed"
                  src={feed?.user?.profile_image.large}
                />
              }
              title={`${firstName} ${lastName}`}
              subheader="Associate Analyst at MNC"
            />
            {/* Card Desc */}
            <CardContent>
              <Typography component="p" variant="body2" color="text.secondary">
                {feed?.alt_description}
              </Typography>
            </CardContent>
            {/* Card Image */}
            <CardMedia
              component="img"
              height="400"
              image={feed?.urls?.regular}
              alt={feed?.alt_description}
              sx={{ objectFit: "cover" }}
              loading="lazy"
            />
            {/* Reaction Counter */}
            <Box>
              <Typography component="span" sx={{ textAlign: "left" }}>
                5344
              </Typography>
              <Typography component="span" sx={{ textAlign: "right" }}>
                73 comments
              </Typography>
              .
              <Typography component="span" sx={{ textAlign: "right" }}>
                73 comments
              </Typography>
            </Box>
            {/* Likes and Comment Creation */}
            <Card>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <p>Like</p>
                <p>Comment</p>
                <p>Repost</p>
                <p>Send</p>
              </CardContent>
            </Card>
          </Card>
        );
      })}
    </PostDisplayContainer>
  );
};
