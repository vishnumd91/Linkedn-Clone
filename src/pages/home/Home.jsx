import { HomeComponent } from "../../modules/home";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  margin: "auto",
  overflow: "hidden",
  backgroundColor: "#f3f2ee",
}));

const Home = () => {
  return (
    <>
      <StyledBox>
        <HomeComponent />
      </StyledBox>
    </>
  );
};

export default Home;
