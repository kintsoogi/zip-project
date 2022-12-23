const path = require('path')
const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')

const { name, version, repository } = require('./package.json')

const sections = [
  {
    name: 'README',
    content: 'README.md',
  },
  {
    name: 'Examples',
    components: () => [
      'src/hooks/use-zip-usfm-file-input.jsx',
      'src/components/CreateZipProject/CreateZipProject.jsx',
      'src/components/ProjectList/ProjectList.jsx',
      'src/components/ExportUsfmZip/ExportUsfmZip.jsx',
    ],
  },
]

module.exports = {
  //   assetsDir: "src/data",
  usageMode: 'expand',
  exampleMode: 'expand',
  pagePerSection: true,
  sections,
  moduleAliases: { 'zip-package': path.resolve(__dirname, 'src') },
  getComponentPathLine: componentPath => {
    const _name = path.basename(componentPath, '.jsx')
    return `import { ${_name.split('.')[0]} } from '${name}';`
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
}
