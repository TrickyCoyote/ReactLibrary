import * as React from 'react';

import useStyles from './link.style';

export type Props = {
    children: React.ReactNode;
    linkString: string;
    target?: string;
    dataTestId?: string;
    alignment?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link: React.FC<Props> = ({
    children,
    linkString= '',
    target = '_self',
    dataTestId= 'link',
    alignment = 'left'
}) => {

    const classes = useStyles({ alignment })

    const rootProps = {
        className: classes.root,
        href: linkString,
        target: target,
        'data-testid': dataTestId
    };

    return (
        <a {...rootProps}>
            <span>{children}</span>
        </a>
    )
}

export default Link;