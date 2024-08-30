/**
 * @fileoverview RouteTabs component
 * @param {Array} tabs - Array of tabs[{ label: string, href: string }]
 */

import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useNavigate, useLocation } from 'react-router-dom';
import { removeTrailingSlash } from '../tools/operation';
function samePageLinkNavigation( event: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) {
    if(
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ){
        return false;
    }
    return true;
}
  
interface LinkTabProps {
    label: string;
    value: string;
}

function LinkTab(props: LinkTabProps) {
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            href={props.value}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                // Routing libraries handle this, you can remove the onClick handle when using them.
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                    navigate(props.value, { replace: true })
                }
            }}
            {...props}
        />
    );
}

function RouteTabs({ tabs, handleChange }: { tabs: Array<LinkTabProps>, handleChange?: (event: React.SyntheticEvent, newValue: number) => void }) {
    const location = useLocation();
    const value = removeTrailingSlash(location.pathname);
    const show = tabs.some(tab => removeTrailingSlash(tab.value) === value);
    return (
        show ? <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto">
            {tabs.map((tab, index) => <LinkTab key={tab.value} label={tab.label} value={removeTrailingSlash(tab.value)} />)}
        </Tabs> : null
    );
}
export default RouteTabs;