"use client";

import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: { key: string; label: string; href: string }[];
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Content>
          <Link href={"/"}>
            <Title level={3} className="text-white ">
              Doctors Portal
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          theme="dark"
          mode="horizontal"
          //   defaultSelectedKeys={["2"]}
          selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
        >
          {items?.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>

        <Drawer
          className="lg:hidden"
          title="Menu"
          onClose={onClose}
          open={open}
        >
          <Menu
            disabledOverflow
            theme="light"
            mode="vertical"
            //   defaultSelectedKeys={["2"]}
            selectedKeys={[items.find((item) => item.href === pathname)?.key!]}
          >
            {items?.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
