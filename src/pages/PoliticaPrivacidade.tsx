export default function PoliticaPrivacidade() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-950">
            Política de Privacidade
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-950">
            Como coletamos, usamos e protegemos suas informações pessoais
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações Coletadas</h2>
              <p className="text-muted-foreground mb-6">
                Coletamos apenas as informações necessárias para atender seus pedidos e fornecer nossos serviços de confecção. 
                Isso inclui nome, telefone, endereço de entrega e especificações do produto.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso das Informações</h2>
              <p className="text-muted-foreground mb-6">
                Suas informações são utilizadas exclusivamente para processar pedidos, comunicação sobre projetos, 
                entrega de produtos e atendimento ao cliente. Não compartilhamos dados com terceiros sem seu consentimento.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Proteção de Dados</h2>
              <p className="text-muted-foreground mb-6">
                Adotamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, 
                alteração, divulgação ou destruição. Seus dados são armazenados em sistemas seguros.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Seus Direitos</h2>
              <p className="text-muted-foreground mb-6">
                Você tem direito a acessar, corrigir ou excluir suas informações pessoais a qualquer momento. 
                Para exercer esses direitos, entre em contato conosco pelo WhatsApp.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contato</h2>
              <p className="text-muted-foreground">
                Para dúvidas sobre nossa política de privacidade, entre em contato via WhatsApp: 
                <a href="https://wa.me/554626041806" className="text-primary hover:underline ml-1">
                  (46) 2604-1806
                </a>
              </p>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}