<template>
  <span :class="['ayou-day-cell', isSelected? 'selected': '']" @click.stop.prevent="handleDayClick()" :title="showLunar && lunarText">
    <div class="day-wrapper">
      <div class="lunar" :class="{'passive': day.isPassive, 'festival': isFestival}">
        <template v-if="showLunar">{{lunarText}}</template>
      </div>
      <div class="solar" :class="{'selected': isSelected, 'passive': day.isPassive, 'in-range': isInRange, 'without-lunar':!showLunar}">{{day.dayMoment.date()}}</div>
    </div>
  </span>
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

  .ayou-day-cell {
    padding: 2px 0;
    margin: 1px;
    width: 13.73%;
    height: 60px;
    display: inline-block;
    text-align: center;
    background-color: #fbfbfb;
    &.selected {
      background-color: @primary;
      color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
    div {
      &.passive {
        color: @grey;
      }
    }
  }
  .day-wrapper{
    width: 100%;
  }
  .solar {
    width: 100%;
    margin: -6px 5px 0px 0px;
	  text-align: right;
	  color: #797979;
    padding: 15px 5px 0px 0px;
    font-size: 23px;
    &.selected {
      color: #fff;
    }
    &.in-range {
      border-radius: 50%;
      background-color: @primary-light;
      color: #fff;
    }
    &.passive {
      color: #cccccc;
      &.in-range {
        opacity: 0.4;
      }
      &.selected {
        opacity: 0.4;
      }
    }
  }
  .lunar {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 9px;
	  color: #c8c8c8;
    margin-left: 5px;
    text-align: left;
    &.festival {
      color: @secondary;
      &.passive {
        opacity: 0.4;
      }
    }
  }
  .without-lunar{
    margin-top: 1px;
  }

  @media (min-width: 768px) {
    .solar {
      width: 34%;
      padding: 0px;
      font-size: 16px;
    }
    .lunar {
      width: 66%;
    }
    .day-wrapper{
      display: inline-flex;
    }
  }
</style>
