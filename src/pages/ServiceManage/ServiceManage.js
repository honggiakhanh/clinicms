import React, { useState, useEffect } from "react";
import BaseContainer from "core/layout/BaseContainer/Container";
import "./styles.css";
import axios from "axios";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { Link } from "react-router-dom";

const MedicineManage = () => {
  const baseUrl = "https://boiling-mountain-00836.herokuapp.com/api";

  const priceUnit = ["-", "vỉ", "viên", "lọ"];

  const [allMeds, setAllMeds] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get(`${baseUrl}/list-medicine`).then((response) => {
      setAllMeds(response.data);
      console.log(allMeds);
    });
  }, []);

  return (
    <BaseContainer>
      <div>
        <div className="topbar">
          <input className="topbar-input" type="text" value="" />
          <Link to="service/add" style={{ textDecoration: 'none'}}>
            <button className="topbar-button" type="submit">
              <AddBoxOutlinedIcon fontSize="medium" /> Thêm dịch vụ
            </button>
          </Link>
        </div>
        <table className="table">
          <tr className="table-titles">
            <th className="first">STT</th>
            <th>Ngày mua</th>
            <th>Tên thuốc</th>
            <th>SL Tồn</th>
            <th>Giá mua</th>
            <th>Giá bán</th>
          </tr>

          {allMeds.length > 0
            ? allMeds.map((med, index) => {
                return (
                  <tr>
                    <td className="first">{index + 1}</td>
                    <td>{med.acquired_date}</td>
                    <td>{med.medicine_name}</td>
                    <td>{med.quantity_in_stock}</td>
                    <td>
                      {med.acquired_price_per_count}/
                      <span className="price-unit">
                        {priceUnit[Number(med.unit - 1)]}
                      </span>
                    </td>
                    <td>{med.sell_price_per_count}</td>
                  </tr>
                );
              })
            : null}
        </table>
      </div>
    </BaseContainer>
  );
};

export default MedicineManage;
