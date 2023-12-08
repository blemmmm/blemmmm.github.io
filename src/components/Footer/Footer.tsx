import React from "react";
import Logo from "@assets/blessly-white.svg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Typography } from "antd";

const Footer = () => {
  return (
    <footer className="h-[200px] px-40 pb-10 pt-6 bg-[#563156] mt-10">
      <div className="flex justify-between items-center h-full">
        <div className="hidden">
          <Typography.Text className="font-bold text-3xl my-3 text-white">
            Blessly Pera
          </Typography.Text>
          <div className="flex justify-between w-[200px]">
            <Link to="https://www.linkedin.com/in/blesslypera/" target="_blank">
              <Icon icon="mdi:linkedin" width={35} color="#ffffff" />
            </Link>
            <Link to="https://github.com/blemmmm" target="_blank">
              <Icon icon="mdi:github" width={35} color="#ffffff" />
            </Link>
            <Link to="https://www.instagram.com/blemmmm" target="_blank">
              <Icon icon="mdi:instagram" width={35} color="#ffffff" />
            </Link>
            <Link to="https://twitter.com/blemmmm" target="_blank">
              <Icon icon="mdi:twitter" width={35} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
