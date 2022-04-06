import * as React from 'react';

import {Box, Button, styled} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const HeaderWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.grey[100],
    height: '36px',
}));

const IconWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    marginLeft: theme.spacing(1),
}));

interface IViewerHeaderProps {
    fileName: string;
    onCloseClick: () => void;
}

export const ViewerHeader: React.FC<IViewerHeaderProps> = React.memo((props: IViewerHeaderProps) => {
    return (
        <HeaderWrapper>
            <IconWrapper>
                <InsertDriveFileIcon/>
                {props.fileName}
            </IconWrapper>
            <Button
                color={'inherit'}
                onClick={props.onCloseClick}
            >
                <CloseIcon/>
            </Button>
        </HeaderWrapper>
    );
});
