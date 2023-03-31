import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import RegisterDerivativeUtils from "./utils/RegisterDerivativeUtils";
import "./EditProfiles.scss";
import useEditProfiles from "./hooks/useEditProfiles";

const EditProfiles = () => {
  const [form] = Form.useForm();

  const { prefixSelector, formItemLayout, tailFormItemLayout, dateFormat } =
    RegisterDerivativeUtils(form);
  const { editProfiles, skipProfiles } = useEditProfiles(form);

  return (
    <PageContainer>
      <Row className="edit-profiles-row">
        <Form
          className="edit-profiles-form"
          {...formItemLayout}
          form={form}
          name="editprofiles"
          onFinish={editProfiles}
          initialValues={{ prefix: "86" }}
          scrollToFirstError
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { type: "email", message: "The input is not valid E-mail!" },
              { required: true, message: "Please input your E-mail!" },
            ]}
          >
            <Input placeholder="Please input your E-mail!" />
          </Form.Item>
          <Form.Item label="Real Name" name="realname" tooltip="Your name in the real world!">
            <Input placeholder="Please input your real name!" />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Select placeholder="Please select your gender!">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Phone Number" name="phonenumber">
            <Input
              addonBefore={prefixSelector}
              placeholder="Please input your phone number!"
            />
          </Form.Item>
          <Form.Item label="Birthday" name="birthday" rules={[{ type: "date" }]}>
            <DatePicker
              className="edit-profiles-date-picker"
              format={dateFormat}
              placeholder="Select your birthday!"
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              className="edit-profiles-skip-button"
              type="primary"
              onClick={skipProfiles}
            >
              <NavLink to={ROUTES.home}>Skip</NavLink>
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </PageContainer>
  );
};

export default EditProfiles;
