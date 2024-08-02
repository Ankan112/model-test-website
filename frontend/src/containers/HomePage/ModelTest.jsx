import { Button, Image, Tag } from "antd";
import Link from "next/link";
import React from "react";

const ModelTest = () => {
  const courses = [
    {
      id: 1,
      courseTitle: "B Unit Model Test",
      subjects: ["BAN", "ENG", "GK"],
      image: "demourl.com",
      unit: "B",
      price: 400,
    },
    {
      id: 2,
      courseTitle: "C Unit Model Test",
      subjects: ["BAN", "ENG", "ACC", "BOM", "MKT/FIN"],
      image: "demourl.com",
      unit: "C",
      price: 400,
    },
  ];
  return (
    <div className="main-container mt-14">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-center font-semibold text-2xl md:text-4xl mb-4 md:mb-8 ">
            Our Latest Model Test
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {courses?.map((item) => {
              const { id, courseTitle, subjects, price } = item || {};
              return (
                <div
                  key={id}
                  className=" text-gray-700 bg-white border border-solid  border-gray-200 shadow-md rounded-xl "
                >
                  <div className="px-6 pt-6 pb-4">
                    <Image
                      preview={false}
                      className="border border-solid border-gray-200 "
                      src={"/pic.png"}
                      alt="Course_Image"
                    />
                    <div className="flex justify-between items-center">
                      <h5 className="block my-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {courseTitle}
                      </h5>
                      <Link
                        className="text-black no-underline hover:underline"
                        href={"/purchase"}
                      >
                        <p>TK {price}</p>
                      </Link>
                    </div>
                    <div>
                      <div>
                        {subjects?.map((item, index) => (
                          <Tag key={index} color="success">
                            {item}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`model-test/${id}`}>
                      <Button type="primary" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelTest;
