// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const weatherBit = {
  apiKey: '5dedd2ef8cfe4861a3915f41c99e91aa',
  urlBase: 'https://api.weatherbit.io/v2.0/forecast/daily'
};

