import { createUseStyles } from 'react-jss';

export default createUseStyles(() => ({
    root: {
        color: '#3170b7',
        padding: '15px 32px',
        float: (props: { alignment: string }) => props.alignment
    },
    '&:hover': {
        color: '#000000'
    }
}));