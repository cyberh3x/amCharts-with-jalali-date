import "./App.css";
import AreaChart from "./components/AreaCharts";
import { useEffect, useState } from "react";
import { fakeChartData } from "./utils/Data";

function App() {
  const [data, setData] = useState([]),
    [persianMode, setPersianMode] = useState(true),
    [exportable, setExportable] = useState(true),
    [timerange, setTimerange] = useState("currMonth"),
    [color, setColor] = useState("#e22521"),
    [key, setKey] = useState(1),
    properties = "date,value",
    resetData = async () => {
      const data = await fakeChartData(timerange, properties, persianMode);
      setData(data);
      const generateNewKey = Math.floor(Math.random() * 1000);
      setKey(generateNewKey);
    };

  useEffect(() => {
    resetData();
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
      Exportable Time Range:
      <select
        value={timerange}
        onChange={({ target }) => setTimerange(target.value)}
      >
        <option value="currDay">Current Day</option>
        <option value="currWeek">Current Week</option>
        <option value="currMonth">Current Month</option>
        <option value="currYear">Current Year</option>
      </select>
      {"   "}
      <button type="button" onClick={resetData}>
        Reset Data
      </button>
      <AreaChart
        key={key}
        data={data}
        timeRange={timerange}
        id="persian-chart"
        className={"persian-area-chart"}
        seriesTooltipTitle={"تعداد بازدید"}
        persianMode={persianMode}
        exportable={exportable}
      />
    </div>
  );
}

export default App;
