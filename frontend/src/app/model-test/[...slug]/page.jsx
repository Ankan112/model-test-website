"use client";
import { Button, Card, Form, Radio, Tabs } from "antd";

const QuestionList = ({ params }) => {
  console.log(params);
  const [form] = Form.useForm();

  //   console.log(slug?.[1]);
  // const handleQuestionChange = (e) => {
  //   setSelectOption(!selectOption);
  //   console.log(e.target.value, e);
  // };
  const data = {
    title: "Model Test One",
    id: 1,
    time: "60 min",
    unit: "B",
    subjects: [
      {
        subject_id: 1,
        subject_name: "BANGLA",
        total_question: 15,
        questions: [
          {
            question_id: 1,
            question: "কোনটি ভার্চুয়াল রিয়েলিটিতে ব্যবহৃত হয়?",
            options: [
              {
                option_id: 1,
                option: "A. ত্রি-মাত্রিক সিমুলেশন",
              },
              {
                option_id: 2,
                option: "B. দ্বি-মাত্রিক সিমুলেশন",
              },
              {
                option_id: 3,
                option: "C. হ্যান্ড জিওমেট্রি",
              },
              {
                option_id: 4,
                option: "D. বায়োলজিক্যাল ডেটা",
              },
            ],
          },
          {
            question_id: 2,
            question: "কৃত্রিম বুদ্ধিমত্তা প্রধানত কোথায় ব্যবহৃত হয়?",
            options: [
              {
                option_id: 1,
                option: "A. বায়োমেট্রিক",
              },
              {
                option_id: 2,
                option: "B. বায়োইনফরমেটিক্স",
              },
              {
                option_id: 3,
                option: "C. রোবটিক্স",
              },
              {
                option_id: 4,
                option: "D. ন্যানো টেকনোলোজি",
              },
            ],
          },
          {
            question_id: 3,
            question: "রোবট গঠনে কয়টি নির্দিষ্ট বিশেষত্ব রয়েছে?",
            options: [
              {
                option_id: 1,
                option: "A. ২",
              },
              {
                option_id: 2,
                option: "B. ৩",
              },
              {
                option_id: 3,
                option: "C. ৪",
              },
              {
                option_id: 4,
                option: "D. ৫",
              },
            ],
          },
          {
            question_id: 4,
            question:
              "মি. শাজাহান সরকার তার একটি ছাত্রকে রোল নম্বর জিজ্ঞাসা করায় সে বলল তার রোল বাইনারিতে 1101 উদ্দীপকের বাইনারি নম্বরের সাথে (1001)2 যোগ করলে তার যোগফল কত হবে?",
            options: [
              {
                option_id: 1,
                option: "A. 10110",
              },
              {
                option_id: 2,
                option: "B. 01100",
              },
              {
                option_id: 3,
                option: "C. 10010",
              },
              {
                option_id: 4,
                option: "D. 11110",
              },
            ],
          },
          {
            question_id: 5,
            question: "ওয়েবপেজ আপলোড করার জন্য কোন সফটওয়্যার প্রয়োজন?",
            options: [
              {
                option_id: 1,
                option: "A. Programming Language ",
              },
              {
                option_id: 2,
                option: "B. FTP",
              },
              {
                option_id: 3,
                option: "C. HTTP",
              },
              {
                option_id: 4,
                option: "D. PHP",
              },
            ],
          },
        ],
      },
      {
        subject_id: 2,
        subject_name: "ENGLISH",
        total_question: 15,
        questions: [
          {
            question_id: 1,
            question: "“There is ____ on the roads today”.",
            options: [
              {
                option_id: 1,
                option: "A. too many traffic jams",
              },
              {
                option_id: 2,
                option: "B. very much traffic",
              },
              {
                option_id: 3,
                option: "C. too much traffic jams",
              },
              {
                option_id: 4,
                option: "D. few traffics",
              },
            ],
          },
          {
            question_id: 2,
            question: "There is really no difference between you and_____.",
            options: [
              {
                option_id: 1,
                option: "A. I",
              },
              {
                option_id: 2,
                option: "B. we",
              },
              {
                option_id: 3,
                option: "C. them",
              },
              {
                option_id: 4,
                option: "D. me",
              },
            ],
          },
          {
            question_id: 3,
            question: "Helen learned to read and write quite ____ in her life.",
            options: [
              {
                option_id: 1,
                option: "A. lately",
              },
              {
                option_id: 2,
                option: "B. late",
              },
              {
                option_id: 3,
                option: "C. latter",
              },
              {
                option_id: 4,
                option: "D. latest",
              },
            ],
          },
          {
            question_id: 4,
            question:
              "Not until a student has mastered algebra, ____ the principles of geometry, trigonometry and physics.",
            options: [
              {
                option_id: 1,
                option: "A. He can begin to understand",
              },
              {
                option_id: 2,
                option: "B. can be begin to understand",
              },
              {
                option_id: 3,
                option: "C. he begins to understand",
              },
              {
                option_id: 4,
                option: "D. begins to understand",
              },
            ],
          },
          {
            question_id: 5,
            question: "____, but also it filters out harmful sun rays.",
            options: [
              {
                option_id: 1,
                option: "A. The atmosphere gives us air to breathe",
              },
              {
                option_id: 2,
                option: "B. Not only the atmosphere gives us air to breathe",
              },
              {
                option_id: 3,
                option: "C. The atmosphere which gives us air to breathe",
              },
              {
                option_id: 4,
                option:
                  "D. Not only does the atmosphere give us air to breathe",
              },
            ],
          },
        ],
      },
      {
        subject_id: 3,
        subject_name: "GK",
        total_question: 15,
        questions: [
          {
            question_id: 1,
            question:
              "কোন ওয়েব স্ট্রাকচারে ওয়েব পেইজগুলো পরস্পরের সাথে যুক্ত থাকে?",
            options: [
              {
                option_id: 1,
                option: "A. লিনিয়ার",
              },
              {
                option_id: 2,
                option: "B. টি",
              },
              {
                option_id: 3,
                option: "C. হাইব্রিড",
              },
              {
                option_id: 4,
                option: "D. ওয়েব লিংকড",
              },
            ],
          },
          {
            question_id: 2,
            question:
              "সারা বিশ্বের সকল আইপি এড্রেস ও ডোমেইন নেম নিয়ন্ত্রণ করে কোন প্রতিষ্ঠান?",
            options: [
              {
                option_id: 1,
                option: "A. MICROSOFT",
              },
              {
                option_id: 2,
                option: "B. ICANN",
              },
              {
                option_id: 3,
                option: "C. GOOGLE",
              },
              {
                option_id: 4,
                option: "D. YAHOO",
              },
            ],
          },
          {
            question_id: 3,
            question: "ট্যাগ কী?",
            options: [
              {
                option_id: 1,
                option: "A. বিশেষ সিনটেক্স",
              },
              {
                option_id: 2,
                option: "B. এক ধরনের প্রোগ্রাম",
              },
              {
                option_id: 3,
                option: "C. ওয়েবভিত্তিক সার্ভার",
              },
              {
                option_id: 4,
                option: "D. বিশেষ ডকুমেন্ট",
              },
            ],
          },
          {
            question_id: 4,
            question: "ওয়েবপেজ তৈরিতে ব্যবহৃত আবশ্যক ট্যাগ কোনটি?",
            options: [
              {
                option_id: 1,
                option: "A. <html>............</html>",
              },
              {
                option_id: 2,
                option: "B. <a href = 'URL'>..... </a>",
              },
              {
                option_id: 3,
                option: "C. <font face='Sutony MJ'……….. </font>",
              },
              {
                option_id: 4,
                option: "D. <Img Sre = 'Board JPg' width='100' hight='100'/>",
              },
            ],
          },
          {
            question_id: 5,
            question:
              "ব্রাউজার যদি কোনো কারণে ইমেজ, লোড করতে ব্যর্থ হয় তখন ইমেজের পরিবর্তে কোনো টেক্সট প্রদর্শনের জন্য ব্যবহৃত অ্যাট্রিবিউট কোনটি?",
            options: [
              {
                option_id: 1,
                option: "A. title",
              },
              {
                option_id: 2,
                option: "B. align",
              },
              {
                option_id: 3,
                option: "C. src",
              },
              {
                option_id: 4,
                option: "D. alt",
              },
            ],
          },
        ],
      },
    ],
  };
  const finalAns = [
    {
      subject: "BANGLA",
      total_question: 5,
      ans: [
        {
          question: "কোনটি ভার্চুয়াল রিয়েলিটিতে ব্যবহৃত হয়?",
          ans: "A. ত্রি-মাত্রিক সিমুলেশন",
        },

        {
          question: "কৃত্রিম বুদ্ধিমত্তা প্রধানত কোথায় ব্যবহৃত হয়?",
          ans: "B. বায়োইনফরমেটিক্স",
        },

        { question: "রোবট গঠনে কয়টি নির্দিষ্ট বিশেষত্ব রয়েছে?", ans: "D. ৫" },

        {
          question:
            "মি. শাজাহান সরকার তার একটি ছাত্রকে রোল নম্বর জিজ্ঞ…ি নম্বরের সাথে (1001)2 যোগ করলে তার যোগফল কত হবে?",
          ans: "C. 10010",
        },

        {
          question: "ওয়েবপেজ আপলোড করার জন্য কোন সফটওয়্যার প্রয়োজন?",
          ans: "C. HTTP",
        },
      ],
    },
    {
      subject: "ENGLISH",
      total_question: 5,
      ans: [
        {
          question: "“There is ____ on the roads today”.",
          ans: "C. too much traffic jams",
        },

        {
          question: "There is really no difference between you and_____.",
          ans: "D. me",
        },

        {
          question: "Helen learned to read and write quite ____ in her life.",
          ans: "A. lately",
        },

        {
          question:
            "Not until a student has mastered algebra, ____ the principles of geometry, trigonometry and physics.",
          ans: "C. he begins to understand",
        },
        {
          question: "____, but also it filters out harmful sun rays.",
          ans: "D. Not only does the atmosphere give us air to breathe",
        },
      ],
    },
    {
      subject: "GK",
      total_question: 5,
      ans: [
        {
          question:
            "কোন ওয়েব স্ট্রাকচারে ওয়েব পেইজগুলো পরস্পরের সাথে যুক্ত থাকে?",
          ans: "C. হাইব্রিড",
        },

        {
          question:
            "সারা বিশ্বের সকল আইপি এড্রেস ও ডোমেইন নেম নিয়ন্ত্রণ করে কোন প্রতিষ্ঠান?",
          ans: "A. MICROSOFT",
        },

        { question: "ট্যাগ কী?", ans: "D. বিশেষ ডকুমেন্ট" },

        {
          question: "ওয়েবপেজ তৈরিতে ব্যবহৃত আবশ্যক ট্যাগ কোনটি?",
          ans: "D. <Img Sre = 'Board JPg' width='100' hight='100'/>",
        },

        {
          question:
            "ব্রাউজার যদি কোনো কারণে ইমেজ, লোড করতে ব্যর্থ হয় …েক্সট প্রদর্শনের জন্য ব্যবহৃত অ্যাট্রিবিউট কোনটি?",
          ans: "D. alt",
        },
      ],
    },
  ];

  const handleOnFinish = (value) => {
    const result = data.subjects.map((item) => {
      return {
        subject: item?.subject_name,
        total_question: item?.questions.length,
        ans: item?.questions?.map((singleQuestion) => {
          return {
            question: singleQuestion?.question,
            ans: value[singleQuestion?.question],
          };
        }),
      };
    });
    // console.log(data.subjects);
    // console.log(result);

    const fintal = finalAns?.map((item) => {
      let not_answer = 0;
      let right_answer = 0;
      let wrong_answer = 0;
      result?.map((it) => {
        if (item.subject === it.subject) {
          item?.ans.map((res, index) => {
            if (it?.ans[index]?.ans === undefined) {
              not_answer = not_answer + 1;
            } else if (res.ans === it?.ans[index]?.ans) {
              right_answer = right_answer + 1;
            } else if (res.ans !== it?.ans[index]?.ans) {
              wrong_answer = wrong_answer + 1;
            }
          });
        }
      });
      let total_score = right_answer - wrong_answer * 0.25;
      return {
        subject_name: item?.subject,
        total_question: item?.total_question,
        total_score,
        right_answer,
        wrong_answer,
        not_answer,
      };
    });
    console.log(fintal);
  };
  const as = {
    question_1: "hello1d",
    question_2: "hello2d",
    question_3: "hello32",
    question_4: undefined,
  };
  const ans = {
    question_1: "hello1",
    question_2: "hello2",
    question_3: "hello3",
    question_4: "hello3",
  };
  let notAns = 0;
  let rightAns = 0;
  let wrongAns = 0;

  for (const key in as) {
    if (as[key] === undefined) {
      notAns = notAns + 1;
    } else if (as[key] === ans[key]) {
      rightAns = rightAns + 1;
    } else {
      wrongAns = wrongAns + 1;
    }
    // console.log(as[key]);
  }
  //   console.log({ notAns, wrongAns, rightAns });

  let score = rightAns - wrongAns * 0.25;
  //   console.log({ score });
  // const handleOk = (e) => {
  //   setOpen(false);
  //   console.log(e);
  // };
  // const handleCancel = (e) => {
  //   router.replace(navigate.slice(0, navigate.length - 2));

  //   console.log(e);
  // };

  //   console.log(data.subjects);
  return (
    <>
      {/* <div>
        <Modal
          open={open}
          closeIcon={false}
          onCancel={handleCancel}
          onOk={handleOk}
          title="hello"
        >
          Hello
        </Modal>
      </div> */}
      <div className="">
        <div className="relative mb-20 z-10">
          <div className="px-3 py-2 fixed w-full top-0 mb-5 bg-yellow-700 text-white flex justify-between items-center  ">
            <div>
              <h5 className="">{data.title}</h5>
              <p>Total Answered : 14</p>
              <p>Time Left: {data.time}</p>
            </div>
            <div>
              <Button type="primary" size="small">
                Submit Exam
              </Button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="main-container">
            <Form
              layout="vertical"
              form={form}
              onFinish={handleOnFinish}
              initialValues={{ Hello: "C" }}
            >
              <Tabs
                defaultActiveKey="1"
                type="line"
                items={data?.subjects?.map((item, index) => {
                  const { subject_name, questions } = item || {};
                  return {
                    key: `${index + 1}`,
                    label: subject_name,
                    children: questions?.map((question, index) => {
                      const {
                        question: questionTitle,
                        question_id,
                        options,
                      } = question || {};
                      // console.log(options[1].option);
                      return (
                        <Form.Item key={question_id} name={questionTitle}>
                          <Card
                            size="small"
                            title={`${index + 1}. ${questionTitle}`}
                            className="mb-1 w-full"
                          >
                            <Radio.Group
                              name="q-1"
                              buttonStyle="solid"
                              className="w-full"
                              // defaultValue={options[1].option}
                              // optionType="button"
                            >
                              {options?.map((item) => (
                                <Radio
                                  key={item?.option_id}
                                  className={`w-full rounded mb-2`}
                                  value={item?.option}
                                  onChange={(e) => console.log(e.target.value)}
                                >
                                  {item?.option}
                                </Radio>
                              ))}
                            </Radio.Group>
                          </Card>
                        </Form.Item>
                      );
                    }),
                  };
                })}
              />
              <Form.Item>
                <Button type="primary" className="w-full" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
