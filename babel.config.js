module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: '.',
				alias: {
					'@components': './src/components',
					'@database': './src/database',
					'@domain': './src/domain',
					'@hooks': './src/hooks',
					'@routes': './src/routes',
					'@screens': './src/screens',
					'@theme': './src/theme',
					'@utils': './src/utils',
				},
			},
		],
		["@babel/plugin-proposal-decorators", { "legacy": true }]
	],
};
