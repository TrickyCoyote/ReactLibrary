import React from 'react';
import { render} from "@testing-library/react";

import Link, { Props } from '.';

describe('Link', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            children: <div>This is a demo</div>,
            linkString: 'https://www.google.com',
            target: '_self',
            dataTestId: 'link',
            alignment: 'left'
        }
    });

    describe('render()', () => {
        const { container } = render(<Link {...props}  />);

        expect(container.firstChild).toMatchInlineSnapshot(``);
    })
})