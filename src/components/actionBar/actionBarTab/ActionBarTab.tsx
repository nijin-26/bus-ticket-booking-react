import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import React, { useState } from 'react';
import ActionBar from '../actionBar/ActionBar';
import PnrSearch from '../actionBar/PnrSearch';
import { Panel, WrapperPaper } from './ActionBar.styled';

export default function ActionBarTab() {
    const [value, setValue] = useState('1');

    const changeTabHandler = (
        event: React.SyntheticEvent,
        newValue: string
    ) => {
        setValue(newValue);
    };

    return (
        <WrapperPaper sx={{ px: 2 }} elevation={4}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={changeTabHandler}>
                        <Tab label="Find buses" value="1"></Tab>
                        <Tab label="Find my ticket" value="2"></Tab>
                    </TabList>
                    <Panel value="1">
                        <ActionBar />
                    </Panel>
                    <Panel value="2">
                        <PnrSearch />
                    </Panel>
                </Box>
            </TabContext>
        </WrapperPaper>
    );
}
