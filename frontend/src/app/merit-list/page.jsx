import Navbar from "@/components/Shared/NavBar";
import MeritListTable from "@/components/UI/MeritListTable";
import { Card } from "antd";

const MeritList = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* <h1 className="text-center mt-10">My Result</h1> */}
        <Card title="Model Test One Merit List B Unit" className="mt-10">
          <MeritListTable />
        </Card>
      </div>
    </>
  );
};

export default MeritList;
