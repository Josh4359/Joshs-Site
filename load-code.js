document.addEventListener('DOMContentLoaded', () => {
    const scriptTag = document.querySelector('script[src="load-code.js"]');
    console.log(j);
    const highlightedCodeId = scriptTag.getAttribute('codeId');
    const csharpFile = scriptTag.getAttribute('data-csharp-file');
    const codeElement = document.querySelector(`#${highlightedCodeId}`);
    
    const codeBlock = document.createElement('code');
    codeBlock.className = 'language-csharp';
    codeElement.appendChild(codeBlock);

    fetch(csharpFile)
        .then(response => response.text())
        .then(data => {
            codeBlock.textContent = data;
            hljs.highlightAll();
        });
});