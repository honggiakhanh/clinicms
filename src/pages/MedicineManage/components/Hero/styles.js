import { makeStyles } from '@material-ui/core';
export default makeStyles({
    head: {
        backgroundColor: '#02F8BD',
        color: 'white',
        width:'4rem',
        textAlign: 'center',
        '&:first-of-type':{
            // textAlign: 'right',
            paddingLeft:'2rem',
        },
        '&:not(&:first-of-type)':{
            textAlign: 'left'
        },
    },
    body:{
        textAlign: 'center',
        paddingLeft:'2rem',
        '&:not(&:first-of-type)':{
            textAlign: 'left'
        },
    },
    root: {
        width: '100%',
        
    },
    container: {
        maxHeight: 440,
        justifyContent:'center',
        
    },
  });