import {Dimensions} from 'react-native';

export default function deviceDimensions() {
	const width = Dimensions.get('window').width,
		height = Dimensions.get('window').height;

	var dimensions = {
		w: width,
		h: height,
	};

	return dimensions;
}
