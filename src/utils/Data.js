import momentJalali from "moment-jalaali";
import moment from "moment";

export const fakeChartData = (
  timeRange = "currMonth",
  properties,
  persianMode
) => {
  const now = persianMode ? momentJalali : moment;
  properties = properties.split(",");
  const container = [];
  const startMonth = now().startOf(persianMode ? "jMonth" : "month");
  const startYear = now().startOf(persianMode ? "jYear" : "year");
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
  return container;
};
