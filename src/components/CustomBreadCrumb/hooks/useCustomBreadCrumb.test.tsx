import { useCustomBreadCrumb } from './useCustomBreadCrumb';
import { renderHook } from '@testing-library/react';
import React from 'react';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as {},
  useLocation: () => ({ pathname: '/input' }),
}));

describe('useCustomBreadCrumb', () => {
  it('should return the correct breadcrumb items', () => {
    // Arrange
    const { result } = renderHook(() => useCustomBreadCrumb());
    // Act

    // Assert
    expect(result.current.breadcrumbItems.length).toBe(2);
    expect(result.current.breadcrumbItems[0].key).toBe('home');
    expect(result.current.breadcrumbItems[1].key).toBe('/input');

  });
});