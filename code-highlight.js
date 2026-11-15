(function () {
  if (!window.hljs) {
    console.error('Code highlighting could not load. Examples remain available as plain text.');
    return;
  }

  hljs.registerLanguage('okalit', () => {
    const nestedExpression = {
      begin: /\{/,
      end: /\}/,
      subLanguage: 'javascript',
      contains: ['self'],
    };
    const expression = {
      begin: /\$\{/,
      beginScope: 'punctuation',
      end: /\}/,
      endScope: 'punctuation',
      subLanguage: 'javascript',
      contains: [nestedExpression],
    };
    return {
      name: 'Okalit',
      aliases: ['ok'],
      contains: [
        {
          begin: /^@render\s*\{/,
          beginScope: 'keyword',
          end: /^\}/,
          endScope: 'punctuation',
          subLanguage: 'xml',
          contains: [expression],
        },
        {
          begin: /^@(component|page|module|main|script|logic)\s*\{/,
          beginScope: 'keyword',
          end: /^\}/,
          endScope: 'punctuation',
          subLanguage: 'javascript',
        },
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
      ],
    };
  });

  window.okalitHighlight = function (element, language) {
    const source = element.textContent;
    element.innerHTML = hljs.highlight(source, { language }).value;
    element.classList.add('syntax-highlighted');
  };

  const hero = document.querySelector('#hero-section pre');
  if (hero) window.okalitHighlight(hero, 'okalit');
})();
