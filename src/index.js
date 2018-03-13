const moment = require('moment')
require('moment/locale/ru')

const monthsNames = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

moment.updateLocale('ru', {
  monthsShort: {
    format: monthsNames,
    standalone: monthsNames,
  },
  relativeTime: {
    m: function (number, withoutSuffix, key) {
      return '1 ' + (withoutSuffix ? 'минута' : 'минуту')
    },
    h: '1 час',
    d: '1 день',
    M: '1 месяц',
    y: '1 год',
  }
})

moment.relativeTimeThreshold('m', 60); // Keep minutes "as-is" instead of rounding 45 minutes as "an hour"
moment.relativeTimeThreshold('h', 24); // Keep hours "as-is" instead of rounding 23 hours as "a day"

module.exports = moment
