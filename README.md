# vue-lunar-calendar
A vue component for lunar calendar.
Uses Moment.js for date operations.

# Online demo
* [demo](https://kimwoohyun.github.io/vue-lunar-calendar/)

# Install
`npm install vue-lunar-calendar`

# Usage
1. import your project
```
Vue.component('calendar', Calendar)
```
or
```
new Vue({
	components: {'calendar': Calendar}
})
```

2. use in your project.
```
<template>
	<calendar
		@change="onChange"
    	:first-day-of-week="parseInt(firstDayOfWeek)"
    	:disable-days-before-today="disableDaysBeforeToday"
    	:default-date="defaultDate"></calendar>
</template>
```

# Props
| Property | Desc | Type | Default values |
| :---------- | :--------- | :----------: | :----------: |
| firstDayOfWeek    | Set the first day of Week       | Number       | 0 ( sunday )       |
| disableDaysBeforeToday    | Disable days before today or not       | Boolean       |  -      |
| disabledFunc    | Use to decide if the day is disabled or not.       | Function       | null       |
| defaultDate    | Init the selected date       | Object       | -       |
| showLunar    | show or hide lunar       | Boolean       | false       |

# Event
| Event | Desc | params |
| :---------- | :---------- | :----------: |
| change    | Emit when cell is clicked       | Function       |

# Thanks for
@[ClaudeSeo](https://github.com/ClaudeSeo)
