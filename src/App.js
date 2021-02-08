import "./App.css";
import AreaChart from "./components/AreaCharts";
import { useEffect, useState } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import momentJalali from "moment-jalaali";
import moment from "moment";

function App() {
  const [data, setData] = useState([]),
    [persianMode, setPersianMode] = useState(true),
    [exportable, setExportable] = useState(true),
    [timerange, setTimerange] = useState("currDay"),
    [color, setColor] = useState("#e22521"),
    // data = [
    //   {
    //     date: "2021-02-07",
    //     jalaliDate: "1399-11-19",
    //     value: 1025,
    //   },
    //   {
    //     date: "2021-02-08",
    //     jalaliDate: "1399-11-20",
    //     value: 555,
    //   },
    // ],
    generateChartData = () => {
      let chartData = [];
      // current date
      let firstDate = new Date();
      // now set 500 minutes back
      firstDate.setMinutes(firstDate.getDate() - 500);

      // and generate 500 data items
      let visits = 500;
      for (var i = 0; i < 500; i++) {
        let newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        // add data item to the array
        chartData.push({
          date: newDate,
          visits: visits,
        });
      }
      return chartData;
    },
    getDateByTimeRange = (timeRange = "month", properties) => {
      const now = persianMode ? momentJalali : moment;
      properties = properties.split(",");
      const container = [];
      const startMonth = now().startOf(persianMode ? "jMonth" : "month");
      const startYear = now().startOf(persianMode ? "jYear" : "year");
      console.log(startYear);
      const startWeek = now().startOf("week");
      const startDay = now().startOf("day");
      const dateFormat = "YYYY-MM-DD";
      const jalaliDateFormat = "jYYYY-jMM-jDD";
      const timeFormat = "HH:mm:ss";
      const datetimeFormat = `${dateFormat} ${timeFormat}`;
      let index = 0;
      switch (timeRange) {
        case "currYear":
          for (index = 0; index < 365; index++) {
            container.push({
              [properties[0]]: startYear.format(dateFormat),
              [properties[1]]: Math.floor(Math.random() * 5000),
              jalaliDate: startYear.format(jalaliDateFormat),
            });
            startYear.add(1, "day");
          }
          console.log(container);
          break;
        case "currDay":
          for (index = 0; index < 1440; index++) {
            container.push({
              [properties[0]]: startDay.format(datetimeFormat),
              [properties[1]]: Math.floor(Math.random() * 5000),
              jalaliDate: startDay.format(timeFormat),
            });
            startDay.add(15, "minute");
          }
          break;
        case "currWeek":
          for (index = 0; index < 7; index++) {
            container.push({
              [properties[0]]: startWeek.format(dateFormat),
              [properties[1]]: Math.floor(Math.random() * 5000),
              jalaliDate: startWeek.format(jalaliDateFormat),
            });
            startWeek.add(1, "day");
          }
          break;
        default:
          const daysInMonth = now().daysInMonth();
          for (index = 0; index < daysInMonth; index++) {
            container.push({
              [properties[0]]: startMonth.format(dateFormat),
              [properties[1]]: Math.floor(Math.random() * 5000),
              jalaliDate: startMonth.format(jalaliDateFormat),
            });
            startMonth.add(1, "day");
          }
          break;
      }
      console.log(container);
      return container;
    };

  useEffect(() => {
    const data = getDateByTimeRange(timerange, "date,value");
    setData(data);
  }, []);
  return (
    <div className="app">
      <input
        type="checkbox"
        value={persianMode}
        onChange={({ target }) => setPersianMode(target.checked)}
        checked={persianMode}
      />
      Perisan Mode
      <input
        type="checkbox"
        value={exportable}
        onChange={({ target }) => setExportable(target.checked)}
        checked={exportable}
      />
      Exportable
      <select
        value={timerange}
        onChange={({ target }) => setTimerange(target.value)}
      >
        <option value="currDay">روز جاری</option>
        <option value="currWeek">هفته جاری</option>
        <option value="currMonth">ماه جاری</option>
        <option value="currYear">سال جاری</option>
      </select>
      <AreaChart
        data={data}
        timeRange={"hour"}
        id="persian-chart"
        className={"persian-area-chart"}
        seriesTooltipTitle={"تعداد بازدید"}
        persianMode={persianMode}
        exportable={exportable}
        timeRange={timerange}
      />
    </div>
  );
}

export default App;
