/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Building...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  //const jsonStats = stats.toJson();
  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Build succeeded'));
  return 0;
});
