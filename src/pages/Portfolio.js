import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";

const Portfolio = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <section className="portfolio scroll">
      <div className="inner">
        {/* 개발담당자 : 팀프로젝트, 개인 작업(5개 목표(퍼블리싱 > 프론트)) */}
        <h2 className="text-2xl" data-aos="fade-up">
          Portfolio
        </h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="portfolio-box">
            <h3 data-aos="fade-up" className="pb-3">
              Team Project
            </h3>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <video src={`${path}/images/kyobo.mp4`} autoPlay muted></video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list pt-3">
                  <li className="font-extrabold pb-9">
                    <span className="text-teal-800 name">
                      {" "}
                      &#32; 교보문고 미니 프로젝트
                    </span>
                  </li>
                  <li>
                    기간 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 2022.12.16 - 12.23
                    </span>
                  </li>
                  <li>
                    주제 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 온라인 "교보문고"를 기반으로 한 웹앱 기획, 구현
                    </span>
                  </li>
                  <li>
                    기여도 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 문서 작업 및 정리{" "}
                    </span>
                  </li>
                  <li>
                    도구 |<span className="text-teal-800"> &#32; VSCD </span>
                  </li>
                  <li>
                    사용언어 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; JavaScript, CSS, HTML
                    </span>
                  </li>
                  <li>
                    PPT |
                    <a
                      href="https://www.canva.com/design/DAFVcveQRHo/cwL2a33OMBFDGWFSv4Ax7g/view?utm_content=DAFVcveQRHo&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; PPT
                    </a>
                  </li>
                  <li>
                    프로젝트 Git |
                    <a
                      href="https://github.com/haglass/kyobo"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; GitHub
                    </a>
                  </li>
                  <li>
                    프로젝트 노션 |
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/Front-Backend-4-5b9f08f249aa4cb1b71dad45c8b29aae"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <video src={`${path}/images/damhwa.mp4`} autoPlay muted></video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list pt-14">
                  <li className="text-2xl pb-9">
                    <span className="text-teal-800 name">
                      {" "}
                      &#32; 프론트엔드&백엔드 협업 프로젝트 1차
                    </span>
                  </li>
                  <li>
                    기간 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 2022.12.26-2023.02.06
                    </span>
                  </li>
                  <li>
                    주제 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 주류 판매 사이트를 벤치마킹해 배달/주문 사이트를
                      기획
                    </span>
                  </li>
                  <li>
                    기여도 |<span className="text-teal-800">&#32; 정리</span>
                  </li>
                  <li>
                    도구 |<span className="text-teal-800">&#32; VSCD</span>
                  </li>
                  <li>
                    사용언어 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; JavaScript, CSS, HTML
                    </span>
                  </li>
                  <li>
                    PPT |
                    <a
                      href="https://www.canva.com/design/DAFZY_ZS-8k/SO_UxXDmOtsy-EmzM1tiCA/view?utm_content=DAFZY_ZS-8k&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; PPT
                    </a>
                  </li>
                  <li>
                    Git |
                    <a
                      href="https://github.com/devparkse/damhwamarket"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; GitHub
                    </a>
                  </li>
                  <li>
                    노션 |
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/FB-1-50dbb3df74e040c394809ad8e97b4927"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <video
                  src={`${path}/images/dietdiary.mp4`}
                  autoPlay
                  muted
                ></video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list pt-14">
                  <li className="text-2xl pb-9">
                    <span className="text-teal-800 name">
                      {" "}
                      &#32; 프론트엔드&백엔드 협업 프로젝트 2차
                    </span>
                  </li>
                  <li>
                    기간 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 2023.02.07 - 03.06
                    </span>
                  </li>
                  <li>
                    주제 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 식단 일정 관리와 약 복용, 음수량을 함께 관리하는
                      웹앱 기획
                    </span>
                  </li>
                  <li>
                    기여도 |<span className="text-teal-800"> &#32; 정리</span>
                  </li>
                  <li>
                    도구 |<span className="text-teal-800">&#32; VSCD</span>
                  </li>
                  <li>
                    사용언어 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; JavaScript, CSS, HTML
                    </span>
                  </li>
                  <li>
                    PPT |
                    <a
                      href="https://www.canva.com/design/DAFbRzBmpBs/9FerCBM9v34pvhpQmTVrIQ/view?utm_content=DAFbRzBmpBs&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; PPT
                    </a>
                  </li>
                  <li>
                    Git |
                    <a
                      href="https://github.com/gaeguriBanchan/dietdiary"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; GitHub
                    </a>
                  </li>
                  <li>
                    노션 |
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/FB-2-f38a7855136541aead470c7564569812"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-team">
              <div className="portfolio-left">
                <video src={`${path}/images/lms.mp4`} autoPlay muted></video>
              </div>
              <div className="portfolio-right">
                <ul className="portfilio-team-list pt-14">
                  <li className="text-2xl pb-9">
                    <span className="text-teal-800 name mb-7">
                      {" "}
                      &#32; 프론트엔드&백엔드 협업 프로젝트 3차
                    </span>
                  </li>
                  <li>
                    기간 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 2023.03.08 - 04.04
                    </span>
                  </li>
                  <li>
                    주제 |
                    <span className="text-teal-800">
                      {" "}
                      &#32; 대학교 학습 관리 시스템-단과대학의 LMS 기획
                    </span>
                  </li>
                  <li>
                    기여도 |<span className="text-teal-800"> &#32; 정리</span>
                  </li>
                  <li>
                    도구 |<span className="text-teal-800">&#32; VSCD</span>
                  </li>
                  <li>
                    사용언어 |
                    <span className="text-teal-800">
                      {" "}
                      &#32;TypeScript, JavaScript, CSS, HTML
                    </span>
                  </li>
                  <li>
                    PPT |
                    <a
                      href=""
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; PPT
                    </a>
                  </li>
                  <li>
                    Git |
                    <a
                      href="https://github.com/HumanJSEngine/project_LMS"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32;GitHub
                    </a>
                  </li>
                  <li>
                    노션 |
                    <a
                      href="https://tourmaline-atlasaurus-77b.notion.site/FB-3-ad0c735c327340c68b348c997b347947"
                      className="text-indigo-800 underline underline-offset-4"
                    >
                      {" "}
                      &#32; Notion
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box pt-7">
            <h3 className="pb-3">Study Project</h3>
            {/* Swiper 배치 */}
            <Swiper
              className="portfolio-slide"
              loop={true}
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
                  href="https://github.com/hj-over/hansalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/hansalim.PNG`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://hj-over.github.io/STX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/stx.PNG`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://github.com/hj-over/hyundai-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/hyundai.PNG`} alt="portfolio" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://github.com/hj-over/Todo"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="portfolio"
                >
                  <img src={`${path}/images/todo.PNG`} alt="portfolio" />
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
