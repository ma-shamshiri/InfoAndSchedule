import { FaVolleyballBall } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { MdScoreboard } from "react-icons/md";

export const navigationLinks = [
  {
    name: "Information",
    subLinks: [
      {
        name: "Information",
        description: "tedSubLabel",
        link: "/",
        color: "red",
        icon: <FaVolleyballBall size="25px" color="white" />,
      },
    ],
  },
  {
    name: "Schedule",
    subLinks: [
      {
        name: "Schedule",
        description: "dateAndTimeSubtitle",
        link: "/event",
        color: "#be02cc",
        icon: <GrSchedule size="25px" color="white" />,
      },
    ],
  },
  {
    name: "Live Scores",
    link: "/team",
    subLinks: [
      {
        name: "Live Scores",
        description: "teamSubtitle",
        link: "/team",
        color: "#02db8c",
        icon: <MdScoreboard size="25px" color="white" />,
      },
    ],
  },
];
