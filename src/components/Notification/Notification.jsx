import PropTypes from 'prop-types';
import { Wraper, TextMessage } from './Notification.styled'


export const Notification = ({ message }) => {
    return (

        <Wraper>
            <TextMessage>{message}</TextMessage>
        </Wraper>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}