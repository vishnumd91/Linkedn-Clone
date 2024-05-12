import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";

const RightSideContainer = styled(Container)(() => ({
  flex: "0.15",
  height: "100%",
  overflow: "hidden",
  paddingTop: "1rem",
}));

export const RightSidebar = () => {
  return (
    <>
      <RightSideContainer>
        {/* Right Side Contents should go here */}
      </RightSideContainer>
    </>
  );
};
