import React from "react";
import Piechart from "../assets/Piechart";

const Profile = () => {
  return (
    <section className="profile scroll">
      <div className="inner">
        {/*자기소개: 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2
          className="text-xl"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
        >
          Profile
        </h2>
        <div className="contents">
          <div className="profile-box flex">
            <Piechart />
          </div>
          <div className="profile-box">
            <span
              className="monet5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <p
                className="flex justify-center text-center font-bold text-xl text-gray-100 pt-20 pb-7"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="200"
              >
                Publisher
              </p>
              <p
                className="font-medium text-lg text-gray-100"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="300"
              >
                활자를 사랑하는 퍼블리셔 <br /> 숨겨진 컨텍스트를 읽어냅니다
              </p>
            </span>
          </div>
        </div>
        <div className="inner mt-10">
          <p className="font-semibold text-xl">Experiences</p>
          <br />
          <li className="text-lg">
            &#183; 한경대학교 미디어문예창작학과(수료, 졸업예정)
          </li>
          <li className="text-lg">&#183; 그린 컴퓨터 학원</li>
          <li className="">
            &#45; 기업 요구를 반영한 프로젝트 중심 프론트엔드 React(리액트)
            개발자 양성
          </li>
        </div>
      </div>
    </section>
  );
};

export default Profile;
