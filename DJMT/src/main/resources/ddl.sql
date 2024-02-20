-- 사이트 이름 : DJMT
-- 		(슬로건 : Day of Joy, Miracle Time)

-- 레퍼런스 : 에잇세컨즈

-- 관리자사이트와 회원사이트 별개로 하기
-- 1/2까지 지혜가 큰틀로 에잇세컨즈 화면 비슷하게 짜오면 로직 연결부분은 우리가 붙이기.

-- 한달에 한번은 모여서 합치기.

-- <테이블 목록> : 회원, 관리자, 가게, 상품(카테고리, 상품, 이미지), 주문, 리뷰, 장바구니, 찜, 게시판, 1:1문의, 상품Q&A
img
DROP TABLE IF EXISTS MEMBER;
-- 회원 테이블
CREATE TABLE MEMBER (
	MEM_NO VARCHAR(40) PRIMARY KEY,
	LOGIN_ID VARCHAR(20) unique,
	LOGIN_PW VARCHAR(100),
	role VARCHAR(10), -- 권한(ADMIN,MEMBER 구분 값)
	MEM_NAME VARCHAR(30),
	MEM_ADDR1 VARCHAR(50),
	MEM_ADDR2 VARCHAR(20),
	MEM_STATUS CHAR(1) , -- 회원 상태 :: 1 가입 0 휴면 99 탈퇴?
	MEM_TEL VARCHAR(20),
	MEM_GEN CHAR(1),
	MEM_BIRTH VARCHAR(8),
	MEM_BIRTH_YN CHAR(1),
	MEM_PROFILE VARCHAR(100),
	REG_ID VARCHAR(40), -- 생성한 회원
	REG_DATE VARCHAR(30), -- 생성 날짜
	CHG_ID VARCHAR(40), -- 변경한 회원
	CHG_DATE VARCHAR(30) -- 변경 날짜
);

DROP TABLE IF EXISTS REFRESHTOKEN;
-- 리프레시 토큰 테이블
CREATE TABLE REFRESHTOKEN (
	REFRESHTOKEN_ID varchar(40) primary key,
	REFRESHTOKEN varchar(255) NULL,
	MEM_NO varchar(40) NULL
);
DROP TABLE IF EXISTS MEM_HIST;
-- 회원 로그인 기록 테이브
CREATE TABLE MEM_HIST(
    MEM_NO VARCHAR(40) PRIMARY KEY,
    REG_ID VARCHAR(40),
    LOGIN_DATE VARCHAR(40),
    LOGOUT_DATE VARCHAR(40)
);

DROP TABLE IF EXISTS FILE_META;
CREATE TABLE FILE_META(
	FILE_ID VARCHAR(40) PRIMARY KEY,
	FILE_NAME VARCHAR(40),
	FILE_ORGNAME VARCHAR(40),
	FILE_PATH VARCHAR(40),
	VOL_TYPE VARCHAR(40),
	DEL_YN VARCHAR(3),
	REG_ID VARCHAR(40),
	REG_DATE VARCHAR(40),
	CHG_ID VARCHAR(40),
	CHG_DATE VARCHAR(40)
);

DROP TABLE IF EXISTS FILE_VOLUME;
CREATE TABLE FILE_VOLUME (
	VOL_ID VARCHAR(40) PRIMARY KEY,
	VOL_TYPE VARCHAR(40),
	VOL_PATH VARCHAR(40)
);

DROP TABLE IF EXISTS MERCHANT;
-- 가게 테이블 생성
create table MERCHANT (
    MCT_NO VARCHAR(40) PRIMARY KEY, --시퀀스,
    MCT_ID VARCHAR(40) UNIQUE, --사업자번호,
    MCT_NM VARCHAR(20) unique,
    MCT_TEL VARCHAR(20),
    MCT_ADDR VARCHAR(30),
    MCT_CATE VARCHAR(20), -- 여성,남성,통합,신발,
    MCT_status varchar(20), -- 판매상태 (품절, 판매중지, 판매중, 등등)
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
create sequence MERCHANT_seq increment by 1 start with 1;


DROP TABLE IF EXISTS pdct_CATE;
--카테고리 테이블 생성
create table pdct_CATE (
    pdct_cate_no int ,
    pdct_gen varchar(20), -- 남성, 여성, 공용,
    pdct_cate1 varchar(50) not null, -- 상의, 하의, 신발, 악세서리
    pdct_cate2 varchar(50) , -- 상의세부, 하의세부, 신발세부,악세서리세부
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);
create sequence pdct_CATE_seq increment by 1 start with 1;

DROP TABLE IF EXISTS product;
-- pdct 시퀀스 테이블 생성
create sequence pdct_seq increment by 1 start with 1;

-- pdct 테이블 생성
create table product (
    pdct_no int ,
    pdct_cate_no int,
    pdct_nm varchar(50) unique,
    pdct_price int not null,
    pdct_comm varchar(512) not null,
    pdct_amt int, -- 수량
    pdct_status varchar(10), -- 판매상태 (품절, 판매중지, 판매중, 등등)
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);

create sequence pdct_img_seq increment by 1 start with 1;

-- 이미지 테이블 생성
create table pdct_img(
    pdct_img_no int primary key,
    pdct_no int,
    pdct_img1 varchar(512),
    pdct_img2 varchar(512),
    pdct_img3 varchar(512),
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);

create sequence pdct_CATE_seq increment by 1 start with 1;

create table pdct_CATE (
    pdct_cate_no int ,
    pdct_gen varchar(20), -- 남성, 여성, 공용,
    pdct_cate1 varchar(50) not null, -- 상의, 하의, 신발, 악세서리
    pdct_cate2 varchar(50), -- 상의세부, 하의세부, 신발세부,악세서리세부
    REG_ID VARCHAR(40),
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40) -- 변경 
);

-- orders 시퀀스 테이블 생성
create sequence pdct_order_seq increment by 1 start with 1;

DROP TABLE IF EXISTS pdct_order;
-- orders 테이블 생성
create table pdct_order(
	ord_no int DEFAULT nextval('pdct_order_seq') primary key,
	MEM_NO VARCHAR(40) ,
	pdct_no int ,
	ord_cnt int not null,
	ord_stat varchar(50) not null, -- 배송상태(결제취소, 결제완료, 배송중, 배송완료, 교환, 환불)
	ord_addr varchar(255) not null, -- 추가 기존 회원 기본배송지를 수정해서 주문할수 있도록
	ord_nm varchar(20) not null, -- 추가 기존 회원 이름을 수정해서 받을 사람 입력해서 주문할수 있도록
	ord_date date,
	ord_edate date
);

DROP TABLE IF EXISTS review;
-- reviews 테이블 생성
create table review (
    rv_no int primary key,
    ord_no int ,
    MEM_NO int ,
    pdct_no int ,
    rv_title varchar(255) not null,
    rv_comm varchar(512),
    rv_status char(1),
    rv_score int not null,
    rv_date date,
    CHG_DATE VARCHAR(20) -- 변경 날짜
);
-- reviews 시퀀스 테이블 생성
create sequence review_seq increment by 1 start with 1;

DROP TABLE IF EXISTS cart;
-- 240209 미르 장바구니 테이블
create sequence cart_seq increment by 1 start with 1;

create table cart(
	cart_no int DEFAULT nextval('cart_seq'),
	cart_amt int,
	pdct_no int,
	mem_no varchar(40),
	reg_date varchar(30),
	chg_date varchar(30),
	stat_cd int DEFAULT 1
);

DROP TABLE IF EXISTS wish;
-- 찜 테이블
create table wish (
    wsh_no int primary key,
    pdct_no int ,
    MEM_NO int 
);
create sequence wish_seq increment by 1 start with 1;

DROP TABLE IF EXISTS notice;
-- 게시판 테이블
create table notice (
    ntc_no int primary key,
    ntc_title varchar(50),
    ntc_comm varchar(512),
    ntc_status char(1) default '1',
    ntc_cate varchar(50),      -- 1 공지 2 이벤트 3 자주하는 질문(FAQ) ? 
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence notice_seq increment by 1 start with 1;

DROP TABLE IF EXISTS inq_qust;
-- 1:1문의 > 회원 질문
create table inq_qust (
    inq_qust_no int primary key,
    inq_qust_title varchar(50),
    inq_qust_comm varchar(512),
    inq_qust_cate varchar(50), -- 1 제품 2 회원 3 주문 4 배송 5 결제 6 반품/교환/취소 99 기타
    inq_qust_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence inq_qust_seq increment by 1 start with 1;

DROP TABLE IF EXISTS inq_answ;
-- 1:1문의 > 관리자 답변
create table inq_answ (
    inq_answ_no int primary key,
    inq_answ_title varchar(50),
    inq_answ_comm varchar(512),
    inq_answ_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence inq_answ_seq increment by 1 start with 1;

DROP TABLE IF EXISTS pdct_qust;
-- 상품Q&A > question
create table pdct_qust (
    pdct_qust_no int primary key,
    pdct_qust_title varchar(50),
    pdct_qust_comm varchar(512),
    pdct_qust_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence pdct_qust_seq increment by 1 start with 1;

DROP TABLE IF EXISTS pdct_answ;
-- 상품Q&A > answer
create table pdct_answ (
    pdct_answ_no int primary key,
    pdct_answ_title varchar(50),
    pdct_answ_comm varchar(512),
    pdct_answ_status char(1) default '1',        -- 1 게시 9 삭제
    REG_ID VARCHAR(40),     -- 등록한 회원
    REG_DATE VARCHAR(20), -- 생성 날짜
    CHG_DATE VARCHAR(20), -- 변경 날짜
    CHG_ID VARCHAR(40)     -- 변경한 회원
);
create sequence pdct_answ_seq increment by 1 start with 1;

-- 회원등급, 쿠폰, 상품옵션 은 번외입니다~