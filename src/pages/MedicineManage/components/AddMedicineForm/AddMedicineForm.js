import React from 'react';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import BaseContainer from 'core/layout/BaseContainer/Container';
import clsx from 'clsx';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const DropDownMenu = ({ type, setType }) => {
  const classes = useStyles();

  const types = ['lọ', 'vỉ', 'viên'];

  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <FormControl variant='outlined' className={classes.dropdownmenu}>
      <Select value={type} onChange={handleChange}>
        <MenuItem value=''>-</MenuItem>
        <MenuItem value={types[0]}>{types[0]}</MenuItem>
        <MenuItem value={types[1]}>{types[1]}</MenuItem>
        <MenuItem value={types[2]}>{types[2]}</MenuItem>
      </Select>
    </FormControl>
  );
};

const AddMedicineForm = () => {
  const classes = useStyles();

  const [type, setType] = React.useState('');

  return (
    <BaseContainer>
      <form className={classes.form}>
        <div className={classes.header}>
          <Typography className={classes.title}>Form nhập thuốc</Typography>
        </div>
        <div className={classes.body}>
          <div className={classes.span2}>
            <Typography className={classes.text}>TÊN THUỐC</Typography>
            <TextField
              className={classes.textfieldinput}
              variant='outlined'
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            ></TextField>
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>SỐ LƯỢNG MUA VÀO</Typography>
            <div className={classes.dFlex}>
              <TextField
                className={classes.textfieldinput}
                variant='outlined'
              ></TextField>
              <DropDownMenu type={type} setType={setType} />
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>SỐ LƯỢNG TỒN</Typography>
            <div className={classes.dFlex}>
              <TextField
                className={classes.textfieldinput}
                variant='outlined'
              ></TextField>
              <p className={classes.sidetype}>{type}</p>
            </div>
          </div>
          <div className={classes.span3}>
            <Typography className={classes.text}>
              SỐ LƯỢNG VIÊN THUỐC TRÊN MỘT ĐƠN VỊ MUA VÀO
            </Typography>
            <div className={classes.dFlex}>
              <TextField
                className={classes.textfieldinput}
                variant='outlined'
              ></TextField>
              <p className={classes.sidetype}>{type}</p>
            </div>
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>GHI CHÚ</Typography>
            <TextField
              className={classes.textfieldinput}
              variant='outlined'
            ></TextField>
          </div>
          <div className={classes.span4}>
            <Typography className={classes.text}>NGÀY MUA</Typography>
            <TextField
              className={classes.textfieldinput}
              variant='outlined'
            ></TextField>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ MUA</Typography>
            <div className={classes.dFlex}>
              <TextField
                className={classes.textfieldinput}
                variant='outlined'
              ></TextField>
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
          <div className={classes.span2}>
            <Typography className={classes.text}>GIÁ BÁN</Typography>
            <div className={classes.dFlex}>
              <TextField
                className={classes.textfieldinput}
                variant='outlined'
              ></TextField>
              <p className={classes.sidetype}>viên</p>
            </div>
          </div>
        </div>
        <div className={classes.buttongroup}>
          <ButtonGroup className={classes.savebutton}>
            <Button
              color='primary'
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
