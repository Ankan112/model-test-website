"use client";
import { Col, Form, Row, Input, Card, message } from "antd";

import React, { useEffect } from "react";
import {
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SubmitButton from "@/components/Shared/Button";
import { useLoginMutation } from "@/redux/user/userApi";
import { useRouter } from "next/navigation";
import { saveToLocalStorage } from "@/utils/localStorage";

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [login, { data: loginData, isError, isLoading, isSuccess }] =
    useLoginMutation();
  const onFinish = (values) => {
    console.log(values);
    login(values);
  };
  useEffect(() => {
    if (isSuccess) {
      message.success("Login Successful!");
      if (loginData?.data?.accessToken) {
        saveToLocalStorage("accessToken", loginData?.data?.accessToken);
        saveToLocalStorage("student-info", loginData?.data?.userData);
      }

      form.resetFields();
      router.push("/");
    }
  }, [isSuccess]);
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <Form name="login-form" layout="vertical" onFinish={onFinish}>
          <Row gutter={6}>
            <Col xs={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Enter Password"
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SubmitButton
                    //   loading={isLoading}
                    label="Login"
                    icon={<LoginOutlined />}
                    style={{ width: "100%" }}
                  />
                </div>
              </Form.Item>
            </Col>
            {/* <Divider style={{ marginTop: "0px", marginBottom: "10px" }} />
                  <Col xs={24}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "black" }}>
                        <Link to="/register">
                          {" "}
                          Don't have an account? Please Register{" "}
                        </Link>
                      </span>
                    </div>
                    <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ color: "black" }}>
                      <Link to="/forget-password"> Forget Password? </Link>
                    </span>
                  </div>
                  </Col> */}
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
