import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import Card from "./Card";

describe('Card', () => {
  it('should render', () => {
    expect(<Card />).toBeTruthy()
  })

  it('should render Card', () => {
    render(<Card />)
    expect(screen.getByTestId('card'))
  })
})