import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";

const Portfolio = () => {
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2 className="text-xl" data-aos="fade-up">
          Portfolio
        </h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <h3 data-aos="fade-up">Team Project</h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="https://github.com/hj-over/hansalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/team.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : 교보문고 미니 프로젝트 </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>
                    프로젝트 노션 :{" "}
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/Front-Backend-4-5b9f08f249aa4cb1b71dad45c8b29aae"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/team.png" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : 협업 프로젝트 1차</li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>
                    프로젝트 노션 :{" "}
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/FB-1-50dbb3df74e040c394809ad8e97b4927"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      Notion
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : 협업 프로젝트 2차</li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>
                    프로젝트 노션 :{" "}
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/FB-2-f38a7855136541aead470c7564569812"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="project" />
                </a>
                (이미지 클릭시 프로젝트 페이지로 이동합니다.)
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list">
                  <li>프로젝트명 : </li>
                  <li>프로젝트 기간 : </li>
                  <li>프로젝트 주제 : </li>
                  <li>프로젝트 기여도 : </li>
                  <li>프로젝트 도구 : </li>
                  <li>프로젝트 사용언어 : </li>
                  <li>프로젝트 피그마 : </li>
                  <li>프로젝트 Git : </li>
                  <li>프로젝트 노션 : </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box">
            <h3>Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              className="portfolio-slide"
              loop={true}
              slidesPerView={3}
              spaceBetween={30}
              pagination={true}
              breakpoints={{
                860: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                960: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation]}
              navigation={true}
            >
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src="images/tablecat.jpg" alt="portfolio" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
