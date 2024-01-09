import { TypeSearchPleace } from '../hook/useSearch'
import { CodeLanguage, TypeFormats } from '../types/types'

export const lengthSentence = (sentence: string, length: number): string => {
    return sentence.split('', length).join('')
}

export const clearMarkdown = (text: string) => {
    text = text.replace(/\*{1,2}/g, '')

    text = text.replace(/```[\s\S]*?```/g, '')

    text = text.replace(/`([^`]+)`/g, '$1')

    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')

    text = text.replace(/!\[([^\]]+)\]\([^\)]+\)/g, '')

    text = text.replace(/^\s*-\s+/gm, '')

    text = text.replace(/^\s*\d+\.\s+/gm, '')

    text = text.replace(/^\s*>/gm, '')

    text = text.replace(/^#\s+(.*)$/gm, '$1')

    text = text.replace(/#/g, '')

    return text.trim()
}

export const CodeMarkdown = {
    javascript: 'js',
    typescript: 'ts',
    python: 'py',
    java: 'java',
    csharp: 'cs',
    cpp: 'cpp',
    php: 'php',
    ruby: 'rb',
    swift: 'swift',
    go: 'go',
    kotlin: 'kt',
    rust: 'rs',
    dart: 'dart',
    scala: 'scala',
    groovy: 'groovy',
    haskell: 'hs',
    lua: 'lua',
    perl: 'pl',
    'objective-c': 'm',
    matlab: 'matlab',
}

const formatTextSymbols = (text: string, symbol: string) => {
    if (text.split(' ').length > 1) {
        if (!text.split(' ').some(word => word === '')) {
            return [symbol, text, symbol].join('')
        }

        return [
            symbol,
            text
                .split(' ')
                .filter(letter => letter !== '')
                .join(' '),
            symbol,
            ' ',
        ].join('')
    } else if (!text.split(' ').some(word => word === '')) {
        return [symbol, ...text.split(''), symbol].join('')
    }

    return [
        symbol,
        text
            .split('')
            .filter(letter => letter !== ' ')
            .join(''),
        symbol,
        ' ',
    ].join('')
}

export const formatText = (
    text: string,
    type: TypeFormats,
    code: CodeLanguage = 'javascript'
) => {
    const textArr = text.split(' ').filter(word => word !== '')
    if (textArr.length >= 1 || type === 'code') {
        // If there is one word than do this

        switch (type) {
            case 'italic':
                return formatTextSymbols(text, '_')
            case 'code':
                return '```' + CodeMarkdown[code] + '\n' + text + '\n' + '```'
            case 'bold':
                return formatTextSymbols(text, '***')
        }
    }
}

export const getTypeSearchPlaceByLinkValue = (
    linkValue: string
): TypeSearchPleace => {
    switch (linkValue.substring(1)) {
        case '':
            return 'note'
        case 'todos':
            return 'tasks'
        case 'trash':
            return 'trash'
        default:
            return 'no_one'
    }
}

export const getFormateTime = (time: string) => {
    return time
        .split(':')
        .map(timeNumber =>
            Number(timeNumber) < 10 ? `0${timeNumber}` : timeNumber
        )
        .join(':')
}
