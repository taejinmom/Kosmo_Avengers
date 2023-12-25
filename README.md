# Kosmo_Avengers

- 사이트 이름 : DJMT -- (슬로건 : Day of Joy, Miracle Time)
- 레퍼런스 : 에잇세컨즈
- 관리자사이트와 회원사이트 별개로 하기 -- 1/2까지 지혜가 큰틀로 에잇세컨즈 화면 비슷하게 짜오면 로직 연결부분은 우리가 붙이기.
- 한달에 한번은 모여서 합치기.
- 테이블은 backend -> resource 폴더에 ddl.sql 파일에 적어둠.

## 2023.12.25 로그인,회원가입까지..

- 로그인 시 accessToken, refreshToken 발급
- refreshToken 검증 후 accessToken 재발급은 react에서 핸들링하도록 수정해야 함.
- settings - live Templates - add group
  ```
  /**
  * description    : $MEMO$
  * $DATE$   by  taejin
  */
  ```
