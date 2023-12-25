import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" role="contentinfo">
        <div className="footer__inner">
          <div className="footer__text">
            <span>webstoryboy</span>
            <span>© webs</span>
          </div>
          <div className="footer__info">
            <div className="left">
              <div className="title">
                <a href="/join">sign up</a>
              </div>
              <p>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
            </div>
            <div className="right">
              <h3>social</h3>
              <ul>
                <li>
                  <a href="https://www.youtube.com/@Webstoryboy">youtube</a>
                  <em>유튜브에 오시면 더 많은 강의를 볼 수 있습니다.</em>
                </li>
                <li>
                  <a href="https://github.com/webstoryboy">github</a>
                  <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
                </li>
                <li>
                  <a href="https://webstoryboy.co.kr">tistory</a>
                  <em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
                </li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq">
                    gsap
                  </a>
                  <em>GSAP를 공부하시고 오면 도움이 됩니다.</em>
                </li>
                <li>
                  <a href="https://github.com/webstoryboy/port2023-vite">
                    vite
                  </a>
                  <em>비트 강의도 곧 오픈 예정입니다.</em>
                </li>
                <li>
                  <a href="https://github.com/webstoryboy/port2023-react">
                    react
                  </a>
                  <em>리액트 강의도 곧 오픈 예정입니다.</em>
                </li>
                <li>
                  <a href="https://github.com/webstoryboy/port2023-vue">vue</a>
                  <em>뷰 강의도 곧 오픈 예정입니다.</em>
                </li>
                <li>
                  <a href="https://github.com/webstoryboy/port2023-next">
                    next
                  </a>
                  <em>넥스트 강의도 곧 오픈 예정입니다.</em>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            © 2023 webstoryboy
            <br />이 사이트는 비트를 이용하여 제작하였습니다.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
