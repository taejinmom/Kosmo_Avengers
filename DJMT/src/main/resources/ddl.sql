create table MEMBER (
MEM_NO VARCHAR(40) PRIMARY KEY,
LOGIN_ID VARCHAR(20) unique,
LOGIN_PW VARCHAR(100),
role VARCHAR(10), -- 권한(ADMIN,MEMBER 구분 값)
MEM_NAME VARCHAR(30),
MEM_ADDR1 VARCHAR(20),
MEM_ADDR2 VARCHAR(20),
MEM_STATUS CHAR(1) , -- 회원 상태 :: 1 가입 0 휴면 99 탈퇴?
MEM_TEL VARCHAR(20),
MEM_GEN CHAR(1),
MEM_BIRTH VARCHAR(8),
MEM_BIRTH_YN CHAR(1),
REG_ID VARCHAR(40), -- 생성한 회원
REG_DATE VARCHAR(30), -- 생성 날짜
CHG_ID VARCHAR(40), -- 변경한 회원
CHG_DATE VARCHAR(30) -- 변경 날짜
);

-- 리프레시 토큰 테이블
CREATE TABLE REFRESHTOKEN (
REFRESHTOKEN_ID varchar(40) primary key,
REFRESHTOKEN varchar(150) NULL,
KEY_ID varchar(40) NULL
);

create table MEMBER (
    MEM_NO number PRIMARY KEY, 
    MEM_ID VARCHAR(20) unique,
    MEM_status CHAR(1) , -- 회원 상태 :: 1 가입 0 휴면 99 탈퇴?
    MEM_PW VARCHAR(20),
    MEM_NM VARCHAR(30),
    MEM_ADDR1 VARCHAR(20),
    MEM_ADDR2 VARCHAR(20),
    MEM_TEL VARCHAR(20),
    MEM_GEN CHAR(1),
    MEM_BIRTH VARCHAR(8),
    MEM_BIRTH_YN CHAR(1),
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_ID VARCHAR(40),     -- 변경한 회원
    CHG_DATE VARCHAR(20) -- 변경 날짜
);
create sequence MEMBER_seq increment by 1 start with 1;

create table MEM_HIST(
    MEM_HIST_NO number PRIMARY KEY, 
    MEM_NO VARCHAR(40),
    REG_ID VARCHAR(40),
    LOGIN_DATE VARCHAR(20),
    LOGOUT_DATE VARCHAR(20)
);
create sequence MEM_HIST_seq increment by 1 start with 1;

\



-- 가게 테이블 생성
create table MERCHANT (
    MCT_NO VARCHAR(40) PRIMARY KEY, --시퀀스,
    MCT_ID VARCHAR(40) UNIQUE, --사업자번호,
    MCT_NM VARCHAR(20) unique,
    MCT_TEL VARCHAR(20),
    MCT_ADDR VARCHAR(30),
    MCT_CATE VARCHAR(20), -- 여성,남성,통합,신발,
    MCT_status, -- 판매상태 (품절, 판매중지, 판매중, 등등)
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
create sequence MERCHANT_seq increment by 1 start with 1;


--카테고리 테이블 생성
create table pdct_CATE (
    pdct_cate_no number,
    pdct_gen varchar2(20), -- 남성, 여성, 공용,
    pdct_cate1 varchar2(50) not null, -- 상의, 하의, 신발, 악세서리
    pdct_cate2 varchar2(50) not null, -- 상의세부, 하의세부, 신발세부,악세서리세부
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
create sequence pdct_CATE_seq increment by 1 start with 1;

-- pdct 테이블 생성
create table product (
    pdct_no number primary key,
    pdct_cate_no number,
    pdct_nm varchar2(50) unique,
    pdct_price number not null,
    pdct_comm clob not null,
    pdct_amt, -- 수량
    pdct_status, -- 판매상태 (품절, 판매중지, 판매중, 등등)
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
-- pdct 시퀀스 테이블 생성
create sequence pdct_seq increment by 1 start with 1;

-- 이미지 테이블 생성
create table pdct_img(
    pdct_img_no number primary key,
    pdct_no number,
    pdct_img1 varchar2(512),
    pdct_img2 varchar2(512),
    pdct_img3 varchar2(512),
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
create sequence pdct_img_seq increment by 1 start with 1;

-- orders 테이블 생성
create table order (
    ord_no number primary key,
    MEM_NO number,
    pdct_no number,
    ord_count number not null,
    ord_status varchar2(50) not null, --배송상태(결제취소, 결제완료, 배송중, 배송완료, 교환, 환불)
    ord_addr varchar2(255) not null, -- 추가 기존 회원 기본배송지를 수정해서 주문할수 있도록
    ord_nm varchar2(20) not null, -- 추가 기존 회원 이름을 수정해서 받을 사람 입력해서 주문할수 있도록
    ord_date date,
    ord_edate date
);
-- orders 시퀀스 테이블 생성
create sequence order_seq increment by 1 start with 1;

-- reviews 테이블 생성
create table review (
    rv_no number primary key,
    ord_no number,
    MEM_NO number,
    pdct_no number,
    rv_title varchar2(255) not null,
    rv_comm clob,
    rv_status char(1),
    rv_score number not null,
    rv_date date,
    CHG_DATE VARCHAR(20) -- 변경 날짜
);
-- reviews 시퀀스 테이블 생성
create sequence review_seq increment by 1 start with 1;


-- 장바구니 테이블 생성
create table basket(
    bsk_no number primary key,
    MEM_NO number,
    pdct_no number not null,
    pdct_amt number not null
);
-- 장바구니 시퀀스 테이블 생성
create sequence basket_seq increment by 1 start with 1;

-- 찜 테이블
create table wish (
    wsh_no number primary key,
    pdct_no number,
    MEM_NO number
);
create sequence wish_seq increment by 1 start with 1;

-- 게시판 테이블
create table notice (
    ntc_no number primary key,
    ntc_title varchar2(50),
    ntc_comm clob,
    ntc_status char(1) default '1',
    ntc_cate varchar2(50),      -- 1 공지 2 이벤트 3 자주하는 질문(FAQ) ? 
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence notice_seq increment by 1 start with 1;

-- 1:1문의 > 회원 질문
create table inq_qust (
    inq_qust_no number primary key,
    inq_qust_title varchar2(50),
    inq_qust_comm clob,
    inq_qust_cate varchar2(50), -- 1 제품 2 회원 3 주문 4 배송 5 결제 6 반품/교환/취소 99 기타
    inq_qust_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence inq_qust_seq increment by 1 start with 1;

-- 1:1문의 > 관리자 답변
create table inq_answ (
    inq_answ_no number primary key,
    inq_answ_title varchar2(50),
    inq_answ_comm clob,
    inq_answ_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence inq_answ_seq increment by 1 start with 1;

-- 상품Q&A > question
create table pdct_qust (
    pdct_qust_no number primary key,
    pdct_qust_title varchar2(50),
    pdct_qust_comm clob,
    pdct_qust_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence pdct_qust_seq increment by 1 start with 1;

-- 상품Q&A > answer
create table pdct_answ (
    pdct_answ_no number primary key,
    pdct_answ_title varchar2(50),
    pdct_answ_comm clob,
    pdct_answ_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence pdct_answ_seq increment by 1 start with 1;

-- 회원등급, 쿠폰, 상품옵션 은 번외입니다~