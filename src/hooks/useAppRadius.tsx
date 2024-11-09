import {useTheme} from '@shopify/restyle';
import {Theme} from '@theme';

export function useAppRadius() {
	const theme = useTheme<Theme>();

	return theme.borderRadii;
}
