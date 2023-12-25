-- 사이트 이름 : DJMT
-- 		(슬로건 : Day of Joy, Miracle Time)

-- 레퍼런스 : 에잇세컨즈

-- 관리자사이트와 회원사이트 별개로 하기
-- 1/2까지 지혜가 큰틀로 에잇세컨즈 화면 비슷하게 짜오면 로직 연결부분은 우리가 붙이기.

-- 한달에 한번은 모여서 합치기.

-- <테이블 목록> : 회원, 관리자, 가게, 상품(카테고리, 상품, 이미지), 주문, 리뷰, 장바구니, 찜, 게시판, 1:1문의, 상품Q&A
-- 회원 테이블
create table TB_MEMBER (
MEM_NO VARCHAR(40) PRIMARY KEY,
LOGIN_ID VARCHAR(20) unique,
LOGIN_PW VARCHAR(20),
MEM_NAME VARCHAR(30),
MEM_ADDR1 VARCHAR(20),
MEM_ADDR2 VARCHAR(20),
MEM_PHONE VARCHAR(20),
MEM_GEN CHAR(1),
MEM_BIRTH VARCHAR(8),
MEM_BIRTH_YN CHAR(1),
REG_ID VARCHAR(40),
REG_DATE VARCHAR(20), -- 생성 날짜
CHG_DATE VARCHAR(20), -- 변경 날짜
CHG_ID VARCHAR(40), -- 변경
);

	create table TB_MEMBER_HISTORY(
		MEM_NO VARCHAR(40),
		REG_ID VARCHAR(40),
		LOGIN_DATE VARCHAR(20)
		LOGOUT_DATE VARCHAR(20)
		);

	-- 관리자 테이블(회원 테이블 복붙)
	create table TB_ADMIN (
		ADMIN_NO VARCHAR(40) PRIMARY KEY, 
		ADMIN_ID VARCHAR(20) unique,
		ADMIN_PW VARCHAR(20),
		ADMIN_NAME VARCHAR(30),
		ADMIN_ADDR1 VARCHAR(20),
		ADMIN_ADDR2 VARCHAR(20),
		ADMIN_PHONE VARCHAR(20),
		ADMIN_GEN CHAR(1),
		ADMIN_BIRTH VARCHAR(8),
		ADMIN_BIRTH_YN CHAR(1),
		REG_ID VARCHAR(40),
		REG_DATE VARCHAR(20), -- 생성 날짜
		CHG_DATE VARCHAR(20), -- 변경 날짜
		CHG_ID VARCHAR(40), -- 변경 
	);

	create table TB_ADMIN_HISTORY(
		ADMIN_NO VARCHAR(40),
		REG_ID VARCHAR(40),
		LOGIN_DATE VARCHAR(20)
		LOGOUT_DATE VARCHAR(20)
		);


	-- 가게 테이블 생성
	create table merchant (
		MCT_NO VARCHAR(40) PRIMARY KEY, --시퀀스,
		MCT_ID VARCHAR(40) UNIQUE, --사업자번호,
		MCT_NM VARCHAR(20) unique,
		MCT_TEL VARCHAR(20),
		MCT_ADDR VARCHAR(30),
		MCT_CATE VARCHAR(20), -- 여성,남성,통합,신발
		reg_date VARCHAR(20),
		upd_date VARCHAR(20),
		mgr_no CHAR(1)
	);


	--카테고리 테이블 생성
	create table pdct_cate(
		pdct_no,
		i_gender varchar2(20), -- 남성, 여성, 공용,
		i_category1 varchar2(50) not null, -- 상의, 하의, 신발, 악세서리
		i_category2 varchar2(50) not null, -- 상의세부, 하의세부, 신발세부,악세서리세부
	};

	-- item 테이블 생성
	create table pdct(
		pdct_no number primary key,
		i_name varchar2(50) unique,
		i_price number not null,
		i_comm clob not null,
		pdct_amt, -- 수량
		pdct_stat -- 판매상태 (품절, 판매중지, 판매중, 등등)
	);
	-- item 시퀀스 테이블 생성
	create sequence item_seq increment by 1 start with 1;

	-- 이미지 테이블 생성
	create table pdct_img(
		pdct_no number,
		img1 varchar2(50),
		img2 varchar2(50),
		img3 varchar2(50),
		reg_date date,
		upd_date date,
		mgr_no number
	);


	-- orders 테이블 생성
	create table orders(
		ord_no number primary key,
		MEM_NO number,
		i_no number,
		ord_count number not null,
		i_status varchar2(50) not null, --배송상태(결제취소, 결제완료, 배송중, 배송완료, 교환, 환불)
		ord_address varchar2(255) not null, -- 추가 기존 회원 기본배송지를 수정해서 주문할수 있도록
		ord_name varchar2(20) not null, -- 추가 기존 회원 이름을 수정해서 받을 사람 입력해서 주문할수 있도록
		ord_date date,
		ord_edate date
	);

	-- orders 시퀀스 테이블 생성
	create sequence orders_seq increment by 1 start with 1;


	-- reviews 테이블 생성
	create table reviews(
		r_no number primary key,
		ord_no number,
		MEM_NO number,
		i_no number,
		r_name varchar2(255) not null,
		r_comm clob,
		r_score number not null,
		r_date date not null
	);

	-- reviews 시퀀스 테이블 생성
	create sequence reviews_seq increment by 1 start with 1;


	-- 장바구니 테이블 생성
	create table basket(
		b_num number primary key,
		MEM_NO number,
		pdct_no number,
		pdct_amt number not null
	);

	-- 장바구니 시퀀스 테이블 생성
	create sequence basket_seq increment by 1 start with 1;

	-- 찜 테이블
	create table wlist (
		wsh_no,
		pdct_no,
		MEM_NO
	);

	-- 게시판 테이블
	미르가 짬

	-- 1:1문의
	미르가 짬

	-- 상품Q&A
	미르가 짬

-- 회원등급, 쿠폰, 상품옵션 은 번외입니다~