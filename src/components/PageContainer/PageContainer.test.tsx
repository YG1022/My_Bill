import { render, screen } from '@testing-library/react';
import React from 'react';
import { PageContainer } from './PageContainer';

describe('PageContainer', () => {
  it('should render children', () => {
    // Arrange
    render(<PageContainer>content</PageContainer>);
    // Act

    // Assert
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});