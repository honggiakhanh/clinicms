import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './styles'

const columns = [
    { id: 'STT', label: 'STT', type: 'interger'},
    { id: 'date', label: 'Ngày mua', type: 'date' },
    { id: 'name', label: 'Tên thuốc', type: 'string'  },
    {
        id: 'quantity',
        label: 'SL tồn',
        // minWidth: 170,
        // align: 'right',
        type: 'number',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'buy',
        label: 'Giá mua',
        // minWidth: 170,
        // align: 'right',
        type: 'currency',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'sell',
        label: 'Giá bán',
        // minWidth: 170,
        // align: 'right',
        type: 'currency',
        format: (value) => value.toFixed(2),
    },
];

function createData(STT, date, name, quantity, buy, sell) {
    const density = quantity / buy;
    return { STT, date, name, quantity, buy, sell, density };
}

const rows = [
    createData(1, '13/05/1999', 'Panadol', 25, 55),
    createData(2, '22/06/1999', 'Ketamin', 40, 100),
    createData(3, '17/10/1999', 'Weed', 69, 200),
    createData(4, '22/09/1999', 'Drug', 35, 500),
    // createData('Canada', 'CA', 37602103, 9984670),
    // createData('Australia', 'AU', 25475400, 7692024),
    // createData('Germany', 'DE', 83019200, 357578),
    // createData('Ireland', 'IE', 4857000, 70273),
    // createData('Mexico', 'MX', 126577691, 1972550),
    // createData('Japan', 'JP', 126317000, 377973),
    // createData('France', 'FR', 67022000, 640679),
    // createData('United Kingdom', 'GB', 67545757, 242495),
    // createData('Russia', 'RU', 146793744, 17098246),
    // createData('Nigeria', 'NG', 200962417, 923768),
    // createData('Brazil', 'BR', 210147125, 8515767),
];
export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    className={classes.head}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} className={classes.body}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}