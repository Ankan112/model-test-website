"use client";
import { Table } from "antd";
import React from "react";

const MyResultTable = () => {
  const data = {
    result: [
      {
        id: 1,
        model_test_name: "Model Test One",
        status: "Passed",
        score: 42,
        bangla_total: 11,
        english_total: 10,
        gk_total: 21,
      },
      {
        id: 2,
        model_test_name: "Model Test Two",
        status: "Failed",
        score: 27,
        bangla_total: 10,
        english_total: 9,
        gk_total: 8,
      },
    ],
    subjects: ["BANGLA", "ENGLISH", "GK"],
  };
  return (
    <>
      <Table
        bordered
        size="small"
        dataSource={data.result}
        scroll={{ x: true }}
        rowKey={"id"}
        rowClassName={(record) =>
          record.status === "Failed" ? "my-result-fail" : ""
        }
        caption={
          <div className="my-2">
            <h4>Md. Rafi Hasan</h4>
            <h5>Unit B</h5>
          </div>
        }
        columns={[
          {
            key: "1",
            title: "Model Test Name",
            dataIndex: "model_test_name",
            //   className: "fail",
          },
          {
            key: "4",
            title: "Subjects",
            className: "fail",
            children: [
              // data.subjects?.map((item, index) => {
              //   console.log(item);
              //   return {
              //     key: `${index}`,
              //     title: item,
              //     dataIndex: "item",
              //   };
              // }),
              {
                key: "1",
                title: "Bangla",
                dataIndex: "bangla_total",
                //   className: "fail",
              },
              {
                key: "1",
                title: "English",
                dataIndex: "english_total",
              },
              {
                key: "1",
                title: "GK",
                dataIndex: "gk_total",
              },
            ],
          },
          {
            key: "3",
            title: "Score",
            dataIndex: "score",
          },
        ]}
        pagination={false}
      />
    </>
  );
};

export default MyResultTable;
