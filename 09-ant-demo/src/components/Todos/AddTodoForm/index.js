import React from "react";
import { Form, Icon, Row, Col, Button, Input } from "antd";

import "./styles.scss";

const AddTodoForm = ({ form, onFormSubmit }) => {
  const { getFieldDecorator } = form;

  // form submit handler
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, todo) => {
      if (!err) {
        // resetting form fields
        form.resetFields();

        // submitting our form
        onFormSubmit(todo.name);
      }
    });
  };

  return (
    <Form
      onSubmit={e => handleSubmit(e)}
      layout="horizontal"
      className="todo-form"
    >
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please, type in the todo name."
                }
              ]
            })(
              <Input
                prefix={<Icon type="tags" className="icon" />}
                placeholder="What needs to be done?"
                spellCheck={false}
              />
            )}
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <Icon type="plus-circle" />
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Form.create({ name: "AddTodoForm" })(AddTodoForm);
