import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import React from "react";

export const DiscoverMore = () => {
  return (
    <Box>
      <Card sx={{ variant: "body2", marginLeft: "40px", marginTop: "30px" }}>
        <CardContent>
          <Typography>
            <Link
              to=""
              sx={{
                textDecoration: "none",
                marginRight: "227px",
                fontWeight: "bold",
              }}
            >
              Groups
            </Link>
          </Typography>
          <Typography>
            <Link
              to=""
              sx={{
                textDecoration: "none",
                marginRight: "230px",
                fontWeight: "bold",
              }}
            >
              Events
            </Link>
          </Typography>
          <Typography>
            <Link
              to=""
              sx={{
                textDecoration: "none",
                marginRight: "140px",
                fontWeight: "bold",
              }}
            >
              Followed Hashtags
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DiscoverMore;
