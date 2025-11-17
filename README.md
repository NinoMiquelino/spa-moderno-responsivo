## 🙋‍♂️ Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/ninomiquelino" width="100" height="100" style="border-radius: 50%">
  <br>
  <strong>Onivaldo Miquelino</strong>
  <br>
  <a href="https://github.com/ninomiquelino">@ninomiquelino</a>
</div>

---

# 🚀 ModernSPA - Single Page Application Completa

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge)

Uma aplicação Single Page moderna e totalmente responsiva, desenvolvida com tecnologias vanilla para máxima performance e compatibilidade.

## ✨ Características Principais

- 🎯 **SPA Completa** - Roteamento no lado do cliente sem recarregamentos
- 📱 **Design Responsivo** - Mobile-first, adaptável a todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e experiência fluida
- 🎨 **Interface Moderna** - Design clean com animações suaves
- 🔧 **Vanilla JavaScript** - Sem dependências externas, código puro e eficiente
- ♿ **Acessível** - Desenvolvido seguindo melhores práticas de acessibilidade

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Roteamento:** History API + Hash-based Routing
- **Estilização:** CSS Grid, Flexbox, Variáveis CSS
- **Ícones:** Font Awesome 6
- **Design:** Mobile-first, Responsive Breakpoints

## 🚀 Como Executar o Projeto

### Método 1: Servidor Local (Recomendado)
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/spa-moderno-responsivo.git

# Acesse o diretório
cd spa-moderno-responsivo

# Execute com um servidor local
# Python 3
python -m http.server 8000

# Ou com Node.js
npx http-server

# Ou com PHP
php -S localhost:8000
```

Método 2: Abrir Diretamente

```bash
# Simplesmente abra o arquivo index.html no navegador
# Nota: Alguns recursos podem não funcionar corretamente devido às políticas CORS
```

📁 Estrutura do Projeto

```
spa-moderno-responsivo/
├── index.html              # Arquivo principal
├── style.css               # Estilos completos
├── script.js               # Lógica da aplicação
├── sw.js                   # Service Worker (PWA)
├── manifest.json           # Configuração PWA
├── README.md               # Documentação
└── .gitignore             # Arquivos ignorados pelo Git
```

🎨 Funcionalidades Implementadas

Navegação e Roteamento

· ✅ Roteamento SPA com History API<br>
· ✅ Navegação por hash (#home, #sobre, etc.)<br>
· ✅ Suporte aos botões voltar/avançar do navegador<br>
· ✅ Loading entre transições de página<br>
· ✅ Tratamento de erros (404)

Design Responsivo

· ✅ Layout mobile-first<br>
· ✅ Menu hamburger para dispositivos móveis<br>
· ✅ Breakpoints para tablet e desktop<br>
· ✅ Grid e Flexbox responsivos<br>
· ✅ Imagens e tipografia escaláveis

Componentes e Interações

· ✅ Formulário de contato funcional<br>
· ✅ Sistema de notificações<br>
· ✅ Animações CSS suaves<br>
· ✅ Cards interativos com hover effects<br>
· ✅ Validação de formulários

Performance e UX

· ✅ Loading screen inicial<br>
· ✅ Transições otimizadas<br>
· ✅ Código modular e organizado<br>
· ✅ Pronto para PWA<br>
· ✅ Service Worker para cache

📱 Layout Responsivo

Dispositivo Breakpoint Características
Mobile < 768px Menu hamburger, layout vertical
Tablet 768px - 1024px Layout adaptativo, grid 2 colunas
Desktop 1024px Layout completo, grid 3-4 colunas

🎯 Páginas da Aplicação

1. Home - Apresentação com hero section e cards de features
2. Sobre - Informações sobre a empresa/projeto
3. Serviços - Catálogo de serviços oferecidos
4. Contato - Formulário de contato funcional

🔧 Personalização

Cores (Variáveis CSS)

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* Modifique estas cores para personalizar */
}
```

Adicionar Novas Páginas

1. Adicione a rota no script.js na classe SPARouter
2. Crie o template HTML na função loadTemplate
3. Adicione o link de navegação no menu

Modificar Conteúdo

· Textos: Edite os templates no arquivo script.js<br>
· Imagens: Substitua as imagens na pasta assets/images/<br>
· Ícones: Use classes do Font Awesome ou SVG customizados

🌐 Deploy

Opções de Hospedagem:

· GitHub Pages (Gratuito)<br>
· Netlify (Gratuito para projetos pessoais)<br>
· Vercel (Gratuito)<br>
· Firebase Hosting (Gratuito)

Deploy no GitHub Pages:

```bash
# 1. Faça push para o GitHub
git add .
git commit -m "Deploy initial version"
git push origin main

# 2. No repositório no GitHub:
# Settings → Pages → Source: main branch → Save
```

🎉 Agradecimentos

· Ícones por Font Awesome<br>
· Inspiração de design por Material Design<br>
· Comunidade de desenvolvimento web

---

⭐ Se este projeto foi útil, deixe uma estrela no repositório!

---

## 🤝 Contribuições
Contribuições são sempre bem-vindas!  
Sinta-se à vontade para abrir uma [*issue*](https://github.com/NinoMiquelino/spa-moderno-responsivo/issues) com sugestões ou enviar um [*pull request*](https://github.com/NinoMiquelino/max-spa-moderno-responsivo/pulls) com melhorias.

---

## 💬 Contato
📧 [Entre em contato pelo LinkedIn](https://www.linkedin.com/in/onivaldomiquelino/)  
💻 Desenvolvido por **Onivaldo Miquelino**

---
