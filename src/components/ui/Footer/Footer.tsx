import { Footer } from "antd/es/layout/layout";
import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <Footer style={{ textAlign: "center" }}>
        All Right Reserved ©{new Date().getFullYear()}{" "}
        sayedhossainsifat100@gmail.com
      </Footer>
    </div>
  );
};

export default FooterComponent;
