import path from 'node:path'
import { generateApi } from 'swagger-typescript-api'

generateApi({
  name: 'RootApi.ts',
  output: path.resolve(process.cwd(), './src/__generated__'),
  url: 'http://localhost:5170/swagger/Inner/swagger.json',
  httpClientType: 'axios',
  generateResponses: true,
  moduleNameFirstTag: true,
  extractEnums: true,
  hooks: {
    onFormatRouteName: (routeInfo) => {
      // foo/{id} => fooById
      const routes = routeInfo.route.split('/')
      const lastPath = routes.slice(-1)[0]

      const lastPathIsTemplate = lastPath.startsWith('{') && lastPath.endsWith('}')

      if (lastPathIsTemplate) {
        const preLastPath = routes.slice(-2)[0]
        const id = lastPath.slice(1, -1)
        return preLastPath + 'By' + id[0].toUpperCase() + id.slice(1)
      } else {
        return lastPath
      }
    },
  },

  codeGenConstructs: (constructs) => ({
    ...constructs,
    TypeField: ({ readonly, key, value }) => {
      const values = value.split('|').map((i) => i.trim())
      let isNullable = false

      if (values.length > 1 && values[values.length - 1].startsWith('null')) {
        isNullable = true
        const endStr = values[values.length - 1].endsWith(')') ? ')' : ''
        value = values.slice(0, -1).join(' | ') + endStr
      }

      return [readonly ? 'readonly ' : '', key, isNullable ? '? ' : '', ': ', value].join('')
    },
  }),
}).catch((e) => console.error(e))
