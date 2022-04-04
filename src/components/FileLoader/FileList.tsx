import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import {Box, Button, Container, Divider, List, ListItem, styled} from '@mui/material';

import {files, IFile} from '../../config/filesConfig';

const ListContainer = styled(Container)(() => ({
    width: '100%',
}));

const ListItemWrapper = styled(ListItem)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.up("md")]: {
        flexDirection: 'row',
    },
}));

interface IFileListProps {
    loadFromUrl: (url: string) => Promise<void>;
}

export const FileList: React.FC<IFileListProps> = (props: IFileListProps) => {
    const renderFileList = (): React.ReactNode[] => {
        return files.map((file: IFile, index: number) => (
            <Box key={index.toString()}>
                {index === 0 ? <Divider/> : null}
                <ListItemWrapper>
                    <div>
                        {file.name}
                    </div>
                    <Button
                        onClick={() => props.loadFromUrl(file.url)}
                        size={'small'}
                        variant={'outlined'}
                    >
                        <FormattedMessage id={'Open this file'}/>
                    </Button>
                </ListItemWrapper>
                <Divider/>
            </Box>
        ));
    };

    return (
        <ListContainer>
            <List>
                <ListItemWrapper>

                </ListItemWrapper>
                {renderFileList()}
            </List>
        </ListContainer>
    );
};
