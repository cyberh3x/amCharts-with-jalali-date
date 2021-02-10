# amCharts with persian date

![Package Demo][logo]

[logo]: https://s17.picofile.com/file/8424546150/ezgif_com_gif_maker.gif "Logo Title Text 2"

# Usage:

`<AreaChart key={key} data={data} timeRange={"currMonth"} seriesTooltipTitle={"تعداد بازدید"} persianMode={true} /> `

# Props:

| Prop Name          |                         default                          |      type | example |
| ------------------ | :------------------------------------------------------: | --------: | ------- |
| data               |                            []                            |     array |
| timeRange          |                        currMonth                         |    string |
| className          |                          `null`                          |    string |
| id                 |                       `area-chart`                       |    string |
| id                 |                       `area-chart`                       |    string |
| seriesTooltipTitle |                        undefined                         | undefined |
| persianMode        |                           true                           |   boolean |
| theme              |                        undefined                         |     array |
| seriesStrokeWidth  |                            1                             |    number |
| valueAxisTitle     |                           null                           |    string |
| seriesTooltipHtml  | `<div style="text-align: center; padding-bottom: 15px;"> |

    <h5>{${persianMode ? `${jalaliDateKeyName}` : `${dateKeyName}`}}</h5>
    <span>${seriesTooltipTitle}: {${valueKeyName}} </span><br/>
    </div>`     |    string |
