import portfolioTimeAguia from '@/assets/portfolio-time-aguia.jpg';
import portfolioFestival from '@/assets/portfolio-festival-musica.jpg';
import portfolioTech from '@/assets/portfolio-empresa-tech.jpg';
import portfolioLoja from '@/assets/portfolio-camisetas-loja.jpg';
import portfolioBasquete from '@/assets/portfolio-basquete-feminino.jpg';
import portfolioFarmacia from '@/assets/portfolio-farmacia.jpg';
import portfolioCamisetaReligiosa from '@/assets/portfolio-camiseta-religiosa.jpg';
import portfolioPolimed from '@/assets/portfolio-polimed-30anos.jpg';
import portfolioPoloAsiaClub from '@/assets/portfolio-polo-asia-club.jpg';
import portfolioJaquetaMatech from '@/assets/portfolio-jaqueta-matech.jpg';
import portfolioJaquetaProCampo from '@/assets/portfolio-jaqueta-procampo.jpg';
import portfolioBrizola from '@/assets/portfolio-brizola-pinturas.jpg';
import portfolioFlyDonuts from '@/assets/portfolio-fly-donuts.jpg';
import portfolioPilates from '@/assets/portfolio-pilates-personalizado.jpg';
import portfolioUsiplast from '@/assets/portfolio-usiplast-23anos.jpg';
import portfolioPantanal from '@/assets/portfolio-pantanal-summit.jpg';
import portfolioGranjaChalana from '@/assets/portfolio-granja-chalana.jpg';
import portfolioSeveroTransportes from '@/assets/portfolio-severo-transportes.jpg';
import portfolioStaffDJ from '@/assets/portfolio-staff-dj-casagrande.jpg';
import portfolioCatequista from '@/assets/portfolio-catequista.jpg';
import portfolioOutubroRosa from '@/assets/portfolio-outubro-rosa.jpg';
import portfolioFDTransportes from '@/assets/portfolio-fd-transportes.jpg';
import portfolioPoloCarBox from '@/assets/portfolio-polo-carbox.jpg';
import portfolioAthena from '@/assets/portfolio-athena.jpg';
import portfolioVoluntarios from '@/assets/portfolio-voluntarios.jpg';
import portfolioTransMedeiros from '@/assets/portfolio-trans-medeiros.jpg';
import portfolioFestivalChurrasco from '@/assets/portfolio-festival-churrasco.jpg';
import portfolioPowerFitness from '@/assets/portfolio-power-fitness.jpg';
import portfolioLeonarchik from '@/assets/portfolio-leonarchik.jpg';
import portfolioTimeCeoje from '@/assets/portfolio-time-ceoje.jpg';
import portfolioMaterDei from '@/assets/portfolio-mater-dei-pesca.jpg';
import portfolioNaiaraFutebol from '@/assets/portfolio-naiara-futebol.jpg';
import portfolioCyborgs from '@/assets/portfolio-cyborgs-robotica.jpg';
import portfolioProfessorDanca from '@/assets/portfolio-professor-danca.jpg';
import portfolioAlcides from '@/assets/portfolio-alcides-religioso.jpg';
import portfolioArsenalMurilo from '@/assets/portfolio-arsenal-murilo.jpg';
import portfolioPBTerraplanagem from '@/assets/portfolio-pb-terraplanagem.jpg';
import portfolioFutsalPlanalto from '@/assets/portfolio-futsal-planalto.jpg';
import portfolioReallClean from '@/assets/portfolio-reall-clean.jpg';
import portfolioCorridaRun from '@/assets/portfolio-corrida-run.jpg';
import portfolioSKWEscolar from '@/assets/portfolio-skw-escolar.jpg';
import portfolioLaabasFutsal from '@/assets/portfolio-laabas-futsal.jpg';
import portfolioBletoSinuca from '@/assets/portfolio-bleto-sinuca.jpg';
import portfolioGSTVFutsal from '@/assets/portfolio-gstv-futsal.jpg';
import portfolioChalanaMangaLonga from '@/assets/portfolio-chalana-manga-longa.jpg';
import portfolioGruntecAgro from '@/assets/portfolio-gruntec-agro.jpg';
import portfolioMoletomHyunjin from '@/assets/portfolio-moletom-hyunjin.jpg';
import portfolioEsteticaAnimal from '@/assets/portfolio-estetica-animal.jpg';
import portfolioJaquetaCali from '@/assets/portfolio-jaqueta-cali.jpg';
import portfolioJaquetaWavo from '@/assets/portfolio-jaqueta-wavo.jpg';
import portfolioJaquetaUseplast from '@/assets/portfolio-jaqueta-useplast.jpg';
import portfolioVillaDiGrano from '@/assets/portfolio-villa-di-grano.jpg';
import portfolioShopeeXpress from '@/assets/portfolio-shopee-xpress.jpg';
import portfolioCafeMais from '@/assets/portfolio-cafe-mais.jpg';
import portfolioMoletomSeguranca from '@/assets/portfolio-moletom-seguranca.jpg';
import portfolioMoletomGaleraMDF from '@/assets/portfolio-moletom-galera-mdf.jpg';
import portfolioTimeMarlon from '@/assets/portfolio-time-marlon.jpg';
import portfolioArbitragemPrevence from '@/assets/portfolio-arbitragem-prevence.jpg';
import portfolioTimePastorello from '@/assets/portfolio-time-pastorello.jpg';
import portfolioTimeNonoAno from '@/assets/portfolio-time-nono-ano.jpg';
import portfolioTerceiraoAzul from '@/assets/portfolio-terceirao-azul.jpg';
import portfolioTerceiraoUrsinho from '@/assets/portfolio-terceirao-ursinho.jpg';
import portfolioTerceiraoLaranja from '@/assets/portfolio-terceirao-laranja.jpg';
import portfolioTerceiraoRosa from '@/assets/portfolio-terceirao-rosa.jpg';
import portfolioTimeFrizon from '@/assets/portfolio-time-frizon.jpg';
import portfolioTimePlanalto from '@/assets/portfolio-time-planalto.jpg';

