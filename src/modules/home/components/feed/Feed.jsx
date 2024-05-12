import styled from "@emotion/styled";
import { Box, Container, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import PostCreation from "./post-creation/PostCreation";
import { fetchFeedData } from "../../../../services";
import { PostDisplay } from "./post-display";

const FeedContainer = styled(Container)(() => ({
  flex: "0.60",
  height: "100%",
  overflow: "hidden",
  paddingTop: "1rem",
}));

const DividerBox = styled(Box)(() => ({
  marginTop: "10px",
  position: "relative",
  width: "100%",
}));
export const Feed = () => {
  const [feedData, setFeedData] = useState([]);

  const fetchFeedResults = async () => {
    const response = await fetchFeedData();
    setFeedData([...response]);
  };

  useEffect(() => {
    fetchFeedResults();
  }, []);

  return (
    <>
      <FeedContainer>
        {/* Posting Section */}
        <PostCreation />
        {/* Divider */}
        <DividerBox>
          <div>
            <Divider />
            {/* SortBy: Top */}
          </div>
        </DividerBox>
        {/* Posts */}
        <PostDisplay feedData={feedData} />
      </FeedContainer>
    </>
  );
};
