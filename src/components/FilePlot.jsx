import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

const defaultOptions = {
  chart: {
    height: 500,
    width: 700
  },
  title: {
    text: "My chart"
  }
};

const FilePlot = (props) => {
  const { data } = props;
  const [options, setOptions] = React.useState({
    ...defaultOptions,
    series: [
      {
        data: []
      }
    ]
  });

  React.useEffect(() => {
    setOptions({
      ...defaultOptions,
      series: [
        {
          data
        }
      ]
    });
  }, [data]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
export default FilePlot;
