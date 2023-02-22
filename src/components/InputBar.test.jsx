import { screen, render } from '@testing-library/react';
import React from 'react';
import InputBar from './InputBar';

describe('Footer', () => {
    it('should show InputBar correctly', () => {
        render(<InputBar />);
        const amountContent = screen.getByTestId('amount-content');
        expect(amountContent).toBeInTheDocument();
    });
});
