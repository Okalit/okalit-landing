(function () {
  function example(role, config, { script, logic, render } = {}) {
    return [
      script && `@script {\n${script}\n}`,
      `@${role} {\n${config}\n}`,
      logic && `@logic {\n${logic}\n}`,
      render && `@render {\n${render}\n}`,
    ].filter(Boolean).join('\n\n');
  }

  const main = example('main', `  tag: 'main-app',
  routes,
  obfuscateChannels: true,
  i18n: { locales: ['en', 'es'], default: 'en' },
  template: (content) => html\`<app-shell>\${content}</app-shell>\`,`, {
    script: `  import { html } from '@okalit/core';
  import routes from './app.routes.js';`,
  });

  const playground = {
    main,
    module: example('module', "  tag: 'home-module'"),
    page: example('page', `  tag: 'login-page',
  styles: ['./login.page.scss'],`, {
      script: `  import { createForm, required, isEmail } from '@okalit/core/form';
  import { inject } from '@okalit/core';`,
      logic: `  form = createForm({
    fields: {
      email: { value: '', validators: [required(), isEmail()] },
      password: { value: '', validators: [required()] },
    },
  });

  handleLogin() {
    if (!this.form.validate()) return;
    inject('auth').login(this.form.values()).fire({
      onSuccess: () => this.navigate('/home'),
      onError: (err) => this.form.setErrors(err.body),
    });
  }`,
      render: `  <input-atom name="email" .value=\${this.form.fields.email.value.value}
    @on:change=\${this.form.handleInput}
    @on:blur=\${this.form.handleBlur}></input-atom>
  <input-atom name="password" type="password"
    .value=\${this.form.fields.password.value.value}
    @on:change=\${this.form.handleInput}
    @on:blur=\${this.form.handleBlur}></input-atom>
  <button-atom @on:click=\${this.handleLogin}>Sign In</button-atom>`,
    }),
    component: example('component', `  tag: 'badge-atom',
  styles: ['./badge-atom.scss'],
  props: {
    label: { type: String, value: '' },
    variant: { type: String, value: 'default' },
  },`, {
      render: `  <span class="badge \${this.variant.value}">
    \${this.label.value}
  </span>`,
    }),
  };

  const generated = (role, name) => example(role, `  tag: '${name.includes('-') ? name : `${name}-${role}`}',
  styles: ['./${name}.scss', '@styles/global.scss'],`, {
    render: `  <div class="${name}">
    <slot></slot>
  </div>`,
  });

  const docExamples = {
    'my-counter.js': example('component', `  tag: 'my-counter',
  styles: ['./my-counter.scss'],
  props: {
    count: { type: Number, value: 0 }
  }`, {
      render: `  <p>Count: \${this.count.value}</p>
  <button @click=\${() => this.count.value++}>+1</button>`,
    }),
    'user-card.js': generated('component', 'user-card'),
    'settings.js': generated('page', 'settings'),
    'billing.module.js': example('module', "  tag: 'billing-module'"),
    'billing.page.js': example('page', `  tag: 'billing-page',
  styles: ['./billing.page.scss', '@styles/global.scss'],`, {
      script: `  import { t } from '@okalit/core';`,
      render: `  <main>
    <h1>\${t("WELCOME")}</h1>
  </main>`,
    }),
    'my-component.js': example('component', `  tag: 'my-component',
  styles: ['./my-component.scss'],
  props: {
    count: { type: Number, value: 0 },
    label: { type: String, value: 'Hello' },
  },`, {
      logic: `  onConnected() {
    // Called when the component connects to the DOM.
  }`,
      render: `  <p>\${this.label.value}: \${this.count.value}</p>
  <button @click=\${() => this.count.value++}>+1</button>`,
    }),
    'main-app.js': example('main', `  tag: 'main-app',
  routes,
  modeDebug: false,
  obfuscateChannels: true,
  i18n: { locales: ['en', 'es'], default: 'en', basePath: '/i18n' },
  template: (content) => html\`<app-layout>\${content}</app-layout>\`,`, {
      script: `  import { html } from '@okalit/core';
  import routes from './app.routes.js';`,
    }),
    'i18n:main-app.js': example('main', `  tag: 'main-app',
  i18n: {
    locales: ['en', 'es', 'fr'],
    default: 'en',
    basePath: '/i18n',
  },`),
    'home.module.js': playground.module,
    'home.page.js': example('page', "  tag: 'home-page'", {
      logic: `  onCacheHide() {
    // Pause work while this cached page is hidden.
  }

  onCacheView() {
    // Resume work when this cached page is restored.
  }`,
      render: '  <h1>Welcome home</h1>',
    }),
    'profile.page.js': example('page', `  tag: 'profile-page',
  channels: {
    token: sessionToken(),
    user: userProfile('onUserChange'),
    toast: toastEvent('onToast'),
  },`, {
      script: `  import { sessionToken, userProfile, toastEvent } from '../../channels/session.channel.js';`,
      logic: `  onConnected() {
    console.log('Current user:', this.user.value);
  }

  onUserChange(value) {
    console.log('User updated:', value);
  }

  onToast(message) {
    // Show a toast notification.
  }`,
      render: `  <p>Hello, \${this.user.value?.name}</p>
  <button @click=\${() => this.user.set({ ...this.user.value, name: 'New' })}>
    Update name
  </button>
  <button @click=\${() => this.toast.set('Profile saved!')}>Show toast</button>`,
    }),
    'define-element:Signature': example('component', `  tag: 'my-component',
  styles: ['./my-component.scss'],
  props: {
    myProp: { type: String, value: 'default' },
    count: { type: Number, value: 0 },
    active: { type: Boolean, value: false },
  },`),
    'props:Declaration': example('component', `  tag: 'user-avatar',
  props: {
    src: { type: String, value: '' },
    size: { type: Number, value: 48 },
    online: { type: Boolean, value: false },
  },`),
    'lifecycle:Example': example('component', "  tag: 'user-card'", {
      logic: `  onConnected() {
    console.log('Component mounted');
  }

  onChange(changes) {
    if (changes.userId) {
      console.log('User changed from', changes.userId.previous, 'to', changes.userId.current);
    }
  }

  onDisconnected() {
    console.log('Component unmounted');
  }`,
    }),
  };

  const syntax = document.body?.dataset.exampleSyntax ||
    (new URLSearchParams(window.location.search).get('syntax') === 'js' ? 'js' : 'ok');
  window.okalitSyntax = { value: syntax, playground, docExamples };

  const blocks = [...document.querySelectorAll('.code-block')].map((block) => ({
    pre: block.querySelector('pre'),
    header: block.querySelector('.code-block-header span'),
    section: block.closest('section')?.id,
    html: block.querySelector('pre')?.innerHTML,
    title: block.querySelector('.code-block-header span')?.textContent,
  }));
  const labels = ['main', 'module', 'page', 'component'].map((name) => {
    const label = document.querySelector(`#p-tab-${name} span`);
    return label && { label, html: label.innerHTML };
  }).filter(Boolean);
  const navigationLinks = [...document.querySelectorAll('a[href^="index.html"], a[href^="doc.html"]')];

  function switchSyntax(value) {
    window.okalitSyntax.value = value;
    const isOk = value === 'ok';
    for (const button of document.querySelectorAll('[data-syntax]')) {
      const active = button.dataset.syntax === value;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('bg-brand-purple/20', active);
      button.classList.toggle('text-brand-purple', active);
    }
    for (const { pre, header, section, html, title } of blocks) {
      if (!pre || !header) continue;
      pre.classList.remove('syntax-highlighted');
      const code = docExamples[`${section}:${title}`] || docExamples[title] || docExamples[title.split('/').at(-1)];
      if (isOk && code) {
        pre.textContent = code;
        if (window.okalitHighlight) window.okalitHighlight(pre, 'okalit');
        header.textContent = title.endsWith('.js') ? title.replace(/\.js$/, '.ok') : `${title} (.ok)`;
      } else {
        pre.innerHTML = html;
        header.textContent = title;
        if (isOk && ['cli', 'project-structure', 'router'].includes(section) &&
            title !== 'Mixing formats in an existing JavaScript app') {
          // Only change UI filenames; routes, services and shared APIs stay JS.
          pre.innerHTML = html.replace(/\b(main-app|user-card|settings|[\w-]+\.(?:module|page))\.js\b/g, '$1.ok');
        }
      }
    }
    for (const { label, html } of labels) label.innerHTML = isOk ? html.replace(/\.js\b/g, '.ok') : html;
    for (const link of navigationLinks) {
      const url = new URL(link.href);
      url.searchParams.set('syntax', value);
      link.href = url.href;
    }
    window.dispatchEvent(new CustomEvent('okalit-syntax-change'));
  }

  for (const button of document.querySelectorAll('[data-syntax]')) {
    button.addEventListener('click', () => switchSyntax(button.dataset.syntax));
  }
  switchSyntax(syntax);
})();
