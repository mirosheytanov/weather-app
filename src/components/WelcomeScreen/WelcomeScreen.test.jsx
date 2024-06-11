import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import WelcomeScreen from "./WelcomeScreen"

describe('Welcome Screen', () => {
  it('should render', () => {
    expect(<WelcomeScreen />).toBeTruthy()
  })

  it('should render Welcome Screen', () => {
    render(<WelcomeScreen />)
    expect(screen.getByTestId('welcome-screen'))
  })
})