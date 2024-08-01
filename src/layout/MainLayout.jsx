import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Flex } from "antd";

function MainLayout() {
  return (
    <Flex gap={5}>
      <Navbar />
      <Outlet />
    </Flex>
  );
}

export default MainLayout;
