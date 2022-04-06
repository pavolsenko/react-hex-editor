import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {App} from './App';

describe('App', () => {
    it('renders the App', () => {
        render(<App />);

        const headingElement = screen.getByText(/React HEX Viewer/i);
        expect(headingElement).toBeInTheDocument();
    });
});
