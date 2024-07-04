import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes

function Container({ children }) {
    return (
        <>
            {children}
        </>
    )
}
// Correctly define propTypes for the component
Container.propTypes = {
    children: PropTypes.node,
};
export default Container