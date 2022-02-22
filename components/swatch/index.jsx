import PropTypes from 'prop-types';

export default function Swatch({ style, name = '', color = '', darkcolor = '', cssvar = '' }) {
  return (
    <div className="swatch">
			<div className="swatch-color" style={{ "background": `var(${cssvar})`, ...style }}>
				<span data-label={color} data-label-dark={darkcolor}></span></div>
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