import React from 'react'

export const CalendarEvent = ({ event }) => {

    const { user, title } = event;

    return (
        <div>
            <strong className="mt-2">{title}</strong>
            <br />
            <span>{user.name}</span>
        </div>
    )
}
