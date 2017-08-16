const moment = require('../src')

describe('Custom RU locale', () => {
  test('Correctly formats short months', () => {
    expect(
      moment('2020-01-01').format('DD MMM')
    ).toBe('01 янв')

    expect(
      moment('2020-07-01').format('DD MMM')
    ).toBe('01 июл')
  })
})
