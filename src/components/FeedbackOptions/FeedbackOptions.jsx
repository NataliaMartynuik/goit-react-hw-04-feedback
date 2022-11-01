import PropTypes from 'prop-types';
import { ButtonOptuins } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                    <ButtonOptuins key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</ButtonOptuins>
                )
            })}
        </div>
)
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}



