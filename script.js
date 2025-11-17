// Router SPA - Gerenciamento de Rotas
class SPARouter {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        this.init();
    }

    addRoute(path, templateId, callback) {
        this.routes[path] = {
            templateId: templateId,
            callback: callback
        };
    }

    async loadRoute() {
        const path = window.location.hash.slice(1) || 'home';
        this.currentRoute = path;

        const route = this.routes[path];
        
        if (!route) {
            this.show404();
            return;
        }

        // Mostrar loading
        this.showLoading();

        try {
            // Carregar template
            await this.loadTemplate(route.templateId);
            
            // Executar callback da rota
            if (route.callback) {
                await route.callback();
            }

            // Atualizar navegação
            this.updateNavigation();

            // Scroll para topo
            window.scrollTo(0, 0);

        } catch (error) {
            console.error('Erro ao carregar rota:', error);
            this.showError();
        } finally {
            // Esconder loading
            this.hideLoading();
        }
    }

    async loadTemplate(templateId) {
        const mainContent = document.getElementById('main-content');
        
        // Templates embutidos no HTML
        const templates = {
            'home': `
                <section id="home" class="page active">
                    <div class="hero">
                        <div class="container">
                            <h1 class="fade-in">Bem-vindo ao Nosso SPA</h1>
                            <p class="fade-in">Uma experiência moderna e responsiva</p>
                            <a href="#servicos" class="btn btn-primary">Conheça Nossos Serviços</a>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="cards-grid">
                            <div class="card slide-in-left">
                                <i class="fas fa-rocket"></i>
                                <h3>Performance</h3>
                                <p>Carregamento rápido e experiência fluida em todos os dispositivos.</p>
                            </div>
                            <div class="card">
                                <i class="fas fa-mobile-alt"></i>
                                <h3>Responsivo</h3>
                                <p>Design adaptável que funciona perfeitamente em qualquer tela.</p>
                            </div>
                            <div class="card slide-in-right">
                                <i class="fas fa-code"></i>
                                <h3>Moderno</h3>
                                <p>Tecnologias atualizadas seguindo as melhores práticas.</p>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            'sobre': `
                <section id="sobre" class="page active">
                    <div class="container">
                        <div class="hero">
                            <h1>Sobre Nós</h1>
                            <p>Conheça nossa história e missão</p>
                        </div>
                        
                        <div class="cards-grid">
                            <div class="card">
                                <h3>Nossa História</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="card">
                                <h3>Nossa Missão</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div class="card">
                                <h3>Nossos Valores</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            'servicos': `
                <section id="servicos" class="page active">
                    <div class="container">
                        <div class="hero">
                            <h1>Nossos Serviços</h1>
                            <p>Soluções completas para suas necessidades</p>
                        </div>
                        
                        <div class="cards-grid">
                            <div class="card">
                                <i class="fas fa-laptop-code"></i>
                                <h3>Desenvolvimento Web</h3>
                                <p>Criamos aplicações web modernas e responsivas.</p>
                            </div>
                            <div class="card">
                                <i class="fas fa-mobile-alt"></i>
                                <h3>Apps Mobile</h3>
                                <p>Desenvolvimento de aplicativos nativos e híbridos.</p>
                            </div>
                            <div class="card">
                                <i class="fas fa-cloud"></i>
                                <h3>Cloud Solutions</h3>
                                <p>Infraestrutura e soluções em nuvem escaláveis.</p>
                            </div>
                            <div class="card">
                                <i class="fas fa-chart-line"></i>
                                <h3>Consultoria</h3>
                                <p>Otimização e consultoria técnica especializada.</p>
                            </div>
                        </div>
                    </div>
                </section>
            `,
            'contato': `
                <section id="contato" class="page active">
                    <div class="container">
                        <div class="hero">
                            <h1>Entre em Contato</h1>
                            <p>Estamos aqui para ajudar</p>
                        </div>
                        
                        <div class="form-container">
                            <form id="contact-form">
                                <div class="form-group">
                                    <label for="name">Nome</label>
                                    <input type="text" id="name" class="form-control" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" class="form-control" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="subject">Assunto</label>
                                    <input type="text" id="subject" class="form-control" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message">Mensagem</label>
                                    <textarea id="message" class="form-control" rows="5" required></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Enviar Mensagem</button>
                            </form>
                        </div>
                    </div>
                </section>
            `
        };

        mainContent.innerHTML = templates[templateId] || '<div class="container"><h2>Página não encontrada</h2></div>';
    }

    showLoading() {
        const loading = document.getElementById('loading');
        loading.classList.remove('hidden');
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        loading.classList.add('hidden');
    }

    show404() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <section class="page active">
                <div class="container text-center">
                    <h1>404 - Página Não Encontrada</h1>
                    <p>A página que você está procurando não existe.</p>
                    <a href="#home" class="btn btn-primary">Voltar para Home</a>
                </div>
            </section>
        `;
        this.updateNavigation();
    }

    showError() {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = `
            <section class="page active">
                <div class="container text-center">
                    <h1>Erro ao Carregar</h1>
                    <p>Ocorreu um erro ao carregar a página. Tente novamente.</p>
                    <button onclick="location.reload()" class="btn btn-primary">Recarregar</button>
                </div>
            </section>
        `;
    }

    updateNavigation() {
        // Remover classe active de todos os links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Adicionar classe active ao link atual
        const currentLink = document.querySelector(`.nav-link[data-page="${this.currentRoute}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    init() {
        // Configurar rotas
        this.addRoute('home', 'home');
        this.addRoute('sobre', 'sobre');
        this.addRoute('servicos', 'servicos');
        this.addRoute('contato', 'contato');

        // Listeners de eventos
        window.addEventListener('hashchange', () => this.loadRoute());
        window.addEventListener('load', () => this.loadRoute());

        // Prevenir comportamento padrão dos links
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-page]')) {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                window.location.hash = page;
            }
        });
    }
}

