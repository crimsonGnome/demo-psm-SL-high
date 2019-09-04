import React from 'react';
import CalendarStyles from './styles/CalendarStyles';
import Button, { ButtonLight } from './styles/Buttons';

const Calendar = () => {
  return (
    <CalendarStyles>
      <h3>Upcoming Events</h3>
      <ul>
        <li>
          <div className="date-icon">
            <div className="month">Sep</div>
            <div className="day">10</div>
          </div>
          <div className="event-details">
            <h4 className="event-title">Event</h4>
            <time>6:00 PM</time>
            <div>Location</div>
          </div>
        </li>
        <li>
          <div className="date-icon">
            <div className="month">Sep</div>
            <div className="day">24</div>
          </div>
          <div className="event-details">
            <h4 className="event-title">Event</h4>
            <time>6:00 PM</time>
            <div>Location</div>
          </div>
        </li>
        <li>
          <div className="date-icon">
            <div className="month">Oct</div>
            <div className="day">6</div>
          </div>
          <div className="event-details">
            <h4 className="event-title">Event</h4>
            <time>6:00 PM</time>
            <div>Location</div>
          </div>
        </li>
        <li>
          <div className="date-icon">
            <div className="month">Oct</div>
            <div className="day">16</div>
          </div>
          <div className="event-details">
            <h4 className="event-title">Event</h4>
            <time>6:00 PM</time>
            <div>Location</div>
          </div>
        </li>
      </ul>
      <ButtonLight>
        More Events <i className="fas fa-angle-double-right"></i>
      </ButtonLight>
    </CalendarStyles>
  );
};

export default Calendar;
