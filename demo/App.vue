<template>
  <div id="demo">
    <div class="lunar-container">
      <div class="row">
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
      <div class="row">
        <div class="contents-div col-6">
          <p v-if="solarDate">solor date : {{solarDate}}</p>
        </div>
        <div class="contents-div col-6">
          <p v-if="lunarDate">lunar date : {{lunarDate}}</p>
        </div>
      </div>
    </div>
    <!-- if you want to use customCells props => :customCells="customCells"  -->
    <lunar-calendar
      @change="onChange"
      :firstDayOfWeek="parseInt(firstDayOfWeek)"
      :disableDaysBeforeToday="disableDaysBeforeToday"
      :defaultDate="defaultDate"
      :showLunarButton="showLunarButton"
      :lang="lang"
      :dateLang="dateLang"
      :customCells="customCells"
      cellSeletedClass="custom-seleted-cell"
    ></lunar-calendar>
  </div>
</template>
<script>
import lunarCalendar from 'src/'
import Translation from 'src/lang'
import moment from 'moment';

export default {
  data() {
    const today = new moment();

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
      langs: Translation,
      customCells: [{
        days: [this.formatDate(today.add(1, 'days')), this.formatDate(today.add(1, 'days'))],
        customCellClass: "custom-cell",
        groupName: "custom cell"
      }, {
        days: [this.formatDate(today.add(-3, 'days'))],
        customCellClass: "custom-cell-2",
        groupName: "custom cell 2"
      }]
    };
  },
  methods: {
    formatDate (date) {
      return date.format('YYYY-MM-DD');
    },
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
.lunar-container{ margin: 0 auto; text-align: left; min-width: 300px; max-width: 450px; }
input{ height: 30px; width: 200px; font-size: 13px; padding-left: 5px; border: 1px solid #9e9e9e; vertical-align: middle; }
.btn-search, .btn-search:hover, .btn-search:focus{ height: 35px; background-color: #222944; border: 1px solid #222944; color: #fff; padding-bottom: 2px; cursor: pointer; outline: none; }
.contents-div{ margin-bottom: 20px; }
.row { display:inline-flex; width:100%; margin: 0 -10px }
.col-6{ width: 50%; padding: 0px 10px; text-align: left; }
.col-6 label{ text-align: left; font-size: 13px; margin: 0px 0px 5px 5px; color: #9b9b9b; }
.select{ width: 100%;height: 35px; border: 1px solid #9e9e9e; }
p { margin: 0px; }
</style>

<style>
.custom-cell {
  background: mediumturquoise;
}

.custom-cell-2 {
  background: purple;
}

/*
custom user color
*/
.custom-seleted-cell {
  background: #222944;
}

.custom-cell .solar, .custom-cell-2 .solar {
  color: #ffffff;
}
</style>
