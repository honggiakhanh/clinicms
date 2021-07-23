import { useState } from 'react';
import clsx from 'clsx';
import {
  Typography,
  Input,
  MenuItem,
  Select,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import BaseContainer from 'core/layout/BaseContainer/Container';
import useStyles from './styles';

const DropDownMenu = ({ type, setType }) => {
  const classes = useStyles();

  const types = ['lọ', 'vỉ', 'viên'];

  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <Select
      value={type}
      disableUnderline
      onChange={handleChange}
      className={classes.dropdownmenu}
    >
      <MenuItem value=''>-</MenuItem>
      {types.map(type => (
        <MenuItem value={type}>{type}</MenuItem>
      ))}
    </Select>
  );
};

const AddMedicineForm = () => {
  const classes = useStyles();

  const [type, setType] = useState('');

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
              variant='outlined'
              disableUnderline={true}
            />
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>SỐ LƯỢNG MUA VÀO</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant='outlined'
                disableUnderline={true}
              />
              <DropDownMenu type={type} setType={setType} />
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>SỐ LƯỢNG TỒN</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant='outlined'
                disableUnderline={true}
              />
              <p className={classes.sidetype}>{type}</p>
            </div>
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>
              SỐ LƯỢNG VIÊN THUỐC TRÊN MỘT ĐƠN VỊ MUA VÀO
            </Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant='outlined'
                disableUnderline={true}
              />
              <p className={classes.sidetype}>{type}</p>
            </div>
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>GHI CHÚ</Typography>
            <Input
              className={clsx(classes.input, classes.inputghichu)}
              variant='outlined'
              disableUnderline={true}
              multiline={true}
              rows={4}
            />
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>NGÀY MUA</Typography>
            <Input
              className={classes.input}
              variant='outlined'
              disableUnderline={true}
            />
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ MUA</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant='outlined'
                disableUnderline={true}
              />
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ BÁN</Typography>
            <div className={classes.dFlex}>
              <Input
                className={classes.input}
                variant='outlined'
                disableUnderline={true}
              />
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
        </div>
        <div className={classes.buttongroup}>
          <ButtonGroup className={classes.savebutton}>
            <Button
              size='large'
              className={classes.savebuttonicon}
              startIcon={<SaveIcon />}
            >
              Lưu
            </Button>
          </ButtonGroup>
        </div>
      </form>
    </BaseContainer>
  );
};

export default AddMedicineForm;
