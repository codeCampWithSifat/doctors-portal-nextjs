"use client";

import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const { Header } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

const Navbar = ({
  items,
}: {
  items: { key: string; label: string; href: string }[];
}) => {
  const pathname = usePathname();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Content>
          <Title level={3} className="text-white p-2 m-2">
            Doctors Portal
          </Title>
        </Content>
        <Menu
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
      </Header>
    </Layout>
  );
};

export default Navbar;
