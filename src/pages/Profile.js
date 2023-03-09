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
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Profile
        </h2>
        <div className="contents">
          <div className="profile-box flex">
            <Piechart />
          </div>
          <div className="profile-box">
            <span className="monet5">
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
      </div>
    </section>
  );
};

export default Profile;
