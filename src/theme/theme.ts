import {createTheme} from '@shopify/restyle';

const palette = {
	blueLighter: '#3399FF',
	blueLight: '#0073E6',
	blueMain: '#0052CC',
	blueDark: '#003399',
	blueDarker: '#001966',

	yellowLighter: '#FFFF66',
	yellowLight: '#FFFF00',
	yellowMain: '#FFCC00',
	yellowDark: '#FF9900',
	yellowDarker: '#FF6600',

	grayLighter: '#E0E0E0',
	grayLight: '#B3B3B3',
	grayMain: '#808080',
	grayDark: '#4D4D4D',
	grayDarker: '#262626',
	grayDarkest: '#1A1A1A',

	white: '#F5F5F5',
	black: '#000000',

	redMain: '#E5383B',
	greenMain: '#33CC33',
};

export const theme = createTheme({
	colors: {
		...palette,
		background: palette.yellowLight,
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
