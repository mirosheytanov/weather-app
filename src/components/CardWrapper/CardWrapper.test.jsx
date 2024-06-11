import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CardWrapper from "./CardWrapper"

describe('Card Wrapper', () => {
  it('should render', () => {
    expect(<CardWrapper />).toBeTruthy()
  })

  it('should render Card Wrapper', () => {
    render(<CardWrapper />)
    expect(screen.getByTestId('card-wrapper'))
  })
})