import * as React from 'react';
import {createTheme, styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Categories.css";
import Box from "@mui/material/Box";
/*
import {
    GridRowModes,
    DataGrid,
    GridToolbarContainer,
    GridActionsCellItem,
    GridRowEditStopReasons,
} from '@mui/x-data-grid';
*/


const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#18392B',
        color: '#FFD700',
        fontSize: 30,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 20,
        color: '#18392B'

    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#FFD700',
    },'&:nth-of-type(even)': {
        /*backgroundColor: '#000000',*/
        backgroundColor: '#228B22'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name) {
    return { name };
}


const rows = [
    createData('ExtraLiga'),
    createData('1. Liga'),
    createData('2. Liga'),
    createData('3. Liga'),
    createData('4. Liga'),
    createData('5. Liga'),
    createData('Juniori'),
    createData('Turnaje'),
];
export const Categories = () => {
    return (
        <div className="categories">
            <Box sx={{boxShadow: 15}}>
                <TableContainer sx={{ maxHeight: 550, minWidth: 350  }} component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Kategórie</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </div>
    )
}