import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import InputBar from './InputBar';

describe('InputBar', () => {
    it('should show InputBar correctly', () => {
        render(<InputBar />);
        const amountContent = screen.getByTestId('amount-content');
        expect(amountContent).toBeInTheDocument();
    });

    it('should render text input on screen', async () => {
        render(<InputBar />);
        await userEvent.type(screen.getByTestId('input-content'), '11');
        await userEvent.click(screen.getByRole('button', { name: 'Assign' }));
        const amount = screen.getByTestId('amount').innerHTML;
        await waitFor(() => {
            expect(amount).toBe('11');
        });
    });
});
