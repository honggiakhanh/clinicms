import React, { useState, useEffect } from "react";
import BaseContainer from "core/layout/BaseContainer/Container";
import "./styles.css";
import axios from "axios";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const MedicineManage = () => {
  const baseUrl = "https://boiling-mountain-00836.herokuapp.com/api";

  const priceUnit = [undefined, "-", "lọ", "vỉ", "viên"];

  const [allMeds, setAllMeds] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/list-medicine`).then((response) => {
      setAllMeds(response.data.data);
    });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`${baseUrl}/medicine`, JSON.stringify({ medicine_id: id }));
  };

  return (
    <BaseContainer>
      <div>
        <div className="topbar">
          <input className="topbar-input" type="text" />
          <Link to="medicine/add" style={{ textDecoration: "none" }}>
            <button className="topbar-button" type="submit">
              <AddBoxOutlinedIcon fontSize="medium" /> Thêm thuốc
            </button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr className="table-titles">
              <th className="first">STT</th>
              <th>Ngày mua</th>
              <th>Tên thuốc</th>
              <th>SL Tồn</th>
              <th>Giá mua</th>
              <th>Giá bán</th>
              <th className="table-icons"></th>
              <th className="table-icons"></th>
            </tr>
          </thead>

          <tbody>
            {allMeds.length > 0
              ? allMeds.map((med, index) => {
                  return (
                    <tr key={index}>
                      <td className="first">{index + 1}</td>
                      <td>{med.acquired_date}</td>
                      <td>{med.medicine_name}</td>
                      <td>{med.quantity_in_stock}</td>
                      <td>
                        {med.acquired_price_per_count}/
                        <span className="price-unit">
                          {priceUnit[Number(med.unit)]}
                        </span>
                      </td>
                      <td>
                        {med.sell_price_per_count}/
                        <span className="price-unit">
                          {priceUnit[Number(med.unit)]}
                        </span>
                      </td>
                      <td className="table-icons">
                        <DeleteIcon
                          onClick={() => deleteItem(med.medicine_id)}
                        />
                      </td>
                      <td className="table-icons">
                        <Link to={`/medicine/edit/${med.medicine_id}`}>
                          <BorderColorIcon fontSize="small" />
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </BaseContainer>
  );
};

export default MedicineManage;
