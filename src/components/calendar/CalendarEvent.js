import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { user } = event;

    return (
        <div>
            <span className="mt-2">{user.name}</span>
        </div>
    )
}
