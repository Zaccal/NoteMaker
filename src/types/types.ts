import { Dispatch, SetStateAction } from 'react'

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export type TypeSetValueFn<T> = (newValue: T) => void

export type TypeFormats = 'italic' | 'code' | 'bold'

export type CodeLanguage =
    | 'javascript'
    | 'typescript'
    | 'python'
    | 'java'
    | 'csharp'
    | 'cpp'
    | 'php'
    | 'ruby'
    | 'swift'
    | 'go'
    | 'kotlin'
    | 'rust'
    | 'dart'
    | 'scala'
    | 'groovy'
    | 'haskell'
    | 'lua'
    | 'perl'
    | 'objective-c'
    | 'matlab'
