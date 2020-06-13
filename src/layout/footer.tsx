import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class Footer extends Component<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
    }


    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    테스트 중
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

}

export default Footer
