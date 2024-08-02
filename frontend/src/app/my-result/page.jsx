import Navbar from "@/components/Shared/NavBar";
import MyResultTable from "@/components/UI/MyResultTable";
import { Card } from "antd";

const MyResult = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Card title="My Result " className="mt-10">
          <MyResultTable />
          <p className="italic mt-2 text-red-400">
            Note : You must ensure 10 marks in Gk otherwise you will be failed.
          </p>
        </Card>
      </div>
    </>
  );
};

export default MyResult;
