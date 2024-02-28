import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import ActionBar from '../actionBar/ActionBar';
import PnrSearch from '../pnrSearch/PnrSearch';
import { Panel, WrapperPaper } from './ActionBarTab.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

interface IActionBarProps {
    showFilterSort?: boolean;
}

const ActionBarTab: React.FC<IActionBarProps> = ({
    showFilterSort,
}: IActionBarProps) => {
    const { t } = useTranslation('actionBarTab');
    const [value, setValue] = useState('1');
    const [searchParams] = useSearchParams();

    const changeTabHandler = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        const pnr = searchParams.get('pnr');

        if (pnr) {
            setValue('2');
        }
    }, [searchParams]);

    return (
        <WrapperPaper sx={{ px: 2 }} elevation={4}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={changeTabHandler}>
                        <Tab label={t('findBuses')} value="1"></Tab>
                        {!showFilterSort ? (
                            <Tab label={t('findTicket')} value="2"></Tab>
                        ) : (
                            <Tab disabled></Tab>
                        )}
                    </TabList>
                    <Panel value="1">
                        <ActionBar showFilterSort={showFilterSort} />
                    </Panel>
                    <Panel value="2">
                        <PnrSearch />
                    </Panel>
                </Box>
            </TabContext>
        </WrapperPaper>
    );
};

export default ActionBarTab;
