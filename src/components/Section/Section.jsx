import PropTypes from 'prop-types';
import { Wraper, Title } from './Section.styled'

export const Section = ({ title, children }) => {
    return (
         <Wraper>
      <Title>
        {title}
      </Title>
        {children}
       </Wraper>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}
