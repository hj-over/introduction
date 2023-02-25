import React from "react";
import Piechart from "../assets/Piechart";

const Profile = () => {
  return (
    <section className="profile scroll">
      <div className="inner">
        {/*자기소개: 약력, 학력, 업무, 교육, 성격, MBTI */}
        <h2 className="text-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Profile
        </h2>
        <div className="contents">
          <div className="profile-box ">
            <Piechart />
            <img src="images/profile_1.png" alt="" />
          </div>
          <div className="profile-box">
            <img src="images/profile_2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
