import {createTheme} from '@shopify/restyle';

const palette = {
	blueLighter: '#3399FF',
	blueLight: '#0073E6',
	blueMain: '#0052CC',
	blueDark: '#003399',
	blueDarker: '#001966',

	greenLighter: '#52B788',
	greenLight: '#40916C',
	greenMain: '#24786D',
	greenDark: '#1B4332',
	greenDarker: '#081C15',

	grayLighter: '#E0E0E0',
	grayLight: '#B3B3B3',
	grayMain: '#808080',
	grayDark: '#4D4D4D',
	grayDarker: '#262626',
	grayDarkest: '#1A1A1A',

	white: '#F5F5F5',
	black: '#000000',

	redMain: '#E5383B',
	green: '#33CC33',
	transparent: '#FFFFFF00',
};

export const theme = createTheme({
	colors: {
		...palette,
		background: palette.grayDarkest,
		bluePrimary: palette.blueMain,
		blueSecondary: palette.blueLight,

		greenPrimary: palette.greenMain,
		greenSecondary: palette.greenLight,

		grayPrimary: palette.grayMain,
		graySecondary: palette.grayLight,

		white: palette.white,
		black: palette.black,

		redError: palette.redMain,
		greenSuccess: palette.green,
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
