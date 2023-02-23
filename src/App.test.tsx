import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App',()=>{
    it('renders the page', () => {
        render(<App />);
        const billHeader = screen.getByText('My Bill');
        expect(billHeader).toBeInTheDocument();
    });
})
