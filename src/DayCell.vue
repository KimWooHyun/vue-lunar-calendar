<template>
  <div :class="['ayou-day-cell', isSelected? 'selected': '']" @click.stop.prevent="handleDayClick()" :title="showLunar && lunarText">
    <div class="day-wrapper">
      <div class="lunar" :class="{'passive': day.isPassive, 'festival': isFestival}">
        <template v-if="showLunar">{{lunarText}}</template>
      </div>
      <div class="solar" :class="{'selected': isSelected, 'passive': day.isPassive, 'in-range': isInRange, 'without-lunar':!showLunar}">{{day.dayMoment.date()}}</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Transformer from './lunar'

  export default {
    props: {
      showLunar: {
        type: Boolean,
        default: false
      },
      day: {
        type: Object
      },
      isSelected: {
        type: Boolean,
        default: false
      },
      isInRange: {
        type: Boolean,
        default: false
      }
    },
    mixins: [Transformer],
    data () {
      return {
        lunar: this.convertLunar(this.day)
      }
    },
    watch: {
      day (val) {
        this.lunar = this.convertLunar(val)
      }
    },
    methods: {
      handleDayClick () {
        if (this.day.isPassive) return
        this.$emit('dayClick', this.day)
      },
      convertLunar (day) {
        return this.solar2lunar(day.dayMoment._d)
      }
    },
    computed: {
      lunarText () {
        return this.lunar && (this.lunar.calendarFestivals || this.lunar.lunarFestivals || this.lunar.Term || this.lunar.IDayCn)
      },
      isFestival () {
        if (this.lunar && (this.lunar.calendarFestivals || this.lunar.lunarFestivals || this.lunar.Term)) {
          return true
        }
        return false
      }
    }
  }
</script>
<style>
  .ayou-day-cell{ margin: 1px; width: 13.73%; height: 60px; display: inline-block; text-align: center; background-color: #fbfbfb; }
  .ayou-day-cell.selected{ background-color: #222944; color: #fff; }
  .ayou-day-cell:hover{ cursor: pointer; }
  .day-wrapper{ width: 100%; }
  .solar{ text-align: right; color: #797979; padding: 10px 5px 0px 0px; font-size: 23px; font-weight: 300; }
  .solar.selected{ color: #ffffff; }
  .solar.passive{ color: #cccccc; }
  .solar.passive.selected{ opacity: 0.4; }
  .lunar{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 9px; color: #c8c8c8; padding: 5px; text-align: left; }
  .lunar.festival.passive{ opacity: 0.4; }
  .without-lunar{ margin-top: 1px; }

  @media (min-width: 768px) {
    .solar { width: 34%; padding: 0px; font-size: 16px; margin: 5px 5px 0px 0px; }
    .lunar { width: 66%; margin-top: 4px; }
    .day-wrapper{ display: inline-flex; }
  }
</style>
