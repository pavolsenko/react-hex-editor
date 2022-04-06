import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {WrapperTestComponent} from '../../../testUtils';
import {ViewerHeader} from '../ViewerHeader';

describe('ViewerHeader', () => {
    it('renders an ItemLineNUmber with correct value', () => {
        render(<WrapperTestComponent>
            <ViewerHeader
                fileName={'test.bin'}
                onCloseClick={() => {}}
            />
        </WrapperTestComponent>);

        const viewerHeader = screen.getByText(/test.bin/i);
        expect(viewerHeader).toBeInTheDocument();
    });
});
