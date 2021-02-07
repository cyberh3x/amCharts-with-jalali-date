import logo from "./logo.svg";
import "./App.css";
import AreaChart from "./components/AreaCharts";

function App() {
  const data = [
    {
      date: "2021-02-07",
      jalali: "1399-11-19",
      value: 1025,
    },
    {
      date: "2021-02-08",
      jalali: "1399-11-20",
      value: 555,
    },
  ];
  return (
    <div className="App">
      <AreaChart
        data={data}
        timeRange={"hour"}
        id="persian-chart"
        className={"persian-area-chart"}
        seriesTooltipTitle={"تعداد بازدید"}
      />
    </div>
  );
}

export default App;
