import React from 'react';
import PropTypes from 'prop-types';
import './Coin.css';

export const Coin = props => {
	const handleClick = () => {
		console.log('props.clicked:', props.clicked);
		if (!props.clicked) {
			props.onClick(props.value, props.name);
		}
	};

	return (
		<img
			className={`coin ${props.clicked && 'clicked'}`}
			src={`/images/${props.image}`}
			alt="coin"
			style={{ width: props.width }}
			onClick={handleClick}
		/>
	);
};

Coin.propTypes = {
	value: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	width: PropTypes.string,
	name: PropTypes.string.isRequired,
	clicked: PropTypes.bool
};

Coin.defaultProps = {
	width: '300px',
	clicked: false
};

export default Coin;
