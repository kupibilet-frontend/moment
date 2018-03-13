const moment = require('../src')

describe('Custom RU locale', () => {
  moment.locale('ru')

  test('Correctly formats short months', () => {
    expect(
      moment('2020-01-01').format('DD MMM')
    ).toBe('01 янв')

    expect(
      moment('2020-07-01').format('DD MMM')
    ).toBe('01 июл')
  })

  test('Strict formatting of durations', () => {
    expect(
      moment.duration(1, 'm').humanize()
    ).toBe('1 минута')

    expect(
      moment.duration(59, 'm').humanize()
    ).toBe('59 минут')

    expect(
      moment.duration(1, 'h').humanize()
    ).toBe('1 час')

    expect(
      moment.duration(23, 'h').humanize()
    ).toBe('23 часа')
  })
})
