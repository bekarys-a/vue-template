// https://gist.github.com/bekarys-a/ce938fac6015610549ce3857be7d07fb

type PropertiesOnly<T> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K
  }[keyof T]
>

type IsArray<T> = T extends (infer U)[] ? true : false

type ValidPath<T, Prefix extends string = ''> = T extends object
  ? {
      [K in keyof PropertiesOnly<T> & (string | number)]: IsArray<T[K]> extends true // некорректно обрабатывает массивы
        ? never
        : `${K}` | `${K}.${ValidPath<T[K], `${Prefix}${K}.`>}`
    }[keyof PropertiesOnly<T> & (string | number)]
  : never

export function validatePath<T>(path: ValidPath<T>): ValidPath<T> {
  /** валидацию пути объекта */
  return path
}
