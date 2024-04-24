"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <AntdRegistry>{children}</AntdRegistry>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
