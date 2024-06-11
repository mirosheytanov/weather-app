import { renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useWeatherData from './useWeatherData'


describe('useWeatherData', () => {
  it('should return initial value', () => {
    const initialValue = {}
    const weather = renderHook(() => useWeatherData(initialValue))

    expect(weather.result.current).toEqual(initialValue)
  })
})