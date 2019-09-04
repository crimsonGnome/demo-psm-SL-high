import styled from 'styled-components';

const CalendarStyles = styled.div`
  position: relative;
  background: white;
  margin: 20px;
  padding: 20px;
  ul {
    margin: 0;
    list-style: none;
    align-items: center;
    align-content: center;
  }
  li {
    align-items: center;
    align-content: center;
    padding: 20px 0;
    position: relative;
  }
  .date-icon {
    width: 80px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .month {
    font-weight: bold;
    font-size: 2.4em;
    text-transform: uppercase;
    text-align: left;
    line-height: 0.7;
    margin-bottom: -5px;
    color: ${props => props.theme.primary};
  }
  .day {
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: bold;
    font-size: 4em;
    text-transform: uppercase;
    text-align: right;
    line-height: 0.7;
    color: ${props => props.theme.secondary};
  }
  .event-title {
    color: ${props => props.theme.primary};
    font-weight: normal;
    line-height: 0.875;
    margin: 0;
    transition: all 0.2s ease-in-out;
  }
  time {
    font-family: 'PT Sans', sans-serif;
    font-style: italic;
    font-weight: bold;
    opacity: 0.7;
    margin-top: -10px;
    margin-bottom: 10px;
    order: 1;
  }
  .event-details {
    margin-left: 90px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
  }
  ::after {
    position: absolute;
    right: 0;
    display: block;
    content: '';
    height: 100%;
    width: 3px;
    background: ${props => props.theme.primary};
    margin-right: -11px;
    top: -10px;
    bottom: -4.1rem;
    z-index: 1;
  }
`;

export default CalendarStyles;
