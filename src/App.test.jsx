import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from "@testing-library/react"
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routesConfig from './routes/routesConfig'
import App from "./App";

describe("App", () => {
  it("should render App", () => {
    render(<App />)
  })

  it("should render home page", () => {
    const router = createMemoryRouter(routesConfig, { 
      initialEntries: ['/'],
    })

    const home = render(<RouterProvider router={router} />)

    expect(home).toBeTruthy()
  })

  it("should navigate to not found page", () => {
    const router = createMemoryRouter(routesConfig, { 
      initialEntries: ['/some-bad-route'],
    })

    render(<RouterProvider router={router} />)

    waitFor(() => expect(screen.queryAllByTestId('not-found-heading')).toBeInTheDocument())
  })
})