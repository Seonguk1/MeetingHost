module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src', // '@' => src 폴더를 의미하게끔
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // 필요한 확장자들
        },
      ],
    ],
  };
  