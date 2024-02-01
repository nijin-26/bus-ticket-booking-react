import { Box, Paper, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { useState } from 'react';
import ActionBar from '../actionBar/ActionBar';
import PnrSearch from '../actionBar/PnrSearch';

export default function ActionBarTab() {
    const [value, setValue] = useState('1');

    const changeTabHandler = (
        event: React.SyntheticEvent,
        newValue: string
    ) => {
        setValue(newValue);
    };

    return (
        <Paper sx={{ px: 2 }} elevation={6}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={changeTabHandler}>
                        <Tab label="Find buses" value="1"></Tab>
                        <Tab label="Find my ticket" value="2"></Tab>
                    </TabList>
                    <TabPanel value="1">
                        <ActionBar />
                    </TabPanel>
                    <TabPanel value="2">
                        <PnrSearch />
                    </TabPanel>
                </Box>
            </TabContext>
        </Paper>
    );
}
