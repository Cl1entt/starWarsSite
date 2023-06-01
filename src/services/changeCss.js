export const changeCss = theme =>{
    const root = document.querySelector(`:root`)

    const cssVar = ['header', 'bgimage'];

    cssVar.forEach(element =>{
        root.style.setProperty(
            `--theme-default-${element}`, 
           `var(--theme-${theme}-${element})`
        );
    })
}