import React from "react";
import { IconNames, icons } from "../lib/icon";

interface IconProps {
  icon: IconNames;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <svg viewBox="0 0 1024 1024" width="20px" height="20px">
      <path d={icons[icon]} />
    </svg>
  );
};

export default Icon;
