import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Product from "../../components/Product.jsx";
import Welcome from "../../components/Welcome.jsx";
import Data from "../../components/Data.jsx";

function Home() {
  const data = Data;
  return (
    <>
      <div className="home">
        <div className="visual">
          <Swiper
            modules={[Navigation, Autoplay]}
            speed={1000}
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <img src="/images/home/visual02.jpg" alt="비주얼02" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/home/visual03.jpg" alt="비주얼03" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/home/visual04.jpg" alt="비주얼04" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/home/visual01.jpg" alt="비주얼01" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="best-product">
          <div className="inner">
            <h2>BEST PRODUCT</h2>
            <ul className="item">
              <li>
                <Link to={"/productDetail"}>
                  <div className="item-img">
                    <img src="/images/home/best-item-01.jpg" alt="" />
                  </div>
                  <div className="item-info">
                    <h3>비스코스 골지 니트 가디건</h3>
                    <p>
                      <span className="percentage">20%</span> 279,200원{" "}
                      <span>349,000원</span>
                    </p>
                  </div>
                  <div className="num">1</div>
                </Link>
              </li>
              <li>
                <Link to={"/productDetail"}>
                  <div className="item-img">
                    <img src="/images/home/best-item-02.jpg" alt="" />
                  </div>
                  <div className="item-info">
                    <h3>볼드버튼 니트 가디건</h3>
                    <p>349,000원</p>
                  </div>
                  <div className="num">2</div>
                </Link>
              </li>
              <li>
                <Link to={"/productDetail"}>
                  <div className="item-img">
                    <img src="/images/home/best-item-03.jpg" alt="" />
                  </div>
                  <div className="item-info">
                    <h3>팬시 카라 코튼 셔츠</h3>
                    <p>
                      <span className="percentage">7%</span> 352,470원{" "}
                      <span>379,000원</span>
                    </p>
                  </div>
                  <div className="num">3</div>
                </Link>
              </li>
              <li>
                <Link to={"/productDetail"}>
                  <div className="item-img">
                    <img src="/images/home/best-item-01.jpg" alt="" />
                  </div>
                  <div className="item-info">
                    <h3>Jane Cardigan</h3>
                    <p>
                      <span className="percentage">5%</span> 436,050원{" "}
                      <span>459,000원</span>
                    </p>
                  </div>
                  <div className="num">4</div>
                </Link>
              </li>
              <li>
                <Link to={"/productDetail"}>
                  <div className="item-img">
                    <img src="/images/home/best-item-02.jpg" alt="" />
                  </div>
                  <div className="item-info">
                    <h3>퍼프 진주 케이블 니트</h3>
                    <p>345,000원</p>
                  </div>
                  <div className="num">5</div>
                </Link>
              </li>
            </ul>
            <div className="more">
              <Link to={"/ProductList"}>VIEW MORE +</Link>
            </div>

            <div className="App">
              <Welcome />
              {data.map((item) => {
                return (
                  <div key={item}>
                    <Product data={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
