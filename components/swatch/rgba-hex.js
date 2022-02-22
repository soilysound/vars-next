export default function rgbToHex(val) {
	const colors = val.match(/rgb\((\d+), (\d+), (\d+)\)/g);
	if (!colors) {
		return;
	}
	const hexes = colors.map(c => {
		const h = c.match(/^rgb\((\d+), (\d+), (\d+)\)$/)
		return ConvertRGBtoHex(h[1], h[2], h[3]);
	});
	
	return hexes.join(', ');
	
}

function ColorToHex(color) {
  var hexadecimal = parseInt(color, 10).toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}