// Gerenciamento do Menu Mobile
class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.init();
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggleMenu());
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Fechar menu ao redimensionar a janela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
    }
}

// Gerenciamento de Formulários
class FormManager {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contact-form') {
                e.preventDefault();
                this.handleContactForm(e.target);
            }
        });
    }

    async handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Simular envio do formulário
        this.showFormLoading(form);
        
        try {
            await this.simulateApiCall(data);
            this.showFormSuccess(form, 'Mensagem enviada com sucesso!');
            form.reset();
        } catch (error) {
            this.showFormError(form, 'Erro ao enviar mensagem. Tente novamente.');
        } finally {
            this.hideFormLoading(form);
        }
    }

    simulateApiCall(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simular erro aleatório (10% de chance)
                if (Math.random() < 0.1) {
                    reject(new Error('Erro de rede'));
                } else {
                    resolve(data);
                }
            }, 1500);
        });
    }

    showFormLoading(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    }

    hideFormLoading(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Enviar Mensagem';
    }

    showFormSuccess(form, message) {
        this.showAlert(message, 'success');
    }

    showFormError(form, message) {
        this.showAlert(message, 'error');
    }

    showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 2rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
        `;
        alert.textContent = message;
        
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
}

// Animations Manager
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observar elementos com classes de animação
        document.querySelectorAll('.card, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }

    setupHoverAnimations() {
        // Efeitos de hover para cards
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.card')) {
                const card = e.target.closest('.card');
                card.style.transform = 'translateY(-5px)';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.card')) {
                const card = e.target.closest('.card');
                card.style.transform = 'translateY(0)';
            }
        });
    }
}

// Inicialização da Aplicação
class App {
    constructor() {
        this.router = null;
        this.mobileMenu = null;
        this.formManager = null;
        this.animationManager = null;
        this.init();
    }

    init() {
        // Inicializar componentes
        this.router = new SPARouter();
        this.mobileMenu = new MobileMenu();
        this.formManager = new FormManager();
        this.animationManager = new AnimationManager();

        // Configurar service worker (opcional - para PWA)
        this.setupServiceWorker();

        // Configurar analytics (exemplo)
        this.setupAnalytics();

        console.log('SPA Application initialized successfully!');
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed:', err));
        }
    }

    setupAnalytics() {
        // Exemplo de tracking de página
        window.addEventListener('hashchange', () => {
            console.log('Page viewed:', window.location.hash);
            // Aqui você pode integrar com Google Analytics, etc.
        });
    }
}

// Inicializar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// Exportar para uso global (se necessário)
window.SPAApp = App;