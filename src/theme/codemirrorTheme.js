import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';


export const codemirrorTheme = createTheme({
    theme: 'dark',
    settings: {
        background: 'transparent',
        foreground: '#c9d1d9',
        caret: '#c9d1d9',
        selection: '#003d73',
        selectionMatch: '#003d73',
        lineHighlight: 'transparent',
    },
    styles: [
        { tag: [t.comment, t.bracket], color: '#8b949e' },
        { tag: [t.className, t.propertyName], color: '#d2a8ff' },
        { tag: [t.attributeName, t.number, t.operator], color: '#79c0ff' },
        {tag:  [t.variableName], color: '#66d9ef'},
        { tag: [t.keyword, t.typeName, t.typeOperator, t.typeName], color: '#ff7b72' },
        { tag: [t.string, t.meta, t.regexp], color: '#a5d6ff' },
        { tag: [t.name, t.quote], color: '#7ee787' },
        { tag: [t.heading], color: '#d2a8ff', fontWeight: 'bold' },
        { tag: [t.emphasis], color: '#d2a8ff', fontStyle: 'italic' },
        { tag: [t.deleted], color: '#ffdcd7', backgroundColor: 'ffeef0' },
    ],
});

export const codemirrorTheme3 = createTheme({
    theme: 'dark',
    settings: {
        background: 'transparent',
        foreground: '#f8f8f2',
        caret: '#f8f8f0',
        selection: 'rgba(255, 255, 255, 0.1)',
        selectionMatch: 'rgba(255, 255, 255, 0.2)',
        gutterBackground: '#282a36',
        gutterForeground: '#6D8A88',
        lineHighlight: 'rgba(255, 255, 255, 0.1)',
    },
    styles: [
        { tag: t.comment, color: '#6272a4' },
        { tag: t.string, color: '#f1fa8c' },
        { tag: t.atom, color: '#bd93f9' },
        { tag: t.meta, color: '#f8f8f2' },
        { tag: [t.keyword, t.operator, t.tagName], color: '#ff79c6' },
        { tag: [t.function(t.propertyName), t.propertyName], color: '#66d9ef' },
        { tag: [t.definition(t.variableName), t.function(t.variableName), t.className, t.attributeName], color: '#50fa7b' },
        { tag: t.atom, color: '#bd93f9' },
    ],
});

export const codemirrorTheme2 = createTheme({
    theme: 'dark',
    settings: {
        background: '#272C35',
        foreground: '#9d9b97',
        caret: '#797977',
        selection: '#ffffff30',
        selectionMatch: '#2B323D',
        gutterBackground: '#272C35',
        gutterForeground: '#465063',
        lineHighlight: '#2B323D',
    },
    styles: [
        {
            tag: [t.function(t.variableName), t.function(t.propertyName), t.url, t.processingInstruction],
            color: 'hsl(207, 82%, 66%)',
        },
        { tag: [t.tagName, t.heading], color: '#e06c75' },
        { tag: t.comment, color: '#54636D' },
        { tag: [t.propertyName], color: 'hsl(220, 14%, 71%)' },
        { tag: [t.attributeName, t.number], color: 'hsl( 29, 54%, 61%)' },
        { tag: t.className, color: 'hsl( 39, 67%, 69%)' },
        { tag: t.keyword, color: 'hsl(286, 60%, 67%)' },
        { tag: [t.string, t.regexp, t.special(t.propertyName)], color: '#98c379' },
    ],
});

export const codemirrorTheme1 = createTheme({
    theme: 'light',
    settings: {
        background: 'transparent',
        foreground: '#94ff41',
        caret: '#5d00ff',
        selection: '#036dd626',
        selectionMatch: '#036dd626',
        lineHighlight: '#8a91991a',
        gutterBackground: '#fff',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#94ff41' },
        { tag: t.variableName, color: '#94ff41' },
        { tag: [t.string, t.special(t.brace)], color: '#e2fa02' },
        { tag: t.number, color: '#e2fa02' },
        { tag: t.bool, color: '#94ff41' },
        { tag: t.null, color: '#94ff41' },
        { tag: t.keyword, color: '#94ff41' },
        { tag: t.operator, color: '#94ff41' },
        { tag: t.className, color: '#94ff41' },
        { tag: t.definition(t.typeName), color: '#94ff41' },
        { tag: t.typeName, color: '#94ff41' },
        { tag: t.angleBracket, color: '#94ff41' },
        { tag: t.tagName, color: '#94ff41' },
        { tag: t.attributeName, color: '#94ff41' },
    ],
});

export default codemirrorTheme;