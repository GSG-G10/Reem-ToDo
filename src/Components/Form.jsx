import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

function MyForm() {
  const [value, setValue] =useState("");
  const [Items, setItems] =useState([]);
  const addItem = () => {
    const item = {
      id: Items.length + 1,
      description: value,
    };
    setItems([...Items, item]);
  };
  const deleteItem = (item) => {
    const { id } = item.item;
    const newItems = Items.filter((ele) => ele.id !== id);
    setItems([...newItems]);
  };
  return (
    <div className="myform">
      <Form name="basic" autoComplete="off" onSubmit={addItem}>
        <Form.Item
          label=""
          name="task"
          rules={[{ required: true, message: "Please input your new task!" }]}
        >
          <Input
            onChange={(event) => setValue(event.target.value)}
            name="name"
            id="name"
            placeholder="Enter your task"
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" onClick={addItem}>
            Add Task
          </Button>
        </Form.Item>
      </Form>
      <div className='list'>
        <ul>
          {Items.map((item) => {
            return (
              <li key={item.id}>
                <div className="item">
                  <span> {item.description}</span>{" "}
                  <span className="close" onClick={() => deleteItem({ item })}>
                    x{" "}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MyForm;
