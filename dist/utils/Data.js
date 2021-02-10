import momentJalali from "moment-jalaali";
import { dateFormat, jalaliDateFormat, dateTimeFormat, timeFormat } from "../constant/Index";
export const fakeChartData = (timeRange = "currMonth", properties, persianMode) => {
  properties = properties.split(",");
  const now = momentJalali,
        container = [],
        startMonth = now().startOf(persianMode ? "jMonth" : "month"),
        startYear = now().startOf(persianMode ? "jYear" : "year"),
        startWeek = now().startOf("week"),
        startDay = now().startOf("day");
  let index = 0;

  switch (timeRange) {
    case "currYear":
      for (index = 0; index < 365; index++) {
        container.push({
          [properties[0]]: startYear.format(dateFormat),
          [properties[1]]: Math.floor(Math.random() * 5000),
          [properties[2]]: startYear.format(jalaliDateFormat)
        });
        startYear.add(1, "day");
      }

      break;

    case "currDay":
      for (index = 0; index < 1440; index++) {
        container.push({
          [properties[0]]: startDay.format(dateTimeFormat),
          [properties[1]]: Math.floor(Math.random() * 5000),
          [properties[2]]: startDay.format(timeFormat)
        });
        startDay.add(15, "minute");
      }

      break;

    case "currWeek":
      for (index = 0; index < 7; index++) {
        container.push({
          [properties[0]]: startWeek.format(dateFormat),
          [properties[1]]: Math.floor(Math.random() * 5000),
          [properties[2]]: startWeek.format(jalaliDateFormat)
        });
        startWeek.add(1, "day");
      }

      break;

    default:
      const daysInMonth = persianMode ? now.jDaysInMonth() : now().daysInMonth();

      for (index = 0; index < daysInMonth; index++) {
        container.push({
          [properties[0]]: startMonth.format(dateFormat),
          [properties[1]]: Math.floor(Math.random() * 5000),
          [properties[2]]: startMonth.format(jalaliDateFormat)
        });
        startMonth.add(1, "day");
      }

      break;
  }

  return container;
};
export const getCurrentDate = (mode = "persian") => {
  switch (mode) {
    case "gregorian":
      const date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDay();
      return `${year}-${month}-${day}`;

    default:
      return momentJalali().format(jalaliDateFormat);
  }
};