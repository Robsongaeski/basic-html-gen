export default function TermosUso() {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-responsive text-center">
          <h1 className="text-4xl md:text-5xl mb-6 font-bold text-gray-950">
            Termos de Uso
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-950">
            Condições gerais para utilização de nossos serviços
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto prose prose-gray">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Serviços Oferecidos</h2>
              <p className="text-muted-foreground mb-6">
                A Gatha Confecções oferece serviços de confecção de uniformes, camisetas personalizadas e peças sob medida. 
                Todos os produtos são fabricados conforme especificações acordadas.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">2. Pedidos e Orçamentos</h2>
              <p className="text-muted-foreground mb-6">Todos os pedidos devem ser formalizados via WhatsApp com especificações detalhadas. Orçamentos têm validade de 15 dias. A produção inicia apenas após confirmação e pagamento da entrada e aprovação da arte final.</p>

              <h2 className="text-2xl font-bold text-foreground mb-4">3. Prazos e Entregas</h2>
              <p className="text-muted-foreground mb-6">
                Os prazos são estabelecidos conforme complexidade e quantidade do pedido. 
                Começam a contar após aprovação final da arte e confirmação do pagamento da entrada.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">4. Pagamentos</h2>
              <p className="text-muted-foreground mb-6">Aceitamos PIX, cartão de débito/crédito e transferência bancária. Para início do pedido solicitamos entrada de 50% para início da produção.</p>

              <h2 className="text-2xl font-bold text-foreground mb-4">5. Trocas e Devoluções</h2>
              <p className="text-muted-foreground mb-6">Por se tratar de produtos personalizados, trocas só são aceitas em caso de defeito de fabricação ou erro em nossas especificações, em até 7 corridos dias após recebimento.</p>

              <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
              <p className="text-muted-foreground mb-6">
                Respeitamos direitos autorais. Clientes devem garantir que possuem direitos sobre artes fornecidas. 
                Não nos responsabilizamos por violações de direitos de terceiros.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contato</h2>
              <p className="text-muted-foreground">
                Para esclarecimentos sobre estes termos, entre em contato via WhatsApp: 
                <a href="https://wa.me/554626041806" className="text-primary hover:underline ml-1">
                  (46) 2604-1806
                </a>
              </p>

              
            </div>
          </div>
        </div>
      </section>
    </div>;
}