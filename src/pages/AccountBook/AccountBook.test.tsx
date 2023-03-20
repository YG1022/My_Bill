import { screen, render } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import AccountBook from './AccountBook';
import { PageContainer } from '../../components/PageContainer/PageContainer';
import { useAccountBook } from './hooks/useAccountBook';

jest.mock('./hooks/useAccountBook');
const mockedUseAccountBook = useAccountBook as jest.MockedFunction<typeof useAccountBook>;
jest.setTimeout(10000);

describe('AccountBook', () => {
  beforeEach(() => {
    mockedUseAccountBook.mockReturnValue({
      amountList: [
        { id: 1, amount: 100, date: '2021-01-01', category: '+', tags: ['Food'] },
        { id: 2, amount: 200, date: '2021-01-02', category: '-', tags: ['Shopping'] },
      ],
      fetchData: jest.fn(),
    });
  });

  it('should render two columns correctly', () => {
    // Arrange
    const renderer = new ShallowRenderer();
    renderer.render(<AccountBook />);
    // Act
    const view = renderer.getRenderOutput();
    // Assert
    expect(view.type).toEqual(PageContainer);
    expect(view.props.children.props.children.length).toBe(2);
  });

  it('should render corresponding lists', () => {
    // Arrange
    render(<AccountBook />);
    // Act

    // Assert
    expect(screen.getByText('Income List')).toBeInTheDocument();
    expect(screen.getByText('Expenses List')).toBeInTheDocument();
  });

  it('should deliver specific props', () => {
    // Arrange
    render(<AccountBook />);
    // Act

    // Assert
    expect(screen.getByText('Income List')).toBeInTheDocument();
  });
});
