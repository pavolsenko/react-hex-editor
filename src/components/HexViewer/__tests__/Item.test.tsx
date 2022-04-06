import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {Item} from '../Item';

describe('Item', () => {
    it('renders an Item with it\'s value', () => {
        render( <WrapperTestComponent>
            <Item
                line={5}
                column={3}
                value={'AA'}
                isSelected={false}
                onClick={() => {}}
            />
        </WrapperTestComponent>);

        const itemContent = screen.getByText(/AA/i);
        expect(itemContent).toBeInTheDocument();
    });

    it('renders an active Item with it\'s value and correct background', () => {
        render( <WrapperTestComponent>
            <Item
                line={5}
                column={3}
                value={'CD'}
                isSelected={true}
                onClick={() => {}}
            />
        </WrapperTestComponent>);

        const itemContent = screen.getByText(/CD/i);
        expect(itemContent).toBeInTheDocument();
        expect(itemContent).toHaveStyle(`background-color: #424242`)
    });
});
