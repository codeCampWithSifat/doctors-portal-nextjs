import React from "react";

interface Props {
  params: {
    adminId: number;
  };
}

const AdminId = (props: Props) => {
  const { adminId } = props.params;
  return <div>AdminId Page For Admin : {adminId}</div>;
};

export default AdminId;
