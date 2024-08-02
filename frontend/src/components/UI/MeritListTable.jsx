"use client";

import { Table } from "antd";
import React from "react";

const MeritListTable = () => {
  const data = {
    model_test_name: "Model Test One",
    unit: "B",
    merit_list: [
      {
        id: 1,
        name: "Rumana Parvin",
        score: 40.25,
        position: 1,
      },
      {
        id: 2,
        name: "Ratul",
        score: 40,
        position: 2,
      },
      {
        id: 3,
        name: "Sima",
        score: 38.75,
        position: 3,
      },
      {
        id: 4,
        name: "Moon",
        score: 38.75,
        position: 4,
      },
      {
        id: 5,
        name: "Siyam",
        score: 38,
        position: 5,
      },
      {
        id: 6,
        name: "Rafi",
        score: 37.25,
        position: 6,
      },
      {
        id: 7,
        name: "Munna",
        score: 35,
        position: 7,
      },
      {
        id: 8,
        name: "Rafiq",
        score: 34.75,
        position: 8,
      },
      {
        id: 9,
        name: "Partho",
        score: 34,
        position: 9,
      },
      {
        id: 10,
        name: "Lamia",
        score: 33.5,
        position: 10,
      },
    ],
  };
  return (
    <div>
      <Table
        bordered
        size="small"
        dataSource={data?.merit_list}
        scroll={{ x: true }}
        rowClassName={(record) => {
          if (record.position === 1) {
            return "merit-1";
          } else if (record.position === 2) {
            return "merit-2";
          } else if (record.position === 3) {
            return "merit-3";
          } else {
            return "merit-bg";
          }
        }}
        columns={[
          {
            key: "3",
            title: "Position",
            dataIndex: "position",
          },
          {
            key: "1",
            title: "Student Name",
            dataIndex: "name",
          },
          {
            key: "2",
            title: "Score",
            dataIndex: "score",
          },
        ]}
        pagination={false}
      />
    </div>
  );
};

export default MeritListTable;
