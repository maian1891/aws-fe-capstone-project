import React from 'react';
import { render, screen } from '@testing-library/react'
import { LogIn } from '../../components/LogIn';

test("Check login title successfully", () => {
    render(<LogIn/>);

    const element = screen.getByText(/Please log in/i);

    expect(element).toBeInTheDocument();
})