import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Style } from './AdminElements';
import TableComponent from './TableComponent';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DateTime} from 'luxon'

const AdminPage = () => {
    let history = useHistory();
    const envName = 'production'
    const config = require('../../config.json')[envName];
    const url = config.url;
    const initialTableData = []
    const [tableData, setTableData] = useState(initialTableData);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [startDate, setStartDate] = useState(new Date())
    const [startDateString, setStartDateString] = useState(null)
    const [endDate, setEndDate] = useState(new Date())
    const [endDateString, setEndDateString] = useState(null)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    
    useEffect(() => {
        getData()
        if(!localStorage.getItem('auth_token'))
        {history.push('/login')}
    }, [])

    const getData = async () =>{
        let request;
        let tableUrl = url+'showtable'
        
            request = await axios.get(tableUrl)
            console.log(tableUrl)
            const data = []
            request.data.map((object) => {
                data.push(object)

            })
            setTableData(data)
    }

    const logout = () =>{
        // console.log('logout')
        localStorage.clear()
        history.push('/login')
    }
    

    const columns = [
       {  
        id: 'name',  
        label: 'Name' ,
        }
       
       ,
       {  
       id: 'store_name',  
       label: 'Store Name' ,
       }
       ,
       {  
       id: 'phone',  
       label: 'Phone',
       },
       {  
        id: 'email',  
        label: 'Email',
        },
        {  
        id: 'city',  
        label: 'City',
        }
    ]

    const filterData = () => {
        console.log(startDateString)
    }

    const changeStartDate = (dates) =>{
        console.log(dates)
        setStartDate(dates)
        const date = new Date(dates)
        const mnth = ("0" + (date.getMonth() + 1)).slice(-2)
        const day = ("0" + date.getDate()).slice(-2)
        setStartDateString([day, mnth, date.getFullYear() ].join("-"))
    }

    const changeEndDate = (dates) =>{
        setEndDate(dates)
        const date = new Date(dates)
        const mnth = ("0" + (date.getMonth() + 1)).slice(-2)
        const day = ("0" + date.getDate()).slice(-2)
        setEndDateString([day, mnth, date.getFullYear() ].join("-"))
    }
    
    const changeData = async() =>{
        let request;
        const date = new Date(startDate)
        const mnth = ("0" + (date.getMonth() + 1)).slice(-2)
        const day = ("0" + date.getDate()).slice(-2)
        const date2 = new Date(endDate)
        const mnth2 = ("0" + (date2.getMonth() + 1)).slice(-2)
        const day2 = ("0" + date2.getDate()).slice(-2)
        const firstDate = [day, mnth, date.getFullYear() ].join("-")
        const lastDate = [day2, mnth2, date2.getFullYear() ].join("-")
        let tableUrl = url+'showtable?startdate='+firstDate+'&enddate='+lastDate
            request = await axios.get(tableUrl)
            const data = []
            request.data.map((object) => {
                data.push(object)

            })
            setTableData(data)
    }

   
    const download = async() =>{
        let downloadUrl = url+'download'
        const request = await axios.get(downloadUrl)
        console.log(request)
    }
    return (
        <>
            <div style={{width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
                <div style={{width:'90%', height:'100px', margin:'auto', textAlign:'right', color:'#C0022D', alignItems:'end'}}><h1 style={{width:'200px', marginLeft:'auto'}} className='button' onClick={()=>{logout()}}>Log Out</h1>
                </div>
                
                <div style={{maxHeight:'100%', width:'90%', margin:'auto'}}>
                <Paper sx={{ width: '100%', height:'100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                // console.log('row', row)
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
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
                        count={tableData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                    </Paper>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', margin:'auto'}}>
                {/* <p style={{width:'200px'}}>Start Date : </p><DatePicker dateFormat="dd-MM-yyyy" selected={startDate} onChange={(date) => changeStartDate(date)} />
                <p style={{width:'200px'}}>End Date : </p><DatePicker  dateFormat="dd-MM-yyyy" selected={endDate} onChange={(date) => changeEndDate(date)} /> */}
                <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                <p style={{width:'200px'}}>Start Date : </p>
                <DatePicker
											selected={startDate}
											onChange={(e)=>{changeStartDate(e)}}
											dateFormat="dd-MM-yyyy"
											showMonthDropdown
											showYearDropdown
											dropdownMode="select"
											calendarClassName="customReactDatepicker"
											placeholderText="pilih tanggal awal"
											// value={this.state.lastDate}
										/>
                                        </div>
                                        <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                <p style={{width:'200px'}}>End Date : </p>
                <DatePicker
											selected={endDate}
											onChange={changeEndDate}
											dateFormat="dd-MM-yyyy"
											showMonthDropdown
											showYearDropdown
											dropdownMode="select"
											calendarClassName="customReactDatepicker"
											placeholderText="pilih tanggal akhir"
											// value={this.state.lastDate}
										/>
                                        </div>
                </div>
                <div style={{width:'100%', display:'flex', flexDirection:'row'}}>
                    <div style={{width:'100px', margin:'auto', padding:'2px', background:'#C0022D', textAlign:'center', color:'#fff', marginTop:'10px', borderRadius:'20px'}} onClick={()=>changeData()}><p>SetDate</p></div>
                    <a href= {startDateString===null?"http://172.104.53.17:3001/download": endDateString===null? "http://172.104.53.17:3001/download?"+'startdate='+startDateString+'&enddate=31-12-2022' : "http://172.104.53.17:3001/download?"+'startdate='+startDateString+'&enddate='+endDateString} style={{width:'100px', margin:'auto'}}><div style={{width:'100px', margin:'auto', padding:'2px', background:'#C0022D', textAlign:'center', color:'#fff', marginTop:'10px', borderRadius:'20px'}}> <p>Download</p></div></a>
                
                </div>
            </div>
        </>
    )
}

export default AdminPage
