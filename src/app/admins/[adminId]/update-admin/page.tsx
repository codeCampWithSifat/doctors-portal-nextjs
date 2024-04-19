interface Props {
  params: {
    adminId: number;
  };
}

const UpdateAdmin = (props: Props) => {
  const { adminId } = props.params;
  return <div>UpdateAdmin For Admin User Compoenent : {adminId}</div>;
};

export default UpdateAdmin;
