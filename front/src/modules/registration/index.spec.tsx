import React from 'react'
import '@testing-library/jest-dom'

import { Registration } from './index'
import { render } from '@testing-library/react'

import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

test('should render <Registration/>', () => {
  render(<Registration />)
})
