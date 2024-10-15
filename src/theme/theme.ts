import {createTheme} from '@shopify/restyle';

const palette = {
	blueLighter: '#00568F',
	blueLight: '#003A61',
	blueMain: '#002E4E',
	blueDark: '#00253E',
	blueDarker: '#001A2C',

	yellowLighter: '#FFEE32',
	yellowLight: '#FFD100',
	yellowMain: '#F7B801',
	yellowDark: '#EF9F01',
	yellowDarker: '#EB9302',

	grayLighter: '#D4D4D8',
	grayLight: '#A1A1AA',
	grayMain: '#71717A',
	grayDark: '#525252',
	grayDarker: '#404040',

	white: '#FFFFFF',
	black: '#000000',

	redMain: '#E5383B',
	greenMain: '#2DC653',
};

export const theme = createTheme({
	colors: {
		...palette,
		background: palette.blueDarker,
		bluePrimary: palette.blueMain,
		blueSecondary: palette.blueLight,

		yellowPrimary: palette.yellowMain,
		yellowSecondary: palette.yellowLight,

		grayPrimary: palette.grayMain,
		graySecondary: palette.grayLight,

		white: palette.white,
		black: palette.black,

		redError: palette.redMain,
		greenSuccess: palette.greenMain,
	},
	borderRadii: {
		s4: 4,
		s8: 8,
		s16: 16,
		s24: 24,
		s32: 32,
	},
	spacing: {
		s2: 2,
		s4: 4,
		s8: 8,
		s12: 12,
		s16: 16,
		s24: 24,
		s32: 32,
	},

	textVariants: {
		defaults: {},
	},
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
