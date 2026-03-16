import SEOHead from '@/components/seo/SEOHead';
import { Shield, Lock, Eye, Users, Database, Mail, Phone, MessageCircle } from 'lucide-react';

const CONTACT_EMAIL = 'privacidade@gatha.com.br';
const CONTACT_WHATSAPP = '(46) 2604-1806';
const COMPANY_NAME = 'Gatha Confecções';
const UPDATE_DATE = '16 de março de 2026';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Política de Privacidade"
        description={`Política de Privacidade da ${COMPANY_NAME}. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.`}
        url="/politica-de-privacidade"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-responsive text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Política de Privacidade
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais
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
                A <strong className="text-foreground">{COMPANY_NAME}</strong> ("nós", "nosso") valoriza a privacidade e a proteção dos dados pessoais de seus clientes, parceiros e usuários. 
                Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais, em conformidade com a 
                Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018) e demais normas aplicáveis.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Esta política aplica-se a todos os serviços oferecidos pela {COMPANY_NAME}, incluindo nosso site, sistemas internos de CRM, 
                atendimento via WhatsApp Business Platform e integrações com a plataforma Meta (Facebook Login for Business e WhatsApp Cloud API).
              </p>
            </div>

            {/* Section 1 */}
            <SectionCard
              icon={<Database className="w-6 h-6 text-primary" />}
              number="1"
              title="Dados Coletados"
            >
              <p className="text-muted-foreground mb-4">
                No contexto de nossa operação, podemos coletar e tratar os seguintes tipos de dados pessoais:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados de identificação:</strong> nome completo, razão social, CPF/CNPJ;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados de contato:</strong> telefone, e-mail, endereço;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados de comunicação:</strong> conteúdo de mensagens trocadas via WhatsApp Business, histórico de atendimento, registros de conversas;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados de conta:</strong> identificadores de conta do WhatsApp Business, identificadores de número de telefone, IDs de usuário da plataforma Meta;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados operacionais:</strong> logs de atendimento, registros de pedidos, histórico de interações com nosso CRM interno;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Dados técnicos:</strong> endereço IP, dados de navegação no site, cookies.</span>
                </li>
              </ul>
            </SectionCard>

            {/* Section 2 */}
            <SectionCard
              icon={<Eye className="w-6 h-6 text-primary" />}
              number="2"
              title="Como Utilizamos seus Dados"
            >
              <p className="text-muted-foreground mb-4">
                Os dados pessoais são utilizados exclusivamente para fins legítimos de operação interna da empresa, incluindo:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Atendimento ao cliente e suporte via WhatsApp;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Gestão de leads, vendas e pedidos;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Comunicação sobre projetos, orçamentos e entregas;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Operação do nosso CRM interno para organização e acompanhamento de clientes;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Melhoria dos nossos serviços e processos internos;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Cumprimento de obrigações legais, fiscais e regulatórias.</span></li>
              </ul>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> Nosso sistema é de uso interno da empresa. Não revendemos acesso à integração com a plataforma Meta como serviço para terceiros.
                </p>
              </div>
            </SectionCard>

            {/* Section 3 */}
            <SectionCard
              icon={<Lock className="w-6 h-6 text-primary" />}
              number="3"
              title="Base Legal para o Tratamento"
            >
              <p className="text-muted-foreground">
                O tratamento dos dados pessoais é realizado com base nas seguintes hipóteses legais previstas na LGPD:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Execução de contrato</strong> ou de procedimentos preliminares (Art. 7º, V);</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Legítimo interesse</strong> do controlador para operação e melhoria dos serviços (Art. 7º, IX);</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Cumprimento de obrigação legal</strong> ou regulatória (Art. 7º, II);</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Consentimento</strong> do titular, quando aplicável (Art. 7º, I).</span></li>
              </ul>
            </SectionCard>

            {/* Section 4 */}
            <SectionCard
              icon={<Database className="w-6 h-6 text-primary" />}
              number="4"
              title="Armazenamento e Proteção dos Dados"
            >
              <p className="text-muted-foreground mb-4">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acesso não autorizado, 
                perda, alteração, destruição ou qualquer forma de tratamento indevido. Entre as medidas adotadas:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Controle de acesso restrito a colaboradores autorizados;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Criptografia de dados em trânsito e em repouso;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Armazenamento em infraestrutura segura com monitoramento contínuo;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Backups regulares e planos de recuperação de desastres;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Revisões periódicas de segurança e boas práticas.</span></li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Os dados são retidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei.
              </p>
            </SectionCard>

            {/* Section 5 */}
            <SectionCard
              icon={<Users className="w-6 h-6 text-primary" />}
              number="5"
              title="Compartilhamento de Dados"
            >
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Não vendemos, alugamos ou comercializamos dados pessoais de nossos clientes ou usuários.</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                Seus dados podem ser compartilhados apenas nas seguintes situações:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Plataforma Meta:</strong> Utilizamos o Facebook Login for Business e a WhatsApp Business Platform (WhatsApp Cloud API) para gerenciar a comunicação com nossos clientes. Dados necessários são compartilhados com a Meta conforme os <a href="https://www.whatsapp.com/legal/business-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Termos de Serviço do WhatsApp Business</a> e a <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Privacidade da Meta</a>;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Prestadores de serviços:</strong> Fornecedores de infraestrutura tecnológica que tratam dados em nosso nome, sob obrigações contratuais de sigilo;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Obrigação legal:</strong> Quando necessário para cumprir determinação legal, judicial ou de autoridade competente.</span></li>
              </ul>
            </SectionCard>

            {/* Section 6 - Meta Integration */}
            <SectionCard
              icon={<MessageCircle className="w-6 h-6 text-primary" />}
              number="6"
              title="Integração com a Plataforma Meta"
            >
              <p className="text-muted-foreground mb-4">
                Nossa empresa utiliza as seguintes integrações da plataforma Meta para fins exclusivamente internos de operação:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">Facebook Login for Business:</strong> Utilizado para autenticação e gerenciamento de acesso às contas empresariais da {COMPANY_NAME} na plataforma Meta;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span><strong className="text-foreground">WhatsApp Cloud API:</strong> Utilizada para enviar e receber mensagens do WhatsApp Business, integrada ao nosso CRM interno para gestão de atendimento, leads, vendas e suporte.</span></li>
              </ul>
              <div className="p-4 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  Essas integrações conectam nossas próprias contas do WhatsApp Business ao nosso sistema interno. 
                  <strong className="text-foreground"> Não oferecemos esse acesso como serviço a terceiros.</strong> Os dados trafegados por essas integrações são 
                  utilizados exclusivamente para a operação interna da {COMPANY_NAME}.
                </p>
              </div>
            </SectionCard>

            {/* Section 7 */}
            <SectionCard
              icon={<Shield className="w-6 h-6 text-primary" />}
              number="7"
              title="Direitos do Titular dos Dados"
            >
              <p className="text-muted-foreground mb-4">
                Em conformidade com a LGPD, você possui os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Confirmação da existência de tratamento de dados;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Acesso aos dados pessoais;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Correção de dados incompletos, inexatos ou desatualizados;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Anonimização, bloqueio ou eliminação de dados desnecessários ou em desconformidade;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Portabilidade dos dados a outro fornecedor de serviço;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Eliminação dos dados tratados com consentimento;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Informação sobre compartilhamento de dados;</span></li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>Revogação do consentimento.</span></li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para exercer qualquer um desses direitos, entre em contato conosco pelos canais indicados na seção de contato abaixo. 
                Para solicitações de exclusão de dados, consulte também nossa página de <a href="/exclusao-de-dados" className="text-primary hover:underline">Exclusão de Dados</a>.
              </p>
            </SectionCard>

            {/* Section 8 - Contact */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Seção 8</span>
                  <h2 className="text-2xl font-bold text-foreground">Contato</h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Para dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade ou ao tratamento dos seus dados pessoais, 
                entre em contato com o responsável pela proteção de dados da {COMPANY_NAME}:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
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
            </div>

            {/* Update notice */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente. 
                A versão vigente estará sempre disponível nesta página.
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

function SectionCard({ icon, number, title, children }: { icon: React.ReactNode; number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
          {icon}
        </div>
        <div>
          <span className="text-sm font-medium text-muted-foreground">Seção {number}</span>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}
