import { Button } from "antd";

const SubmitButton = ({ loading, label, icon, onClick, style }) => {
  return (
    <Button
      style={style}
      onClick={onClick}
      type="primary"
      htmlType="submit"
      loading={loading}
      icon={icon}
    >
      {label || "Submit"}
    </Button>
  );
};

export default SubmitButton;
