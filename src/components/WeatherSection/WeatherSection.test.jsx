import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WeatherSection from "./WeatherSection"

describe('Weather Section', () => {
  it('should render', () => {
    expect(<WeatherSection />).toBeTruthy()
  })

  it('should render Weather Section', () => {
    render(<WeatherSection />)
    expect(screen.getByTestId('weather-section'))
  })
})