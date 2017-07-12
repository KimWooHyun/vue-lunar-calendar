[![npm](https://img.shields.io/npm/v/vue-lunar-calendar.svg)]()
[![npm](https://img.shields.io/npm/dt/vue-lunar-calendar.svg)]()
[![npm](https://img.shields.io/npm/l/vue-lunar-calendar.svg)]()

# vue-lunar-calendar
A vue component for lunar calendar.
Uses Moment.js for date operations.

# Online demo
* [demo](https://kimwoohyun.github.io/vue-lunar-calendar/)

# Install
```shell
npm install vue-lunar-calendar --save
```

# Usage
1. import your project
```javascript
import lunarCalendar from 'vue-lunar-calendar'
```

2. Declare to component your project
```javascript
Vue.component('lunar-calendar', lunarCalendar)
```
or
```javascript
new Vue({
  components: {'lunar-calendar': lunarCalendar}
  // or components: {lunarCalendar}
})
```

3. use in your project.
```vue
<template>
  <lunar-calendar
    @change="onChange"
    :firstDayOfWeek="parseInt(firstDayOfWeek)"
    :disableDaysBeforeToday="disableDaysBeforeToday"
    :defaultDate="defaultDate"
    :showLunarButton="showLunarButton"
  ></lunar-calendar>
</template>
```

# Props
| Property | Desc | Type | Default values |
| :---------- | :--------- | :----------: | :----------: |
| firstDayOfWeek    | Set the first day of Week       | Number       | 0 ( sunday )       |
| disableDaysBeforeToday    | Disable days before today or not       | Boolean       |  -      |
| disabledFunc    | Use to decide if the day is disabled or not.       | Function       | null       |
| defaultDate    | Init the selected date       | String       | -       |
| showLunar    | show or hide lunar       | Boolean       | false       |
| showLunarButton    | show or hide lunar check button      | Boolean       | true       |

# Event
| Event | Desc | params |
| :---------- | :---------- | :----------: |
| change    | Emit when cell is clicked       | Function       |

# Thanks for
@[ClaudeSeo](https://github.com/ClaudeSeo)
