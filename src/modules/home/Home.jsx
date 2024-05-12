import { Box, Container } from "@mui/material";
import { Navbar } from "../../layout";
import styled from "@emotion/styled";
import { Feed, LeftSidebar, RightSidebar } from "./components";

const ParentFeedContainer = styled(Container)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  // gap: "1em",
  paddingTop: "1rem",
  overflow: "hidden",
}));

const MainPageBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));

export const HomeComponent = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* Parent Container for the Entire Feed Page */}
      <MainPageBox>
        <ParentFeedContainer>
          {/* Left Sidebar */}
          <LeftSidebar />
          {/* Feed */}
          <Feed />
          {/* Right Sidebar */}
          <RightSidebar />
        </ParentFeedContainer>
      </MainPageBox>
    </>
  );
};
