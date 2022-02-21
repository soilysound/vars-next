import PropTypes from 'prop-types';

export default function Swatch({ style, name = '', color = '', cssvar = '' }) {
  return (
    <div className="swatch">
			<div className="swatch-color" style={{ "background": `var(${cssvar})`, ...style }}>
				{ color }</div>
			<div className="swatch-body">
				<strong>{ name }</strong>
				<em>{ cssvar }</em>
			</div>
    </div>
  );
}

Swatch.propTypes = {
	style: PropTypes.object,
	name: PropTypes.string,
	color: PropTypes.string,
	var: PropTypes.string,
};