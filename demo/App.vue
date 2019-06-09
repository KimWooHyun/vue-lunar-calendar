<template>
  <div id="demo">
    <div class="lunar-container">
      <div style="display:inline-flex;width:100%;">
        <div class="contents-div col-6">
          <label>language</label>
          <select class="select" v-model="lang">
            <option v-for="(value, key) in langs.translations" :key="key" :value="key">{{value.name}}</option>
          </select>
        </div>
        <div class="contents-div col-6">
          <label>date language</label>
          <select class="select" v-model="dateLang">
            <option v-for="(value, key) in langs.translations" :key="key" :value="key">{{value.name}}</option>
          </select>
        </div>
      </div>
      <div class="contents-div">
        <input type="text" v-model="inputDate" placeholder="1996-11-05">
        <button @click="searchDate" class="btn-search">Search</button>
      </div>
      <div class="contents-div">
        <p v-if="solarDate">solor date : {{solarDate}}</p>
        <p v-if="lunarDate">lunar date : {{lunarDate}}</p>
      </div>
    </div>
    <lunar-calendar
      @change="onChange"
      :firstDayOfWeek="parseInt(firstDayOfWeek)"
      :disableDaysBeforeToday="disableDaysBeforeToday"
      :defaultDate="defaultDate"
      :showLunarButton="showLunarButton"
      :lang="lang"
      :dateLang="dateLang"
    ></lunar-calendar>
  </div>
</template>
<script>
import lunarCalendar from 'src/'
import Translation from 'src/lang'

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
      inputDate: '',
      lang: 'ko',
      dateLang: 'en',
      langs: Translation
    };
  },
  methods: {
    onChange (solarDate, lunarDate, isLunarChecked) {
      this.solarDate = solarDate.format('YYYY-MM-DD')
      this.lunarDate = lunarDate.format('YYYY-MM-DD')
      this.isLunarChecked = isLunarChecked
      this.inputDate = this.solarDate
    },
    searchDate () {
      if (this.inputDate) {
        this.defaultDate = this.inputDate
      } else {
        window.alert('Please enter a value.');
      }
    }
  },
  components: {
    'lunar-calendar': lunarCalendar
  }
}
</script>

<style scoped>
.lunar-container{ margin: 0 auto; text-align: center; min-width: 300px; max-width: 450px; }
input{ height: 30px; width: 200px; font-size: 13px; padding-left: 5px; border: 1px solid #9e9e9e; vertical-align: middle; }
.btn-search, .btn-search:hover, .btn-search:focus{ height: 35px; background-color: #222944; border: 1px solid #222944; color: #fff; padding-bottom: 2px; cursor: pointer; outline: none; }
.contents-div{ margin-bottom: 20px; }
.col-6{ width: 50%; padding: 0px 10px; text-align: left; }
.col-6 label{ text-align: left; font-size: 13px; margin: 0px 0px 5px 5px; color: #9b9b9b; }
.select{ width: 100%;height: 35px; border: 1px solid #9e9e9e; }
</style>
