import Link from "next/link";

const ModelTestDetails = ({ params }) => {
  const { slug } = params;

  console.log(params);
  console.log(slug);
  const data = [
    {
      id: 1,
      title: "Model Test One",
      question: 60,
      time: "60 Min",
      lock: true,
      token: true,
    },
    {
      id: 2,
      title: "Model Test Two",
      question: 60,
      time: "60 Min",
      lock: true,
      token: true,
    },
    {
      id: 3,
      title: "Model Test Three",
      question: 60,
      time: "60 Min",
      lock: false,
      token: true,
    },
  ];
  return (
    <div className="main-container ">
      <div className="px-6 py-4 rounded-md mt-2 mb-5 bg-pink-700 text-white">
        <h2>C unit Model Test</h2>
        <p>Total Model Test : 12</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item) => (
          <Link
            className="no-underline text-black cursor-pointer"
            key={item?.id}
            href={`${
              item?.token === true
                ? `/model-test/${slug}/${
                    item?.lock === false ? `${item?.id}` : ""
                  }`
                : "/login"
            }`}
          >
            <div
              className={`shadow-lg rounded-md ${
                item?.token === true
                  ? `${item?.lock === false ? "bg-green-600" : "bg-blue-700"}`
                  : "bg-gray-400"
              } text-white py-3 px-4 flex justify-between items-center`}
            >
              <div>
                <h6>{item?.title}</h6>
                <div className="flex mt-1 text-sm">
                  <p>Questions {item?.question}</p>
                  <p className="ml-5">Time {item?.time}</p>
                </div>
              </div>
              <div>lock icon</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModelTestDetails;
