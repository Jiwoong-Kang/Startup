import React from 'react';
import { useLocation } from 'react-router-dom';
import { WebSocketComponent } from './websocketcomponent';

export function WebSocketFinal(){
    const location = useLocation();

    return (
        <div>
            {location.pathname === "/mypage" && (
                <div>
                <WebSocketComponent />
                </div>
            )}

            {location.pathname === "/mainsharing" && (
                <div>
                <WebSocketComponent />
                </div>
            )}

            {location.pathname === "/feedback" && (
                <div>
                <WebSocketComponent />
                </div>
            )}

            {location.pathname === "/deleting" && (
                <div>
                <WebSocketComponent />
                </div>
            )}

            {location.pathname === "/code" && (
                <div>
                <WebSocketComponent />
                </div>
            )}

            {location.pathname === "/sharing" && (
                <div>
                <WebSocketComponent />
                </div>
            )}
            
        </div>
    )
}
