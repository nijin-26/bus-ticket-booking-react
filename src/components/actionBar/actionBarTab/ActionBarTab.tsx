import { Box, Tab, useMediaQuery } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import ActionBar from '../actionBar/ActionBar';
import PnrSearch from '../pnrSearch/PnrSearch';
import { Panel, WrapperPaper } from './ActionBarTab.styled';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '@emotion/react';

interface IActionBarProps {
    showFilterSort?: boolean;
    showPnrSearch?: boolean;
}

const ActionBarTab: React.FC<IActionBarProps> = ({
    showFilterSort,
    showPnrSearch,
}: IActionBarProps) => {
    const { t } = useTranslation('actionBarTab');
    const [value, setValue] = useState('1');
    const [searchParams] = useSearchParams();
    const pnr = searchParams.get('pnr');

    const { breakpointValues } = useTheme();
    const isSmallScreen = useMediaQuery(
        `(max-width:${breakpointValues.small})`
    );

    const changeTabHandler = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (pnr) {
            setValue('2');
        }
    }, [pnr]);

    return (
        <WrapperPaper sx={{ px: 2 }} elevation={4}>
            <TabContext value={value}>
                <Box>
                    <TabList onChange={changeTabHandler}>
                        <Tab
                            label={t('findBuses')}
                            value="1"
                            style={{ textTransform: 'none' }}
                        ></Tab>
                        {!showFilterSort ? (
                            <Tab
                                label={t('findTicket')}
                                value="2"
                                style={{ textTransform: 'none' }}
                            ></Tab>
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
