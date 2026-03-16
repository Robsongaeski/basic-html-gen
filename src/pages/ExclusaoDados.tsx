import SEOHead from '@/components/seo/SEOHead';
import { Trash2, Mail, Phone, Clock, ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const CONTACT_EMAIL = 'privacidade@gatha.com.br';
const CONTACT_WHATSAPP = '(46) 2604-1806';
const COMPANY_NAME = 'Gatha Confecções';
const UPDATE_DATE = '16 de março de 2026';

export default function ExclusaoDados() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Exclusão de Dados"
        description={`Saiba como solicitar a exclusão dos seus dados pessoais junto à ${COMPANY_NAME}. Processo claro e transparente em conformidade com a LGPD.`}
        url="/exclusao-de-dados"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-responsive text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Trash2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Exclusão de Dados
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Como solicitar a remoção dos seus dados pessoais de nossos sistemas
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: {UPDATE_DATE}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Intro */}
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-foreground">{COMPANY_NAME}</strong> respeita o direito dos titulares de dados pessoais de solicitar a exclusão de suas informações, 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018). 
                Nesta página, explicamos como você pode exercer esse direito de forma simples e transparente.
              </p>
            </div>

            {/* How to request */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Como Solicitar a Exclusão</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Para solicitar a exclusão dos seus dados pessoais armazenados em nossos sistemas, entre em contato conosco por um dos canais abaixo:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">E-mail</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground font-medium hover:text-primary transition-colors">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a href="https://wa.me/554626041806" className="text-foreground font-medium hover:text-primary transition-colors">
                      {CONTACT_WHATSAPP}
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">
                Na sua solicitação, inclua o assunto <strong className="text-foreground">"Solicitação de Exclusão de Dados"</strong> e forneça as seguintes informações:
              </p>
            </div>

            {/* Required info */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Informações Necessárias</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Para que possamos localizar seu cadastro ou histórico de atendimento em nossos sistemas, sua solicitação deve conter informações suficientes para identificação, como:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Nome completo ou razão social;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Número de telefone ou WhatsApp utilizado no contato conosco;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>E-mail cadastrado (se aplicável);</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Descrição do tipo de dado ou interação que deseja excluir (ex: histórico de atendimento, dados de pedido, mensagens);</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                  <span>Qualquer outra informação que ajude a localizar seu registro em nossos sistemas.</span>
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Prazo de Análise e Resposta</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Confirmação de Recebimento</h3>
                    <p className="text-sm text-muted-foreground">Enviaremos uma confirmação do recebimento da sua solicitação em até <strong className="text-foreground">2 dias úteis</strong>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Análise da Solicitação</h3>
                    <p className="text-sm text-muted-foreground">A análise será realizada em até <strong className="text-foreground">15 dias úteis</strong> a partir do recebimento, conforme previsto na LGPD.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Execução e Retorno</h3>
                    <p className="text-sm text-muted-foreground">Após a análise, informaremos quais dados foram excluídos e, se aplicável, quais dados precisam ser mantidos e o motivo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-destructive/10">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Exceções à Exclusão</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Em determinadas situações, alguns dados podem ser mantidos mesmo após a solicitação de exclusão, conforme previsto em lei. Isso pode ocorrer quando houver:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span><strong className="text-foreground">Obrigação legal ou regulatória:</strong> Dados necessários para cumprimento de obrigações legais, como registros fiscais e contábeis;</span></li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span><strong className="text-foreground">Obrigação contratual:</strong> Dados vinculados a contratos vigentes ou garantias de produtos;</span></li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span><strong className="text-foreground">Obrigação fiscal:</strong> Notas fiscais e registros financeiros com prazo de guarda obrigatório;</span></li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span><strong className="text-foreground">Segurança e prevenção de fraudes:</strong> Dados necessários para proteção contra atividades ilícitas;</span></li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-1">•</span><span><strong className="text-foreground">Exercício regular de direitos:</strong> Dados necessários para defesa em processos judiciais, administrativos ou arbitrais.</span></li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Caso algum dado não possa ser excluído, informaremos o motivo e o prazo de retenção aplicável.
              </p>
            </div>

            {/* Update notice */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Para mais informações sobre como tratamos seus dados pessoais, consulte nossa{' '}
                <a href="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong className="text-foreground">Última atualização:</strong> {UPDATE_DATE}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
