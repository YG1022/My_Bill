import React from 'react';
import { render, screen, waitFor } from '../../utils/custom-testing-library';
import userEvent from '@testing-library/user-event';
import { CustomTags } from './CustomTags';

describe('CourseTags', () => {
  const formValue = { name: 'tag name' };
  const mockedOnChange = jest.fn();

  const createTag = async (tagName) => {
    await userEvent.click(screen.getByText('New Tag'));
    await userEvent.type(screen.getByTestId('tag-input'), tagName);
    await userEvent.click(document.body);
  };

  it('should add tag correctly', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    // Assert
    await waitFor(() => {
      expect(screen.getByText('New Tag')).toBeInTheDocument();
      expect(screen.getByText('tag 1')).toBeInTheDocument();
      expect(mockedOnChange).toBeCalledWith({ ...formValue, tags: ['Food', 'Transfer', 'Shopping', 'tag 1'] });
    });
  });

  it('should add 5 tags at max correctly', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    await createTag('tag 2');
    // Assert
    await waitFor(() => {
      expect(screen.queryByText('New Tag')).not.toBeInTheDocument();
    });
  });

  it('should edit tag correctly', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    await createTag('tag 2');
    await userEvent.dblClick(screen.getByText('tag 1'));
    await userEvent.clear(screen.getByTestId('tag-input'));
    await userEvent.type(screen.getByTestId('tag-input'), 'edit');
    await userEvent.click(document.body);
    // Assert
    await waitFor(() => {
      expect(screen.queryByText('tag 1')).not.toBeInTheDocument();
      expect(screen.getByText('tag 2')).toBeInTheDocument();
      expect(screen.getByText('edit')).toBeInTheDocument();
    });
  });

  it('should wrap tag text correctly when text is longer than 6', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('1234567');
    // Assert
    await waitFor(() => {
      expect(screen.getByText('123456...')).toBeInTheDocument();
    });
  });

  it('should remove tag correctly', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    await createTag('tag 2');
    await userEvent.click(screen.getAllByLabelText('close')[3]);
    // Assert
    await waitFor(() => {
      expect(screen.queryByText('tag 1')).not.toBeInTheDocument();
      expect(screen.getByText('tag 2')).toBeInTheDocument();
      expect(mockedOnChange).toBeCalledTimes(4);
      expect(mockedOnChange).lastCalledWith({ ...formValue, tags: ['Food', 'Transfer', 'Shopping', 'tag 2'] });
    });
  });

  it('should not created exited tags', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    await createTag('tag 1');
    // Assert
    await waitFor(() => {
      expect(screen.queryAllByText('tag 1').length).toBe(1);
      expect(screen.queryByTestId('tag-input')).not.toBeInTheDocument();
    });
  });

  it('should not edit when tag exists', async () => {
    // Arrange
    render(<CustomTags value={formValue} onChange={mockedOnChange} />);
    // Act
    await createTag('tag 1');
    await userEvent.dblClick(screen.getByText('tag 1'));
    await userEvent.clear(screen.getByTestId('tag-input'));
    await userEvent.type(screen.getByTestId('tag-input'), 'Shopping');
    await userEvent.click(document.body);
    // Assert
    await waitFor(() => {
      expect(screen.queryAllByText('Shoppi...').length).toBe(1);
      expect(screen.queryByText('tag 1')).not.toBeInTheDocument();
      expect(screen.getByText('Food')).toBeInTheDocument();
    });
  });
});
