import { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Typography,
  Input,
  MenuItem,
  Select,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import BaseContainer from "core/layout/BaseContainer/Container";
import useStyles from "./styles";

const AddMedicineForm = (props) => {
  const classes = useStyles();
  const types = ["-", "lọ", "vỉ", "viên"];
  // const [newMedicineName, setNewMedicineName] = useState([]);
  // const [newQuantityAcquired, setNewQuantityAcquired] = useState("");
  // const [newUnit, setNewUnit] = useState("");
  // const [newQuantityInStock, setNewQuantityInStock] = useState("");
  // const [newQuantityPerUnit, setNewQuantityPerUnit] = useState("");
  // const [newNote, setNewNote] = useState("");
  // const [newAcquiredDate, setNewAcquiredDate] = useState("");
  // const [newSellPricePerCount, setNewSellPricePerCount] = useState("");

  const initialForm = {
    medicine_name: "",
    quantity_acquired: 0,
    unit: 0,
    quantity_in_stock: 0,
    quantity_per_unit: 0,
    note: "",
    acquired_date: "",
    acquired_price_per_count: 0,
    sell_price_per_count: 0,
  };

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <BaseContainer>
      <form className={classes.form}>
        <div className={classes.header}>
          <Typography className={classes.title}>Form nhập thuốc</Typography>
        </div>
        <div className={classes.body}>
          <div className={classes.span2}>
            <Typography className={classes.text}>TÊN THUỐC</Typography>
            <Input
              className={classes.input}
              variant="outlined"
              disableUnderline={true}
              value={form.medicine_name}
              onChange={handleInputChange}
              name="medicine_name"
            />
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>SỐ LƯỢNG MUA VÀO</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant="outlined"
                disableUnderline={true}
                value={form.quantity_acquired}
                onChange={handleInputChange}
                name="quantity_acquired"
              />
              <Select
                value={form.unit}
                disableUnderline
                onChange={handleInputChange}
                className={classes.dropdownmenu}
                name="unit"
              >
                {types.map((type) => (
                  <MenuItem value={types.indexOf(type)}>{type}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>SỐ LƯỢNG TỒN</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant="outlined"
                disableUnderline={true}
                onChange={handleInputChange}
                name="quantity_in_stock"
                value={form.quantity_in_stock}
              />
              <p className={classes.sidetype}>{types[form.unit]}</p>
            </div>
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>
              SỐ LƯỢNG VIÊN THUỐC TRÊN MỘT ĐƠN VỊ MUA VÀO
            </Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant="outlined"
                disableUnderline={true}
                onChange={handleInputChange}
                name="quantity_per_unit"
                value={form.quantity_per_unit}
              />
              <p className={classes.sidetype}>{types[form.unit]}</p>
            </div>
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>GHI CHÚ</Typography>
            <Input
              className={clsx(classes.input, classes.inputghichu)}
              variant="outlined"
              disableUnderline={true}
              multiline={true}
              rows={4}
              onChange={handleInputChange}
              name="note"
              value={form.note}
            />
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>NGÀY MUA</Typography>
            <Input
              className={classes.input}
              variant="outlined"
              disableUnderline={true}
              onChange={handleInputChange}
              name="acquired_date"
              value={form.acquired_date}
            />
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ MUA</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant="outlined"
                disableUnderline={true}
                onChange={handleInputChange}
                name="acquired_price_per_count"
                value={form.acquired_price_per_count}
              />
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ BÁN</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant="outlined"
                disableUnderline={true}
                onChange={handleInputChange}
                name="sell_price_per_count"
                value={form.sell_price_per_count}
              />
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
        </div>
        <div className={classes.buttongroup}>
          <ButtonGroup className={classes.savebutton}>
            <Button
              size="large"
              className={classes.savebuttonicon}
              startIcon={<SaveIcon />}
            >
              Lưu
            </Button>
          </ButtonGroup>
          <ButtonGroup className={classes.delbutton}>
            <Button
              size="large"
              className={classes.delbuttonicon}
              startIcon={<DeleteIcon />}
            >
              Xoá
            </Button>
          </ButtonGroup>
        </div>
      </form>
    </BaseContainer>
  );
};

export default AddMedicineForm;
