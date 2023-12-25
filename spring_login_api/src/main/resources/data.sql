-- 사용자 table

create table TB_MEMBER (
MEM_NO VARCHAR(40) PRIMARY KEY,
LOGIN_ID VARCHAR(20) unique,
LOGIN_PW VARCHAR(100),
role VARCHAR(10),
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
CHG_ID VARCHAR(40) -- 변경
);


-- 리프레시 토큰 table

CREATE TABLE TB_REFRESHTOKEN (
REFRESHTOKEN_ID varchar(40) primary key,
REFRESHTOKEN varchar(150) NULL,
KEY_ID varchar(40) NULL
);
