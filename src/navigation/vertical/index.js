import { Mail, Home } from "react-feather";

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page",
  },
  {
    id: "ready",
    title: "Ready",
    icon: <Mail size={20} />,
    navLink: "/tables/ready",
  },
  {
    id: "rejectedTable",
    title: "RejectedTable",
    icon: <Mail size={20} />,
    navLink: "/tables/rejectedTable",
  },
  {
    id: "preparing",
    title: "Preparing",
    icon: <Mail size={20} />,
    navLink: "/tables/preparing",
  },
  {
    id: "pendingTable",
    title: "PendingTable",
    icon: <Mail size={20} />,
    navLink: "/tables/pendingTable",
  },
  {
    id: "dispach",
    title: "Dispach",
    icon: <Mail size={20} />,
    navLink: "/tables/dispach",
  },
  {
    id: "delevered",
    title: "Delevered",
    icon: <Mail size={20} />,
    navLink: "/tables/delevered",
  },
  {
    id: "accepted",
    title: "Accepted",
    icon: <Mail size={20} />,
    navLink: "/tables/accepted",
  },
];
