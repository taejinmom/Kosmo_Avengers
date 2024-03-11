import React, { useEffect, useState } from "react";

import { isLogin, isAdmin } from '../member/atom/LoginAtom';
import { useRecoilValue } from 'recoil';

import { useCookies } from 'react-cookie'

// npm i react-slick
// npm i slick-carousel // css 커스텀을 위해서 설치
import Slider from 'react-slick'; // react-slick 사용을 위해 import
import "./slick-theme.css";// 바로 밑에꺼까지는 커스텀을 위함
import "./slick.css";

const CoordinateSlider = () => {
    const isLoginCheck = useRecoilValue(isLogin);
    const isAdminCheck = useRecoilValue(isAdmin);
    const [ cookies ] = useCookies([]); //cookies set method find

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return(
        <div>
            <div>
                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
                
            </div>

            {(isLoginCheck && isAdminCheck) &&
            <>
                <button onClick={moveToWrite}>글쓰기</button>
            </>
            }

        </div>
    )
};

export default CoordinateSlider;