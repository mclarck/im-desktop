import React from "react";
import "./style.scss";
import { HiShoppingBag } from "react-icons/hi";
import { FaCheck, FaUserClock } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

export function TimelineItem({
  children,
  date,
  title,
  subtitle,
  Icon,
  status,
}: {
  children: any;
  date: string;
  title: string;
  subtitle?: string;
  Icon?: any;
  status: "sending" | "active" | "completed" | "canceled";
}) {
  function renderIcon(status: any) {
    switch (status) {
      case "sending":
        return <MdDirectionsBike />;
      case "active":
        return <FaUserClock />;
      case "completed":
        return <FaCheck />;
      default:
        return <HiShoppingBag />;
    }
  }
  return (
    <div className={`item ${status}`}>
      <div className={`icon`}>{Icon ? <Icon /> : renderIcon(status)}</div>
      <div className={"date"}>{date}</div>
      <div className={"header"}>
        <div className={"title"}>{title}</div>
        {subtitle && <div className={"subtitle"}>{subtitle}</div>}
      </div>
      <div className={"content"}>{children}</div>
    </div>
  );
}

export default function Timeline({ children, status }: any) {
  return (
    <div className={`timeline ${status}`}>
      <div className={"items"}>{children}</div>
    </div>
  );
}
