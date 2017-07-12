<template>
  <div id="demo">
    <div style="margin: 0 auto; text-align: center;">
      <div class="contents-div">
        <input type="text" v-model="inputDate" placeholder="1996-11-05">
        <button @click="searchDate" class="btn-search">Search</button>
      </div>
      <div class="contents-div">
        <span v-if="solarDate">양력 : {{solarDate}}</span><span v-if="lunarDate">, 음력 : {{lunarDate}}</span>
      </div>
    </div>
    <lunar-calendar
      @change="onChange"
      :firstDayOfWeek="parseInt(firstDayOfWeek)"
      :disableDaysBeforeToday="disableDaysBeforeToday"
      :defaultDate="defaultDate"
      :showLunarButton="showLunarButton"
    ></lunar-calendar>
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
      firstDayOfWeek: 0,
      showLunar: false,
      isLunarChecked: false,
      showLunarButton: true,
      inputDate: ''
    };
  },
  methods: {
    onChange (solarDate, lunarDate, isLunarChecked) {
      this.solarDate = solarDate.format('YYYY-MM-DD')
      this.lunarDate = lunarDate.format('YYYY-MM-DD')
      this.isLunarChecked = isLunarChecked
    },
    searchDate () {
      this.defaultDate = this.inputDate
    }
  },
  components: {
    'lunar-calendar': lunarCalendar
  }
}
</script>

<style scoped>
input{ height: 30px; width: 200px; font-size: 13px; padding-left: 5px; }
.btn-search, .btn-search:hover, .btn-search:focus{ height: 35px; background-color: #222944; border: 1px solid #222944; color: #fff; padding-bottom: 2px; cursor: pointer; }
.contents-div{ margin-bottom: 20px; }
</style>

