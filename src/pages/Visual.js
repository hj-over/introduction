import React, { useRef } from "react";
import Anime from "../assets/Anime";

const Visual = () => {
  const path = process.env.PUBLIC_URL;
  const style = {
    // width: 100,
    // height: 100,
    // background: "green",
    // position: "absolute",
    // left: 100,
    // top: 100,
  };
  const box = useRef(null);
  return (
    <div className="visual scroll">
      <div className="inner flex justify-between ">
        {/* 첫인상 남기기(사진/대표단어 ) */}
        <img
          src={`${path}/images/me.jpg`}
          alt="visual"
          style={{ width: "550px", height: "700px" }}
        />
        <p
          className="text-[48px] text-teal-700 text-right"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="600"
          style={{ width: "600px", height: "700px" }}
        >
          Publisher & Frontend Developer
          <br />
          <span className="text-[38px] opacity-70">
            동물과 책을 사랑하는 퍼블리셔 <br />
            이효정입니다.
          </span>
          <span className="flex justify-end">
            <img
              src={`${path}/images/write_icon.png`}
              alt="book"
              className="w-16 h-16"
              onClick={() => {
                <a href=""></a>;
              }}
              style={{ cursor: "pointer" }}
            />
          </span>
        </p>
        {/* Anime 샘플 */}
        <div
          ref={box}
          className="box"
          style={style}
          onClick={(e) => {
            // 애니메이션 대상, 옵션
            // new Anime(e.target, {
            //   prop: "left",
            //   value: 400,
            //   duration: 500,
            // });
            // new Anime(window, {
            //   prop: "scroll",
            //   value: 2000,
            //   duration: 1500,
            // });
            new Anime(box.current, {
              prop: "left",
              value: 400,
              duration: 500,
              callback: () => {
                new Anime(box.current, {
                  prop: "top",
                  value: 400,
                  duration: 500,
                  callback: () => {
                    alert("완료");
                  },
                });
              },
            });
          }}
        ></div>
      </div>
    </div>
  );
};

export default Visual;
