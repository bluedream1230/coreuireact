import * as React from 'react'
import { render /* ,screen */ /*,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CBadge } from '../../../index'

test('loads and displays CBadge component', async () => {
  const { container } = render(<CBadge color="primary">Test</CBadge>)
  expect(container).toMatchSnapshot()
})

test('CBadge customize', async () => {
  const { container } = render(
    <CBadge className="bazinga" color="warning" component="div" shape="rounded" textColor="white">
      Test
    </CBadge>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('badge')
  expect(container.firstChild).toHaveClass('bg-warning')
  expect(container.firstChild).toHaveClass('rounded')
})
