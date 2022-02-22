import PropTypes from 'prop-types';

export default function Gaps({ from, to, name = ''}) {
  return (
		<div className="thing" style={{ "--gap": `${to}px`, "--initial-gap": `${from}px` }}><strong>{name}</strong><span>{from}-{to}px</span></div>
  );
}

Gaps.propTypes = {
	from: PropTypes.number,
	to: PropTypes.number,
	name: PropTypes.string,
};