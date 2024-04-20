import { Spin } from "antd";
const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default loading;
