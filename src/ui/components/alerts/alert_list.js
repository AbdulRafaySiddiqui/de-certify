import React from 'react';
import { Alert } from './alert';
import { useAlertContext } from '../../../context_providers/alert_context';

export const AlertsList = () => {
    const { alertList } = useAlertContext();
    return (
        <div
            style={{
                position: 'absolute',
                top: '70px',
                right: '0',
                zIndex: '2000'
            }}
        >
            {
                alertList &&
                alertList.map(a => {
                    if (a.wasShown) {
                        return null;
                    }
                    return (<Alert key={a.id} {...a} />)
                })
            }
        </div>
    );
}