// 1881-2050
let Transformer = {
  proivateData: {
    MonthTable: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    LunarTable: ["1212122322121", "1212121221220", "1121121222120", "2112132122122", "2112112121220", 
    "2121211212120", "2212321121212", "2122121121210", "2122121212120", "1232122121212", // 1890
    "1212121221220", "1121123221222", "1121121212220", "1212112121220", "2121231212121", 
    "2221211212120", "1221212121210", "2123221212121", "2121212212120", "1211212232212", // 1900
    "1211212122210", "2121121212220", "1212132112212", "2212112112210", "2212211212120", 
    "1221412121212", "1212122121210", "2112212122120", "1231212122212", "1211212122210", // 1910
    "2121123122122", "2121121122120", "2212112112120", "2212231212112", "2122121212120", 
    "1212122121210", "2132122122121", "2112121222120", "1211212322122", "1211211221220", // 1920
    "2121121121220", "2122132112122", "1221212121120", "2121221212110", "2122321221212", 
    "1121212212210", "2112121221220", "1231211221222", "1211211212220", "1221123121221", // 1930
    "2221121121210", "2221212112120", "1221241212112", "1212212212120", "1121212212210", 
    "2114121212221", "2112112122210", "2211211412212", "2211211212120", "2212121121210", // 1940
    "2212214112121", "2122122121120", "1212122122120", "1121412122122", "1121121222120", 
    "2112112122120", "2231211212122", "2121211212120", "2212121321212", "2122121121210", // 1950
    "2122121212120", "1212142121212", "1211221221220", "1121121221220", "2114112121222", 
    "1212112121220", "2121211232122", "1221211212120", "1221212121210", "2121223212121", // 1960
    "2121212212120", "1211212212210", "2121321212221", "2121121212220", "1212112112220",
    "1223211211221", "2212211212120", "1221212321212", "1212122121210", "2112212122120", // 1970
    "1211232122212", "1211212122210", "2121121122210", "2212312112212", "2212112112120", 
    "2212121232112", "2122121212110", "2212122121210", "2112124122121", "2112121221220", // 1980
    "1211211221220", "2121321122122", "2121121121220", "2122112112322", "1221212112120", 
    "1221221212110", "2122123221212", "1121212212210", "2112121221220", "1211231221222", // 1990
    "1211211212220", "1221121121220", "1223212112121", "2221212112120", "1221221232112", 
    "1212212122120", "1121212212210", "2112132212221", "2112112122210", "2211211212210", // 2000
    "2221321121212", "2212121121210", "2212212112120", "1232212121212", "1212122122110",
    "2121212322122", "1121121222120", "2112112122120", "2211231212122", "2121211212120", // 2010
    "2122121121210", "2124212112121", "2122121212120", "1212121223212", "1211212221210",
    "2121121221220", "1212132121222", "1212112121220", "2121211212120", "2122321121212", // 2020
    "1221212121210", "2121221212120", "1232121221212", "1211212212210", "2121123212221",
    "2121121212220", "1212112112220", "1221231211221", "2212211211220", "1212212121210", // 2030
    "2123212212121", "2112122122120", "1211212122232", "1211212122210", "2121121122120",
    "2212114112212", "2212112112120", "2212121211210", "2212232121211", "2122122121210", // 2040
    "2112122122120", "1231212122122", "1211211221220", "2121121321222", "2121121121220",
    "2122112112120", "2122141211212", "1221221212110", "2121221221210", "2114121221221"  // 2050
    ],
    lunarDate: {
      year: 1,
      month: 0,
      day: 1,
      isYunMonth: false
    },
    temp: 1
  },
  methods: {
    solar2lunar(d) {
      let yun = this.SolarToLunar(d)
      return {
        'day': yun.year + "-" + (yun.month + 1) + "-" + yun.day,
        'dayTxt': (yun.month + 1) + "." + yun.day,
        'isYunMonth': yun.isYunMonth
      }
    },
    totalDays(solar_date) {
      let transData = this.$options.proivateData

      if (((solar_date.getFullYear() % 4 == 0) && (solar_date.getFullYear() % 100 != 0)) || (solar_date.getFullYear() % 400 == 0)){
        transData.MonthTable[1] = 29
      } else{
        transData.MonthTable[1] = 28
      }
      let sum = 0;
      for (let i=0; i<solar_date.getMonth(); i++) {
        sum = sum + transData.MonthTable[i]
      }

      let nYears366 = parseInt((solar_date.getFullYear() - 1) / 4) - parseInt((solar_date.getFullYear() - 1) / 100) + parseInt((solar_date.getFullYear() - 1) / 400)
      let tdays = (solar_date.getFullYear() - 1) * 365 + sum + nYears366 + solar_date.getDate() - 1

      return tdays
    },
    nDaysYear(year) {
      let transData = this.$options.proivateData
      let sum = 0;
      for (let i=0; i<13; i++) {
        if (parseInt(transData.LunarTable[year-1881].charAt(i))) {
          sum += (29 + (parseInt(transData.LunarTable[year - 1881].charAt(i)) + 1) % 2)
        }
      }
      return sum
    },
    nDaysMonth(lunar_date) {
      let transData = this.$options.proivateData
      let yun = 0
      if (!((lunar_date.month) <= this.YunMonth(lunar_date.year) && !lunar_date.isYunMonth)){ yun = 1 }
      let nDays = 29 + ((parseInt(transData.LunarTable[lunar_date.year - 1881].charAt((lunar_date.month) + yun)) + 1) % 2)
      return nDays
    },
    YunMonth(year) {
      let transData = this.$options.proivateData
      let yun = 0;
      do {
        if (transData.LunarTable[year-1881].charAt(yun) > 2) { break }
        yun++;
      } while (yun <= 12)
      return (yun - 1)
    },
    SolarToLunar(solar_date) {
      let transData = this.$options.proivateData
      let nDays = this.totalDays(solar_date) - 686685
      let tmp = 0

      transData.lunarDate.year = 1881
      transData.lunarDate.month = 0
      transData.lunarDate.day = 1
      transData.lunarDate.isYunMonth = false

      do {
        tmp = nDays
        nDays -= this.nDaysYear(transData.lunarDate.year)
        if (nDays < 0) {
          nDays = tmp
          break
        }
        transData.lunarDate.year++
      } while (true)
      
      do {
        tmp = nDays
        nDays -= this.nDaysMonth(transData.lunarDate)
        if (nDays < 0) {
          nDays = tmp
          break
        }

        if ((transData.lunarDate.month) == this.YunMonth(transData.lunarDate.year) && !transData.lunarDate.isYunMonth) {
          transData.lunarDate.isYunMonth = true
        } else {
          transData.lunarDate.month++
          transData.lunarDate.isYunMonth = false
        }
      } while (true)

      transData.lunarDate.day = nDays + 1
      return transData.lunarDate
    }
  }
}

export default Transformer
