import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Piechart = () => {
  const handle = {
    padClick: (data) => {
      console.log(data);
    },
    legendClick: (data) => {
      console.log(data);
    },
  };
  return (
    <div style={{ width: "380px", height: "300px" }} className="justify-center">
      <ResponsivePie
        /**
         * chart에 사용될 데이터
         */
        data={[
          { id: "TypeScript", value: 5 },
          { id: "HTML", value: 25 },
          { id: "Tailwind", value: 15 },
          { id: "CSS", value: 25 },
          { id: "JS", value: 20 },
        ]}
        /**
         * chart margin
         */
        margin={{ top: 0, right: 35, bottom: 80, left: 30 }}
        /**
         * chart 중간 빈공간 반지름
         */
        innerRadius={0.7}
        /**
         * pad 간격
         */
        padAngle={1.8}
        /**
         * pad radius 설정 (pad별 간격이 있을 시 보임)
         */
        cornerRadius={8}
        /**
         * chart 색상
         */
        colors={["#34d399", "#5eead4", "#14b8a6", "#86efac", "#0f766e"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * pad border 두께 설정
         */
        borderWidth={0}
        /**
         * link label skip할 기준 각도
         */
        arcLinkLabelsSkipAngle={0}
        /**
         * link label 색상
         */
        arcLinkLabelsTextColor="none"
        /**
         * link label 연결되는 선 두께
         */
        arcLinkLabelsThickness={0}
        /**
         * link label 연결되는 선 색상
         */
        arcLinkLabelsColor={"none"} // pad 색상에 따라감
        /**
         * label (pad에 표현되는 글씨) skip할 기준 각도
         */
        arcLabelsSkipAngle={10}
        theme={{
          /**
           * label style (pad에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 0,
            },
          },
        }}
        /**
         * pad 클릭 이벤트
         */
        onClick={handle.padClick}
        /**
         * legend 설정 (default로 하단에 있는 색상별 key 표시)
         */
        legends={[
          {
            anchor: "bottom-center",
            direction: "row",
            justify: false,
            translateX: -15,
            translateY: 250,
            itemsSpacing: -13,
            itemWidth: 90,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 17,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Piechart;
