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
      <div className="inner">
        {/* 첫인상 남기기(사진/대표단어 ) */}
        <img
          src={`${path}/images/monet4.png`}
          alt="visual"
          style={{ width: "473px", height: "600px" }}
        />
        <p className="text-[50px] text-white opacity-80 text-center">
          {/* 많이 배우고 싶은
          <br /> 이효정입니다 */}
        </p>
        {/* <img src="/images/visual.png" alt="visual" /> */}
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
