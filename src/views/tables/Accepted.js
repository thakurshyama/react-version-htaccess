import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import "../../Css/Table.css"
import { createContext } from 'react';
const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

function SelectedTable() {
  const [modal, contextHolder] = Modal.useModal();
  const [status, setStatus] = useState("pending")

  const [isModalOpen, setIsModalOpen] = useState(false);


  const config = {
    title: 'User Details!',
    content: (
      <>
        <ReachableContext.Consumer>
          {(name) => `Reachable: ${name}!`}
        </ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>
          {(name) => `Unreachable: ${name}!`}
        </UnreachableContext.Consumer>
      </>
    ),
  };

  //ffvgbf

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(setStatus("accepted"));
  };
  const handleCancel = () => {
    setIsModalOpen(setStatus("rejected"));
  };

  const ColorChange = (currentStatus) => {
    switch (currentStatus) {
      case "rejected":
        return "red"
      case "accepted":
        return "green"
      default:
        return "orange"
    }
  }

  return (
    <div className="New">
      <h2 style={{ paddingLeft: "50px" }}>All Selected User</h2>
      <table>
        <tbody>
          <tr>
            <th style={{ fontSize: "18px" }}>OrderId</th>
            <th style={{ fontSize: "18px" }}>UserId</th>
            <th style={{ fontSize: "18px" }}>Payment</th>
            <th style={{ fontSize: "18px" }}>OutletId</th>
            <th style={{ fontSize: "18px" }}>Status</th>
            <th style={{ fontSize: "18px" }}>Active</th>
          </tr>
          <tr>
            <td>
              <Space>
                <p className='userinfo'
                  onClick={() => { modal.info(config) }}
                >UserInfo</p>
              </Space>
              {contextHolder}
            </td>
            <td>  <Space>
              <p className='userinfo'
                onClick={() => {
                  modal.info(config);
                }}
              > UserInfo</p>
            </Space>
              {contextHolder}</td>
            <td>
              <Space>
                <p className='userinfo'
                  onClick={() => { modal.info(config) }}
                > UserInfo</p>
              </Space>
              {contextHolder}
            </td>
            <td>
              <Space>
                <p className='userinfo'
                  onClick={() => { modal.info(config) }}
                >UserInfo</p>
              </Space>
              {contextHolder}
            </td>
            <td style={{ color: ColorChange(status) }}>{status} </td>
            <td>
              <Button type="primary" onClick={showModal} style={{ backgroundColor: "#2BB380", borderRadius: "10px", height: "40px" }}>
                change status
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="accept" cancelText="reject">
                <p>Some contents...</p>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SelectedTable;
