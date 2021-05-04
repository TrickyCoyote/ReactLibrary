import React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs, text} from "@storybook/addon-knobs";

import README from './README.md';
import Link from '.';

const stories = storiesOf('Link', module );

stories.addDecorator(withKnobs);
stories.addParameters({
    readme: {
        content: README
    }
});

stories.add('default', () => {
    return(
        <Link
            linkString={text('URL', '')}
            target={text('Target', '_self')}
            alignment={text('Alignment', 'left')}
        >
            {text('Label','I am a link')}
        </Link>
    )
})