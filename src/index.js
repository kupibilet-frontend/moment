const moment = require('moment')
require('moment/locale/ru')

const monthsNames = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

moment.updateLocale('ru', {
  monthsShort: {
    format: monthsNames,
    standalone: monthsNames,
  },
})

module.exports = moment
