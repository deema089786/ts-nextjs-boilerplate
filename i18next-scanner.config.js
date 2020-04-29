// const fs = require('fs');
// const chalk = require('chalk');
const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
  options: {
    debug: false,
    removeUnusedKeys: true,
    browserLanguageDetection: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.ts', '.tsx'],
    },
    trans: {
      extensions: ['.ts', '.tsx'],
      fallbackKey: (ns, value) => {
        return value;
      },
    },
    lngs: ['en', 'ua', 'ru'],
    ns: ['common'],
    defaultNs: 'common',
    defaultValue(lng, ns, key) {
      return key;
    },
    resource: {
      loadPath: 'public/static/locales/{{lng}}/{{ns}}.json',
      savePath: '{{lng}}/{{ns}}.json',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: typescriptTransform({ extensions: [".tsx"] }),
  // transform: function customTransform(file, enc, done) {
  //   const { parser } = this;
  //   const content = fs.readFileSync(file.path, enc);
  //   let count = 0;
  //
  //   parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
  //     parser.set(key, { ...options, nsSeparator: false, keySeparator: false });
  //     ++count;
  //   });
  //
  //   if (count > 0) {
  //     console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
  //   }
  //
  //   done();
  // },
};
