export default () => {
    return [...Array(7)]
        .map((_) => [])
        .map((_, i) =>
            i % 2
                ? [...Array(7)].map((_, i) => (i % 2 ? "#" : "_")).join('')
                : [...Array(7)].map((_, i) => (i % 2 ? "_" : "#")).join('')
        ).join('\n')
}


