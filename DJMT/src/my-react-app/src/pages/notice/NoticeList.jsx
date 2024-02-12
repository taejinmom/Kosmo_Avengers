import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

import Select from "react-select";


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { isAdmin } from '../../pages/member/atom/LoginAtom';
import { useRecoilValue } from 'recoil';

const columns = [
    { id: 'ntc_no', label: '숫자', minWidth: 50 },
    { id: 'ntc_title', label: '제목', minWidth: 170 },
    { id: 'reg_date', label: '등록일', minWidth: 50 },
    // {
    //   id: 'population',
    //   label: 'Population',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // }, //조회수
  ];

const rows = null;


const NoticeList = () => {
    const isAdminCheck = useRecoilValue(isAdmin);

    const navigate = useNavigate();
    const [noticeList, setNoticeList] = useState([]);
    
    const [rows, setRows] = useState([]);

    const getNoticeList = async e => {
        axios
        .get('api/noticeList')
        .then(res => {
            console.log(res.data)
            setNoticeList(res.data);
            setRows(res.data);
        })
        .catch(error => {
            console.log('error >> ')
            // if (error.response.data === 'fail') {
            // alert('불러올 데이터가 없습니다.')
            // }
        })
        // e.preventDefault();
        //
    }

    const moveToWrite = () => {
        navigate('/notice/write');
      };

    useEffect(() => {
        getNoticeList(); // 1) 게시글 목록 조회 함수 호출
      }, []);


    //셀렉트박스
    const options = [
        { value:"1", label:"공지사항"},
        { value:"2", label:"이벤트"},
        { value:"3", label:"자주하는 질문(FAQ)"}
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    }

    // mui 페이징처리
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };


    return(
        <div>
            <div> 카테고리
                <Select classNamePrefix="react-select"
                    defaultValue={options[0]}
                    isClearable={false}
                    isSearchable={false}
                    menuPortalTarget={document.body}
                    options={options}
                    align='right'
                />
            </div>
            <br />
            <div>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
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
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.ntc_title}>
                                {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.id === 'ntc_title' ? (
                                            <Link to={`/notice/${row.ntc_no}`}>{value}</Link>
                                        ) : (
                                            column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value
                                        )}
                                    </TableCell>
                                    // <TableCell key={column.id} align={column.align}>
                                    // {column.format && typeof value === 'number'
                                    //     ? column.format(value)
                                    //     : value}
                                    // </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 7, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper>
            </div>

            {isAdminCheck &&
            <>
                <button onClick={moveToWrite}>글쓰기</button>
            </>
            }
            
        </div>
    )
};

export default NoticeList;