import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// @ts-ignore
const AllTheProviders: FC = ({ children }) => {
  return <Router>{children}</Router>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };