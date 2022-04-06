import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {ItemLineNumber} from '../ItemLineNumber';

describe('ItemLineNumber', () => {
    it('renders an ItemLineNumber with correct value', () => {
        render(<WrapperTestComponent>
            <ItemLineNumber
                lineNumber={28}
            />
        </WrapperTestComponent>);

        const itemContent = screen.getByText(/00000001C0/i);
        expect(itemContent).toBeInTheDocument();
    });
});
