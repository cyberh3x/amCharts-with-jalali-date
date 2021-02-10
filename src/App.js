import "./App.css";
import AreaChart from "./components/AreaCharts";
import { useEffect, useState } from "react";
import { fakeChartData } from "./components/utils/Data";

function App() {
  const [data, setData] = useState([]),
    [persianMode, setPersianMode] = useState(true),
    [exportable, setExportable] = useState(true),
    [hasBullet, setHasBullet] = useState(true),
    [timerange, setTimerange] = useState("currMonth"),
    [key, setKey] = useState(1),
    properties = "normalDate,amount,jDate",
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
    <>
      <div style={{ padding: "25px" }}>
        <input
          type="checkbox"
          value={persianMode}
          onChange={({ target }) => setPersianMode(target.checked)}
          checked={persianMode}
        />
        Perisan Mode {" | "}
        <input
          type="checkbox"
          value={exportable}
          onChange={({ target }) => setExportable(target.checked)}
          checked={exportable}
        />
        Exportable {" | "}
        <input
          type="checkbox"
          value={hasBullet}
          onChange={({ target }) => setHasBullet(target.checked)}
          checked={hasBullet}
        />
        Has Bullet {" | "} Time Range:
        <select
          value={timerange}
          onChange={({ target }) => setTimerange(target.value)}
        >
          <option value="currDay">Current Day</option>
          <option value="currWeek">Current Week</option>
          <option value="currMonth">Current Month</option>
          <option value="currYear">Current Year</option>
        </select>
        {" | "}
        <button type="button" onClick={resetData}>
          Reset
        </button>
      </div>
      <AreaChart
        key={key}
        data={data}
        timeRange={timerange}
        className={"persian-area-chart"}
        seriesTooltipTitle={"تعداد بازدید"}
        persianMode={persianMode}
        exportable={exportable}
        dateKeyName={"normalDate"}
        jalaliDateKeyName={"jDate"}
        valueKeyName={"amount"}
        seriesHasBullet={hasBullet}
      />
    </>
  );
}

export default App;
