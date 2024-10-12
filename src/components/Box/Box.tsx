import {
	createBox,
	createRestyleComponent,
	BackgroundColorProps,
	backgroundColor,
	SpacingProps,
	spacing,
	LayoutProps,
	layout,
	BorderProps,
	border,
} from '@shopify/restyle';
import {Theme} from '@theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
	SpacingProps<Theme> &
	LayoutProps<Theme> &
	BorderProps<Theme> &
	TouchableOpacityProps;

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export const TouchableOpacityBox = createRestyleComponent<
	TouchableOpacityBoxProps,
	Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);
