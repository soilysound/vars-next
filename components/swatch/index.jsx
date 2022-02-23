import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import rgbToHex from './rgba-hex';

function getSwatchColor(win, swatch) {

	const { backgroundImage, backgroundColor } = win.getComputedStyle(swatch);
	swatch.querySelector('span').dataset.label = rgbToHex(backgroundImage.match('gradient') ? backgroundImage : backgroundColor);

}
export default function Swatch({ style, name = '', color = '', darkcolor = '', cssvar = '' }) {
	const swatch = useRef();
	useEffect(() => {
		getSwatchColor(window, swatch.current);
		window.matchMedia("(prefers-color-scheme: dark)").addListener(e => getSwatchColor(window, swatch.current));
	}, []);
  return (
    <div className="swatch">
			<div className="swatch-color" style={{ "background": `var(${cssvar})`, ...style }} ref={swatch}>
				<span data-label={color} data-label-dark={darkcolor}></span>
			</div>
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
	darkcolor: PropTypes.string,
	cssvar: PropTypes.string,
};