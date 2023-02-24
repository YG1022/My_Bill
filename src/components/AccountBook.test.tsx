import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AccountBook from './AccountBook';

describe('AccountBook', () => {
    it('should show AccountBook correctly', () => {
        render(<AccountBook />);
        const amountContent = screen.getByTestId('amount-content');
        expect(amountContent).toBeInTheDocument();
    });

    it('should render text input on screen', async () => {
        render(<AccountBook />);
        await userEvent.type(screen.getByTestId('input-bar'), '11');
        await userEvent.click(screen.getByRole('button', { name: 'Assign' }));
        const amount = screen.getByTestId('amount').innerHTML;
        await waitFor(() => {
            expect(amount).toBe('11');
        });
    });

    it('should render 0 if input character not number', async () => {
        render(<AccountBook />);
        await userEvent.type(screen.getByTestId('input-bar'), 'character');
        await userEvent.click(screen.getByRole('button', { name: 'Assign' }));
        const amount = screen.getByTestId('amount').innerHTML;
        await waitFor(() => {
            expect(amount).toBe('0');
        });
    });

    it('should render negative number', async () => {
        render(<AccountBook />);
        await userEvent.type(screen.getByTestId('input-bar'), '-13');
        await userEvent.click(screen.getByRole('button', { name: 'Assign' }));
        const amount = screen.getByTestId('amount').innerHTML;
        await waitFor(() => {
            expect(amount).toBe('-13');
        });
    });
});
