import * as React from 'react';
import {
    Avatar,
    Button,
    Breadcrumbs,
    CssBaseline,
    TextField,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormHelperText,
    Grid,
    Box,
    Typography,
    Link,
    Container,
} from '@mui/material/';
import "./frontLayout-bundle.css";

const Mypage = () => {

    return (
        <div>
            <div>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        HOME
                    </Link>{/* TODO: 홈으로 이동시에도 로그인상태 유지 필요*/}
                    <Typography color="text.primary">마이페이지</Typography>
                </Breadcrumbs>


            </div>

            <div> {/* 에잇세컨즈 마이페이지 따라하기 */}
                <div id="content" className="contents" style={{ minHeight: '1054px' }}>
                    <h1>마이페이지</h1>
                    <div className="inner-wrap">
                        <nav className="lnb">
                            <h3>나의 주문</h3>
                            <ul>
                                <li><a href="/secured/mypage/listOrder" id="listOrder"><span>주문·교환·반품·취소 내역</span></a></li>
                                <li><a href="/secured/mypage/listRepair" id="listRepair"><span>무료 사이즈수선 신청·내역</span></a></li>
                                <li><a href="/secured/mypage/listPayRepair" id="listPayRepair"><span>AS수선 신청·내역</span></a></li>
                                {/* <!-- 멤버십 회원, 일모 회원 일 경우 노출 --> */}
                                <li><a href="/secured/mypage/myPurchasedListInStore" id="myPurchasedListInStore"><span>매장구매내역</span></a></li>
                                <li><a href="/secured/mypage/memberAddrMgmt"><span>배송지 관리</span></a></li>
                            </ul>

                            <h3>나의 쇼핑 혜택</h3>
                            <ul>
                                <li><a href="/secured/mypage/myCouponList" id="myCouponList"><span>쿠폰</span></a></li>
                                <li><a href="/secured/mypage/myGiftPointList" id="myGiftPointList"><span>기프트 포인트</span></a></li>
                                <li><a href="/secured/mypage/myPurpleCoinList" id="myPurpleCoinList"><span>퍼플코인</span></a></li>
                                <li><a href="/secured/mypage/myMemberShipPointList" id="myMemberShipPointList"><span>멤버십 포인트</span></a></li>
                                <li><a href="/secured/mypage/myEightSecondsBenefits"><span>8Seconds 구매실적 혜택</span></a></li>
                            </ul>

                            <h3>나의 활동</h3>
                            <ul>
                                <li><a href="/secured/mypage/myWishList" id="myWishList"><span>위시리스트</span></a></li>
                                <li><a href="/secured/mypage/myTodayGoodList" id="myTodayGoodList"><span>최근 본 상품</span></a></li>
                                <li><a href="/secured/mypage/myAlarmsForStock" id="myAlarmsForStock"><span>재입고 알림</span></a></li>
                                <li><a href="/secured/mypage/eventList" id="eventList"><span>이벤트 참여내역</span></a></li>
                                <li><a href="/secured/mypage/myGoodsReviewList" id="myGoodsReviewList"><span>상품리뷰</span></a></li>
                            </ul>

                            <h3>고객의 소리 </h3>
                            <ul>
                                <li><a href="/secured/mypage/myInquiryList" id="myInquiryList"><span>1:1문의/SSF톡</span></a></li>
                                <li><a href="/secured/mypage/myQnaList" id="myQnaList"><span>상품Q&amp;A</span></a></li>
                            </ul>

                            <h3>회원 정보</h3>
                            <ul>
                                <li><a href="/secured/mypage/memberInfoMgmt" id="updateMember"><span>회원정보 수정</span></a></li>

                                {/* <!-- [#31806][16.12.29] 멤버십 제도 개선 Start --> */}
                                <li><a href="/secured/mypage/myMembershipInfo" id="myMembershipInfo"><span>멤버십 정보</span></a></li>
                                {/* <!-- [#31806][16.12.29] 멤버십 제도 개선 End --> */}
                                <li><a href="/secured/mypage/memberSecession" id="memberSecession"><span>회원 탈퇴</span></a></li>
                            </ul>
                        </nav>


                        <section className="mypage">
                            <div className="membership">
                                <div className="mem-className">
                                    {/* <!-- lv-01 ~ lv-08 --> */}
                                    <i className="lv-02 coin"></i>
                                    <div className="mem-profile">
                                        <h2>
                                            <a href="/secured/mypage/memberInfoMgmt"><em>hdy</em>
                                                님</a>
                                            <small>abcd@email.com</small>
                                        </h2>

                                        <div className="mem-grade">
                                            <span>Welcome Back!!</span>
                                        </div>
                                        <a href="/secured/mypage/myMembershipInfo" className="btn gy">혜택 보기</a>
                                    </div>
                                </div>
                                <div className="mem-wallet">
                                    <ul>
                                        {/* <!--  기프트 포인트 --> */}
                                        <li>
                                            <span>기프트 포인트</span>
                                            <a href="/secured/mypage/myGiftPointList" className="value">0</a>
                                        </li>
                                        {/* <!--  퍼플코인 --> */}
                                        <li>
                                            <span>퍼플코인</span>
                                            <a href="/secured/mypage/myPurpleCoinList" className="value">0</a>
                                        </li>
                                        {/* <!--  멤버십 포인트 --> */}
                                        <li>
                                            <span>멤버십 포인트</span>
                                            <a href="/secured/mypage/myMemberShipPointList" className="value" id="reserve">0</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        {/* <!--  쿠폰 --> */}
                                        <li>
                                            <span>쿠폰</span>
                                            <a href="/secured/mypage/myCouponList" className="value">3</a>
                                        </li>
                                        {/* <!--  상품리뷰 --> */}
                                        <li>
                                            <span>상품리뷰</span>
                                            <a href="/secured/mypage/myGoodsReviewList" className="value">0</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>




                    </div>
                </div>

            </div>
            <div>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    size="large"
                >
                    찜목록
                </Button>
            </div>
        </div>


    );
};

export default Mypage;