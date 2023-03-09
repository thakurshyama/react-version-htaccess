import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import "../../Css/Table.css";

function GetApi() {
  const d = new Date();
  const [user, setUser] = useState([]);
  const token = "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjBhNDMyZiIsInJvbGVJZCI6IjJmMjdlYjgyIiwicm9sZSI6Mywic3ViUm9sZSI6Nzc3LCJpYXQiOjE2NzYyODQwMzEsImV4cCI6MTY3ODg3NjAzMX0.JwUUGgBXLv4s0MmYEqMMGh-cMs4w1gNAq5rJEb4_trWAXEhMBkjw74UWTTq62SWH838AFf6CkxtB99HKHukoQ7gvjDbSJS5JLtLN7PoHcJqG_Fh_1nX0TphT24z0PElm3Mttz-bcGs_-qtWKLyX9ghchn7Fo7gPswo-a0q7G7qVUHEHoNUXp6vMO-EV6_8LOCntS-NN_8EIgkS805GmmNlb0VT7pW4fs4og8BCSctHT0oJbu4h7Zjs8cH3qlIu9p2JY0mHJjluFq7Iflj0C7DOKgU5KphIsZqfZ16-wWc6_vZ04d8wyUn23WzXHmEJ8T6n_tQFtXKcmJcJ-tcefKPI8qjTEFKu-200RmWHQL8kH1aud4v--QEKRLTCcD_uLgfbL64l9GNISuVO9Lq7yQ7MlNIZcEhSHUsXEKvkit2OMrsZq0hsRKj7yRSxa5QGylT0roDokuqXBYVyX7TT3z25CtUMiicdvgtQFykN4OHjjdBojonCCVHEwpuRMYUv2zNkMhsEVhdw63tUyFcWtL-CY3qSI-X78giNZCjeZJJxmSSQx68Vy8XL1XKMcUKUlvaOt_ByI1dmh1HqQW3CqnAFALMh4zvAfBlYPHoXjLJpHh-TPLUhUNx7c52kQj-_aD0ixKSqboLYXF4rIwuHz1onNAFy-Q5Y-LpA2OCl6mmBM";
  const fetchUser = () => {
    axios.get(`http://139.59.60.119:4777/v1/order/outlets?status=dispatched&from=01-19-2023&to=${d.toDateString()}`, {
      headers: { "Authorization": `Bearer ${token}` }
    }).then((res) => {
      console.log('hggggggggggggggggggggg', res);
      if (res.data.items) {
        console.log(res.data.items);
        setUser(res.data.items)
      }

    })
  }
  useEffect(() => {
    fetchUser()
  }, [])

  const [isModalOpendis, setIsModalOpendis] = useState(false);
  const showModaldis = () => {
    setIsModalOpendis(true);
  };
  const handleOkdis = () => {
    setIsModalOpendis(false);
  };

  const [isModalOpendis2, setIsModalOpendis2] = useState(false);
  const showModaldis2 = () => {
    setIsModalOpendis2(true);
  };
  const handleOkdis2 = () => {
    setIsModalOpendis2(false);
  };

  const [isModalOpendis3, setIsModalOpendis3] = useState(false);
  const showModaldis3 = () => {
    setIsModalOpendis3(true);
  };
  const handleOkdis3 = () => {
    setIsModalOpendis3(false);
  };

  return (
    <div className="New">
      <h2 style={{ paddingLeft: "50px" }}>All Order in Preparing </h2>
      <table>
        <tbody>
          <tr>
            <th style={{ fontSize: "18px" }}>Customer</th>
            <th style={{ fontSize: "18px" }}>order Id</th>
            <th style={{ fontSize: "18px" }}>Payment Id</th>
            <th style={{ fontSize: "18px" }}>status</th>
            <th style={{ fontSize: "18px" }}>outlet Id</th>
            <th style={{ fontSize: "18px" }}>Payment</th>
          </tr>
          {user.map((user) => {
            return (
              <tr key={user.orderId}>
                <td className='userinfo'>
                  <p type="primary" onClick={showModaldis}>
                    {user.client.clientName}
                  </p>
                  <Modal title="User Information" open={isModalOpendis} onOk={handleOkdis}>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>clientName:</span>  {user.client.clientName}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>number:</span> {user.client.clientPhone}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>clientId:</span>{user.client.clientId}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>clientAddress:</span> {user.client.clientAddress}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>clientLongitude:</span> {user.client.clientLongitude}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>clientLatitude:</span> {user.client.clientLatitude}</p>
                  </Modal>
                </td>
                <td>{user.orderId}</td>
                <td>{user.mpOrderId}</td>
                <td>{user.status}</td>
                <td className='userinfo'>
                  <p type="primary" onClick={showModaldis2}>
                  {user.outlet.outletId}
                  </p>
                  <Modal title="User Information" open={isModalOpendis2} onOk={handleOkdis2}>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletId:</span>  {user.outlet.outletId}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>sellerId:</span> {user.outlet.sellerId}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletName:</span>{user.outlet.outletName}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletArea:</span> {user.outlet.outletArea}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletAddress:</span> {user.outlet.outletAddress}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletLongitude:</span> {user.outlet.outletLongitude}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>outletLatitude:</span> {user.outlet.outletLatitude}</p>
                  </Modal>
                </td>
                <td className='userinfo'>
                  <p type="primary" onClick={showModaldis3}>
                  {user.amount.totalAmount}
                  </p>
                  <Modal title="User Information" open={isModalOpendis3} onOk={handleOkdis3}>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>deliveryCharge:</span>  {user.amount.deliveryCharge}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>deliveryTip:</span> {user.amount.deliveryTip}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>taxAmount:</span>{user.amount.taxAmount}</p>
                    <p> <span style={{ fontSize: "18px", color: "#2BB380" }}>totalAmount:</span> {user.amount.totalAmount}</p>
                  </Modal>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default GetApi;