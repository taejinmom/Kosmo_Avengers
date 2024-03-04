import React, { useEffect, useState } from "react";

import { isLogin, isAdmin } from '../../pages/member/atom/LoginAtom';
import { useRecoilValue } from 'recoil';

import { useCookies } from 'react-cookie'

//react slide
// need to npm install react-slick --save
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CoordinatePage = () => {
    const isLoginCheck = useRecoilValue(isLogin);
    const isAdminCheck = useRecoilValue(isAdmin);
    const [ cookies ] = useCookies([]); //cookies set method find

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <Next />,
        prevArrow: <Prev />,
    };

    return(
        <div>
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

            {(isLoginCheck && isAdminCheck) &&
            <>
                <button onClick={moveToWrite}>글쓰기</button>
            </>
            }

        </div>
    )
};

export default CoordinatePage;