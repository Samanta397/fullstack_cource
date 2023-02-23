import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Blog from "./Blog";

test('renders content', () => {
  const blog = {
    title: "Test blog",
    author: "Marye",
    url: "test",
    likes: 5
  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Test blog')
  expect(element).toBeDefined()
})