import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from "./Button";

describe('Button', () => {

  it('should render', () => {
    expect(<Button />).toBeTruthy()
  })

  it('should render Button with text', () => {
    render(<Button>Text</Button>)
    expect(screen.getByTestId('button'))
  })

})