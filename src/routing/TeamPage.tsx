import React from "react";
import { BlockFooter } from "../components/BlockFooter";
import { BlockTeamGrid } from "../components/BlockTeamGrid";
import { Navigationbar } from "../components/Navigationbar";

const TeamPage: React.FC = () => {
  return (
    <>
      <Navigationbar />
      <BlockTeamGrid />
      <BlockFooter />
    </>
  );
};
export default TeamPage;
