import React from "react";
import { BlockEvent } from "../components/BlockEvent";
import { BlockFooter } from "../components/BlockFooter";
import { Navigationbar } from "../components/Navigationbar";

const EventPage: React.FC = () => {

  return (
    <>
      <Navigationbar />
      <BlockEvent />
      <BlockFooter />
    </>
  );
};
export default EventPage;
