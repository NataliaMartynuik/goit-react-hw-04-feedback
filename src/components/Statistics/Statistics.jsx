import PropTypes from 'prop-types';
import { TextStatistics } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
         <div>
            <TextStatistics>Good:  {good}</TextStatistics>
            <TextStatistics>Neutral:  {neutral}</TextStatistics>
            <TextStatistics>Bad:  {bad}</TextStatistics>
            <TextStatistics>Total:  {total}</TextStatistics>
            <TextStatistics>Positive feedback:  {percentage} %</TextStatistics>
          </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}
