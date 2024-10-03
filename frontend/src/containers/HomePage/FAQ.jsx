"use client";

import SectionTitle from "@/components/Shared/SectionTitle";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "What is an Online Model Test?",
    children: (
      <p className="text-sm font-medium">
        An Online Model Test is a digital practice exam that simulates the
        format, structure, and difficulty of actual school or competitive exams.
        It helps students prepare for tests in subjects like Bangla and English
        by allowing them to practice in a realistic environment.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "How does the Online Model Test work?",
    children: (
      <p className="text-sm font-medium">
        Once you register or log in to the platform, you can choose the subject
        (Bangla or English), select the test type (mock, practice, timed), and
        begin the test. Each test consists of multiple-choice,
        fill-in-the-blank, and/or descriptive questions depending on the
        subject.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "How are the model tests scored?",
    children: (
      <p className="text-sm font-medium">
        Each test is automatically graded once you complete it. Multiple-choice
        and fill-in-the-blank questions are scored instantly, while descriptive
        answers (like essays) might require manual grading by a teacher or an
        algorithm.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Can I take the test in both Bangla and English?",
    children: (
      <p className="text-sm font-medium">
        Yes, you can take separate tests for both Bangla and English, as per
        your preference. Each test is designed to focus on the subject’s core
        areas to help you practice thoroughly.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "How can I access my results and feedback?",
    children: (
      <p className="text-sm font-medium">
        After completing the test, your score and detailed feedback will be
        available on your profile. The feedback includes areas of strength and
        weakness, with suggestions for improvement.
      </p>
    ),
    style: panelStyle,
  },
];

const FAQ = () => {
  const panelStyle = {
    marginBottom: 10,
    background: "#f2f2f2",
    borderRadius: "6px",
    fontWeight: "bold",
    // fontSize: "17px",
    border: "none",
  };
  return (
    <div className="main-container my-14">
      <SectionTitle
        title={"Frequently Asked Question (FAQ)"}
        des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ut."}
      />
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default FAQ;
