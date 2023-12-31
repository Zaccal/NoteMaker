import { useCallback } from 'react'
import { CodeLanguage, TypeFormats, TypeSetState } from '../types/types'
import { formatText } from '../utils/utils'

const formatValue = (
    value: string,
    setValue: TypeSetState<string>,
    textForFormat: string,
    typeFormat: TypeFormats,
    code: CodeLanguage = 'javascript'
) => {
    const endTextSymbol = textForFormat[textForFormat.length - 1]
    const startTextSymbol = textForFormat[0]

    const typeFormatTextNow =
        endTextSymbol === startTextSymbol ? startTextSymbol : undefined
    const isNotMarkdownTypeFormatTextNow =
        typeFormatTextNow !== '_' &&
        typeFormatTextNow !== '`' &&
        typeFormatTextNow !== '*' &&
        endTextSymbol !== '_' &&
        endTextSymbol !== '`' &&
        endTextSymbol !== '*' &&
        startTextSymbol !== '_' &&
        startTextSymbol !== '`' &&
        startTextSymbol !== '*'

    if (typeFormat === 'italic' && isNotMarkdownTypeFormatTextNow) {
        const textFormated = formatText(textForFormat, 'italic')

        const target = new RegExp(textForFormat, 'g')
        setValue(value.replace(target, textFormated as string))
    }
    // ---------------------------------------------------------------
    if (typeFormat === 'code' && isNotMarkdownTypeFormatTextNow) {
        const textFormated = formatText(textForFormat, 'code', code)

        setValue(value.replace(textForFormat, textFormated as string))
    }
    // ---------------------------------------------------------------
    if (typeFormat === 'bold' && isNotMarkdownTypeFormatTextNow) {
        const textFormated = formatText(textForFormat, 'bold')

        setValue(value.replace(textForFormat, textFormated as string))
    }
}

const useFormats = (
    value: string,
    setValue: TypeSetState<string>,
    textForFormat: string,
    setTextForFormat: TypeSetState<string>,
    typeFormat: TypeFormats | null,
    code: CodeLanguage = 'javascript'
) => {
    return useCallback(() => {
        if (typeFormat !== null) {
            if (typeFormat.length) {
                if (textForFormat) {
                    formatValue(
                        value,
                        setValue,
                        textForFormat,
                        typeFormat,
                        code
                    )
                    setTextForFormat('')
                    return
                }

                window.addEventListener('keypress', event => {
                    if (
                        event.key === ' ' ||
                        (event.key === 'Spacebar' && typeFormat)
                    ) {
                        if (
                            value.split(' ')[value.split(' ').length - 1] &&
                            value
                        ) {
                            formatValue(
                                value,
                                setValue,
                                value.split(' ')[value.split(' ').length - 1],
                                typeFormat,
                                code
                            )
                            return
                        }
                    }
                })
            }
        }
    }, [value, typeFormat, textForFormat])
}

export default useFormats
