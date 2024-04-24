"use client";

import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useAppDispatch } from "@/redux/hooks";
import { showSidebarDrawer } from "@/redux/slices/sidebarSlice";
import { signOut, useSession } from "next-auth/react";

const { Header } = Layout;

const Navbar = ({
  items,
}: {
  items: { key: string; label: string; href: string }[];
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const session = useSession();
  // console.log(session, "Navbar Session");
  return (
    <Layout className="layout">
      <Header className="flex items-center">
        <Content className="flex">
          <Button
            onClick={() => dispatch(showSidebarDrawer())}
            type="primary"
            className="lg:hidden mx-3 mt-2"
          >
            <MenuOutlined />
          </Button>
          <Link href={"/"}>
            <Title level={3} className="text-white">
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
          {session.status === "authenticated" ? (
            <Button type="primary" onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button type="primary">Login</Button>
          )}
        </Menu>
        <Button onClick={showDrawer} type="primary" className="lg:hidden">
          <MenuOutlined />
        </Button>

        <Drawer
          className="lg:hidden"
          title="Menus"
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
            {session.status === "authenticated" ? (
              <Button type="primary">Logout</Button>
            ) : (
              <Button>Login</Button>
            )}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
