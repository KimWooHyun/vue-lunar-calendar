<template>
  <div id="demo">
    <div style="margin: 0 auto; text-align: center;">
      <span v-if="solarDate">양력 : {{solarDate}}</span><span v-if="lunarDate">, 음력 : {{lunarDate}}</span>
    </div>
    <lunar-calendar
      @change="onChange"
      :first-day-of-week="parseInt(firstDayOfWeek)"
      :disable-days-before-today="disableDaysBeforeToday"
      :default-date="defaultDate"></lunar-calendar>
  </div>
</template>
<script>
import lunarCalendar from 'src/'
export default {
  data() {
    return {
      solarDate: '',
      lunarDate: '',
      showCalendar: true,
      disableDaysBeforeToday: false,
      defaultDate: null,
      firstDayOfWeek: 0
    };
  },
  methods: {
    onChange (solarDate, lunarDate) {
      this.solarDate = solarDate.format('YYYY-MM-DD')
      this.lunarDate = lunarDate.format('YYYY-MM-DD')
    }
  },
  components: {
    'lunar-calendar': lunarCalendar
  }
}
</script>