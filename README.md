# amCharts with persian date

![amCharts with persian date(Jalali Date)][logo]

[logo]: https://s17.picofile.com/file/8424546150/ezgif_com_gif_maker.gif "amCharts with persian date(Jalali Date)"

test

# Usage:

First copy ./src/components content and paste in your project, then:

`import AreaChart from "components/AreaCharts";`

`<AreaChart key={key} data={data} timeRange={timeRange} seriesTooltipTitle={"تعداد بازدید"} persianMode={true} /> `

# Defualt props:

| Prop Name                 |                 default                 |      type |
| ------------------------- | :-------------------------------------: | --------: |
| data                      |                   []                    |     array |
| timeRange                 |               `currMonth`               |    string |
| className                 |                  null                   |    string |
| id                        |              `area-chart`               |    string |
| seriesTooltipTitle        |                undefined                | undefined |
| persianMode               |                  true                   |   boolean |
| theme                     |                undefined                |     array |
| seriesStrokeWidth         |                    1                    |    number |
| valueAxisTitle            |                  null                   |    string |
| seriesTooltipHtml         | `String of html elements, write bellow` |    string |
| exportable                |                  true                   |   boolean |
| exportMenuItems           |                  array                  |   boolean |
| dateAxisMinGridDistance   |                   60                    |    number |
| dateAxisStartLocation     |                    0                    |    number |
| dateaxisEndLocation       |                    0                    |    number |
| dateAxisStart             |                   0.8                   |     float |
| dateAxisKeepSelection     |                  false                  |   boolean |
| seriesTooltipIsDisabled   |                  false                  |   boolean |
| seriesIsStack             |                  true                   |   boolean |
| seriesHasBullet           |                  true                   |   boolean |
| hasXyCursor               |                  true                   |   boolean |
| hasScrollbarX             |                  true                   |   boolean |
| dateFormatterIsUtc        |                  false                  |   boolean |
| dateAxisTooltipIsDisabled |                  true                   |   boolean |
| exportFilePrefix          |              Current Date               |    string |
| jalaliDateKeyName         |              `jalaliDate`               |    string |
| dateKeyName               |                 `date`                  |    string |
| valueKeyName              |                 `value`                 |    string |
| valueAxisMaxPrecision     |                    0                    |    number |

> For more information visit [amCharts](https://www.amcharts.com/docs/v4/) documentation and this repository example

### Developed by [Sajjad Noori](mailto:sajjad.n18@outlook.com)
