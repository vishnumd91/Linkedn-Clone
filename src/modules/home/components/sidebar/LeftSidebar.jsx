import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import DiscoverMore from "./DiscoverMore";
import { ProfileCard } from "./ProfileCard";

const LeftSideContainer = styled(Container)(() => ({
  flex: "0.25",
  height: "100%",
  overflow: "hidden",
  paddingTop: "1rem",
}));

export const LeftSidebar = () => {
  return (
    <>
      <LeftSideContainer>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* Profile Card */}
          <ProfileCard />
          {/* Discover More */}
          <DiscoverMore />
        </Box>
      </LeftSideContainer>
    </>
  );
};