export type PortfolioCategory = 'esportivo' | 'eventos' | 'corporativo' | 'personalizado';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [{
  id: 9,
  title: 'Camisetas Grupo Religioso',
  category: 'eventos',
  image: portfolioCamisetaReligiosa,
  description: 'Camisetas personalizadas para grupo religioso com estampa sublimática de alta qualidade.'
}, {
  id: 10,
  title: 'Camisetas Polimed 30 Anos',
  category: 'corporativo',
  image: portfolioPolimed,
  description: 'Camisetas comemorativas para celebração de 30 anos da empresa Polimed.'
}, {
  id: 11,
  title: 'Camisa Polo Asia Club',
  category: 'corporativo',
  image: portfolioPoloAsiaClub,
  description: 'Uniformes polo elegantes para empresa com bordados personalizados.'
}, {
  id: 12,
  title: 'Jaqueta Corta-Vento Matech',
  category: 'corporativo',
  image: portfolioJaquetaMatech,
  description: 'Jaquetas corta-vento com sublimação total para empresa de tecnologia.'
}, {
  id: 13,
  title: 'Jaqueta Pro Campo',
  category: 'corporativo',
  image: portfolioJaquetaProCampo,
  description: 'Jaquetas corta-vento para empresa do agronegócio com design exclusivo.'
}, {
  id: 14,
  title: 'Uniformes Brizola Pinturas',
  category: 'corporativo',
  image: portfolioBrizola,
  description: 'Uniformes profissionais para empresa de pinturas com malha respirável.'
}, {
  id: 15,
  title: 'Camisetas Fly Donuts & Pizza',
  category: 'corporativo',
  image: portfolioFlyDonuts,
  description: 'Uniformes clean e modernos para restaurante com logo.'
}, {
  id: 16,
  title: 'Camisetas Pilates Personalizadas',
  category: 'personalizado',
  image: portfolioPilates,
  description: 'Camisetas personalizadas para estúdio de pilates com sublimação total.'
}, {
  id: 17,
  title: 'Camisetas Usiplast 23 Anos',
  category: 'corporativo',
  image: portfolioUsiplast,
  description: 'Camisetas comemorativas para celebração de 23 anos da empresa.'
}, {
  id: 18,
  title: 'Camisetas Pantanal Summit 2025',
  category: 'eventos',
  image: portfolioPantanal,
  description: 'Camisetas para evento corporativo com design exclusivo e tecnologia dry-fit.'
}, {
  id: 19,
  title: 'Camisetas Granja Chalana',
  category: 'corporativo',
  image: portfolioGranjaChalana,
  description: 'Uniformes para empresa do agronegócio com estampa sublimática em alta definição.'
}, {
  id: 20,
  title: 'Camisetas Severo Transportes',
  category: 'corporativo',
  image: portfolioSeveroTransportes,
  description: 'Uniformes para empresa de transportes com design criativo e sublimação total.'
}, {
  id: 21,
  title: 'Camisetas Staff DJ Casagrande',
  category: 'eventos',
  image: portfolioStaffDJ,
  description: 'Uniformes de equipe para eventos com design clean e profissional.'
}, {
  id: 22,
  title: 'Camisetas Catequista',
  category: 'eventos',
  image: portfolioCatequista,
  description: 'Camisetas para grupo religioso com estampas vibrantes e coloridas.'
}, {
  id: 23,
  title: 'Camisetas Outubro Rosa',
  category: 'eventos',
  image: portfolioOutubroRosa,
  description: 'Camisetas para campanha social com estampa delicada e significativa.'
}, {
  id: 24,
  title: 'Camisetas FD Transportes',
  category: 'corporativo',
  image: portfolioFDTransportes,
  description: 'Uniformes corporativos para empresa de transportes e turismo.'
}, {
  id: 25,
  title: 'Polo Car Box',
  category: 'corporativo',
  image: portfolioPoloCarBox,
  description: 'Uniformes polo elegantes para empresa automotiva com bordado premium.'
}, {
  id: 26,
  title: 'Camisetas Athena',
  category: 'personalizado',
  image: portfolioAthena,
  description: 'Camisetas personalizadas com design artístico e detalhes em dourado.'
}, {
  id: 27,
  title: 'Camisetas Voluntários',
  category: 'eventos',
  image: portfolioVoluntarios,
  description: 'Uniformes para grupo de voluntários com design inspirador e motivacional.'
}, {
  id: 28,
  title: 'Camisetas Trans Medeiros',
  category: 'corporativo',
  image: portfolioTransMedeiros,
  description: 'Uniformes para empresa de transportes com design arrojado e moderno.'
}, {
  id: 29,
  title: 'Camisetas Festival do Churrasco El Toro',
  category: 'eventos',
  image: portfolioFestivalChurrasco,
  description: 'Camisetas para festival gastronômico com design criativo e impactante.'
}, {
  id: 30,
  title: 'Camisetas Power Fitness Academia',
  category: 'esportivo',
  image: portfolioPowerFitness,
  description: 'Uniformes esportivos para academia com gradiente moderno e tecnologia dry-fit.'
}, {
  id: 31,
  title: 'Uniformes Leonarchik Marcenaria',
  category: 'corporativo',
  image: portfolioLeonarchik,
  description: 'Uniformes profissionais para marcenaria com camuflado personalizado.'
}, {
  id: 32,
  title: 'Uniformes Time Interclasses',
  category: 'esportivo',
  image: portfolioTimeCeoje,
  description: 'Uniformes de futebol com design único e sublimação artística.'
}, {
  id: 33,
  title: 'Uniformes Interclasses Mater Dei',
  category: 'esportivo',
  image: portfolioMaterDei,
  description: 'Camisetas para equipe, interclasse Mater Dei.'
}, {
  id: 34,
  title: 'Uniformes Time',
  category: 'esportivo',
  image: portfolioNaiaraFutebol,
  description: 'Uniformes esportivos clean e profissionais para time de futebol.'
}, {
  id: 35,
  title: 'Uniformes Cyborgs Robótica',
  category: 'eventos',
  image: portfolioCyborgs,
  description: 'Camisetas para equipe de robótica com design tecnológico e moderno.'
}, {
  id: 36,
  title: 'Camisetas Professor de Dança',
  category: 'personalizado',
  image: portfolioProfessorDanca,
  description: 'Uniformes personalizados para escola de dança com identidade visual única.'
}, {
  id: 37,
  title: 'Camisetas Romaria',
  category: 'eventos',
  image: portfolioAlcides,
  description: 'Camisetas para romaria religiosa com estampa sublimática de alta qualidade.'
}, {
  id: 38,
  title: 'Uniformes Time',
  category: 'esportivo',
  image: portfolioArsenalMurilo,
  description: 'Uniformes de futebol com listras clássicas e acabamento premium.'
}, {
  id: 39,
  title: 'Camisa PB Terraplanagem',
  category: 'corporativo',
  image: portfolioPBTerraplanagem,
  description: 'Uniformes manga longa para empresa de terraplanagem com design impactante.'
}, {
  id: 40,
  title: 'Uniformes Futsal Planalto',
  category: 'esportivo',
  image: portfolioFutsalPlanalto,
  description: 'Uniformes manga longa de futsal com múltiplos patrocínios.'
}, {
  id: 41,
  title: 'Uniformes Reall Clean',
  category: 'corporativo',
  image: portfolioReallClean,
  description: 'Camisas manga longa para empresa de limpeza com design clean e moderno.'
}, {
  id: 42,
  title: 'Camisetas Corrida Run',
  category: 'eventos',
  image: portfolioCorridaRun,
  description: 'Camisetas para corrida de rua cores Neon.'
}, {
  id: 43,
  title: 'Camisetas Bocha',
  category: 'esportivo',
  image: portfolioSKWEscolar,
  description: 'Uniforme Esportivo para time de Bocha.'
}, {
  id: 44,
  title: 'Uniformes Esportivo Feminino',
  category: 'esportivo',
  image: portfolioLaabasFutsal,
  description: 'Uniformes femininos de futsal com design em preto e rosa.'
}, {
  id: 45,
  title: 'Camisetas Bar',
  category: 'personalizado',
  image: portfolioBletoSinuca,
  description: 'Uniformes personalizados para equipe de sinuca com design temático.'
}, {
  id: 46,
  title: 'Uniformes Futsal',
  category: 'esportivo',
  image: portfolioGSTVFutsal,
  description: 'Uniformes de futsal com patrocínio.'
}, {
  id: 47,
  title: 'Camisa Manga Longa Granja Chalana',
  category: 'corporativo',
  image: portfolioChalanaMangaLonga,
  description: 'Uniforme manga longa para granja com estampa realista de alta qualidade.'
}, {
  id: 48,
  title: 'Camisa Manga Longa Gruntec Agro',
  category: 'corporativo',
  image: portfolioGruntecAgro,
  description: 'Uniformes manga longa para empresa do agronegócio com design verde vibrante.'
}, {
  id: 49,
  title: 'Moletom Personalizado Hyunjin',
  category: 'personalizado',
  image: portfolioMoletomHyunjin,
  description: 'Moletom com estampa personalizada de fã com assinatura autografada.'
}, {
  id: 50,
  title: 'Uniformes Latidos & Miados Pet',
  category: 'corporativo',
  image: portfolioEsteticaAnimal,
  description: 'Uniformes para estética animal com design fofo e gradiente colorido.'
}, {
  id: 51,
  title: 'Jaqueta Corta-Vento Chillpass',
  category: 'personalizado',
  image: portfolioJaquetaCali,
  description: 'Jaqueta corta-vento personalizada em azul vibrante com capuz.'
}, {
  id: 52,
  title: 'Jaqueta Corta-Vento Wave',
  category: 'corporativo',
  image: portfolioJaquetaWavo,
  description: 'Jaquetas corta-vento corporativas com detalhes em verde neon.'
}, {
  id: 53,
  title: 'Jaqueta Corta-Vento Useplast',
  category: 'corporativo',
  image: portfolioJaquetaUseplast,
  description: 'Jaquetas esportivas com sublimação total em preto e verde.'
}, {
  id: 54,
  title: 'Camisetas Villa Di Grano',
  category: 'corporativo',
  image: portfolioVillaDiGrano,
  description: 'Uniformes clean para loja de produtos naturais com logos estampadas.'
}, {
  id: 55,
  title: 'Uniformes Shopee Xpress',
  category: 'corporativo',
  image: portfolioShopeeXpress,
  description: 'Uniformes para entregadores da Shopee com personalização individual.'
}, {
  id: 56,
  title: 'Uniformes Café Mais Cafeteria',
  category: 'corporativo',
  image: portfolioCafeMais,
  description: 'Camisetas para cafeteria com logo vintage e elegante.'
}, {
  id: 57,
  title: 'Moletom Segurança Privada',
  category: 'corporativo',
  image: portfolioMoletomSeguranca,
  description: 'Moletons profissionais para equipe de segurança estampado.'
}, {
  id: 58,
  title: 'Moletom Galera MDF Rota 163',
  category: 'personalizado',
  image: portfolioMoletomGaleraMDF,
  description: 'Moletom personalizado para grupo com estampa criativa.'
}, {
  id: 59,
  title: 'Uniformes Esportivo',
  category: 'esportivo',
  image: portfolioTimeMarlon,
  description: 'Uniformes de futebol com design moderno em preto e amarelo com múltiplos patrocínios.'
}, {
  id: 60,
  title: 'Uniformes Arbitragem',
  category: 'esportivo',
  image: portfolioArbitragemPrevence,
  description: 'Uniformes para árbitros em vermelho vibrante com patrocínio destaque.'
}, {
  id: 61,
  title: 'Uniformes Time',
  category: 'esportivo',
  image: portfolioTimePastorello,
  description: 'Uniformes esportivo com estampa de dragão e múltiplos patrocinadores.'
}, {
  id: 62,
  title: 'Uniformes Time 9º Ano',
  category: 'esportivo',
  image: portfolioTimeNonoAno,
  description: 'Uniformes escolares esportivos com design onça e gradiente vermelho.'
}, {
  id: 63,
  title: 'Camisetas Terceirão 2025 Azul',
  category: 'eventos',
  image: portfolioTerceiraoAzul,
  description: 'Camisetas de formatura do terceiro ano com design moderno e personalizado com nome.'
}, {
  id: 64,
  title: 'Camisetas Terceirão 2025 Ursinho',
  category: 'eventos',
  image: portfolioTerceiraoUrsinho,
  description: 'Camisetas de formatura com estampa de ursinho e personalização individual.'
}, {
  id: 65,
  title: 'Camisetas Terceirão 2025 Laranja',
  category: 'eventos',
  image: portfolioTerceiraoLaranja,
  description: 'Camisetas de formatura em laranja vibrante com design juvenil.'
}, {
  id: 66,
  title: 'Camisetas Terceirão 2025 Rosa',
  category: 'eventos',
  image: portfolioTerceiraoRosa,
  description: 'Camisetas de formatura em rosa com estampa criativa e moderna.'
}, {
  id: 67,
  title: 'Uniformes Time Frizon',
  category: 'esportivo',
  image: portfolioTimeFrizon,
  description: 'Uniformes esportivos para time de futebol com patrocínio e numeração.'
}, {
  id: 68,
  title: 'Uniformes Time Planalto',
  category: 'esportivo',
  image: portfolioTimePlanalto,
  description: 'Uniformes completos para time com design profissional e moderno.'
}];

/**
 * Pega exemplos aleatórios do portfólio por categoria
 * @param category - Categoria dos itens a buscar
 * @param count - Número de itens a retornar (padrão: 3)
 * @returns Array de itens do portfólio randomizados
 */
export function getRandomPortfolioByCategory(
  category: PortfolioCategory | PortfolioCategory[], 
  count: number = 3
): PortfolioItem[] {
  const categories = Array.isArray(category) ? category : [category];
  
  // Filtra itens pelas categorias
  const filtered = portfolioItems.filter(item => categories.includes(item.category));
  
  // Randomiza o array
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  
  // Retorna os primeiros N itens
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
