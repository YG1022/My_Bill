import { render, screen } from '../../utils/custom-testing-library';
import React from 'react';
import CustomBreadCrumb from './CustomBreadCrumb';
import { useCustomBreadCrumb } from './hooks/useCustomBreadCrumb';
import { NavLink } from 'react-router-dom';

jest.mock('./hooks/useCustomBreadCrumb');
const mockedUseCustomBreadCrumb = useCustomBreadCrumb as jest.MockedFunction<typeof useCustomBreadCrumb>;

describe('CustomBreadCrumb', () => {
  it('should render breadcrumbItems correctly', () => {
    // Arrange
    const mockUseLocationValue = {
      breadcrumbItems: [
        { title: <NavLink to='/'>Home</NavLink>, key: 'home' },
        { title: <NavLink to='/input'>Input</NavLink>, key: 'input' },
      ],
    };
    mockedUseCustomBreadCrumb.mockReturnValue(mockUseLocationValue);

    render(<CustomBreadCrumb />);
    // Act

    // Assert
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Input')).toBeInTheDocument();
  });
});