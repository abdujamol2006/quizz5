import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Flex } from "antd";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      <footer>
        <a href="https://t.me/MixedMavzular" target="_blank">
          Telegram channel
        </a>{" "}
        |
        <a href="https://t.me/Developer0203" target="_blank">
          Contact me
        </a>
      </footer>
    </>
  );
}

export default MainLayout;
