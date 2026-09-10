import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const TITLE = "120 Diagnósticos para Impressoras | Guia de Bancada";
const DESC =
  "Mais de 120 diagnósticos prontos para identificar o defeito da impressora antes de trocar peças. Epson, HP, Canon e Brother. Acesso vitalício.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:image",
        content:
          "https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png",
      },
      {
        name: "twitter:image",
        content:
          "https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png",
      },
    ],
  }),
  component: Index,
});

function formatToday() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${d.getFullYear()}`;
}

function Index() {
  const [today] = useState(formatToday);
  const [open, setOpen] = useState(false);
  const openModal = (e?: { preventDefault: () => void }) => {
    e?.preventDefault();
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <div className="bg-pv-bg text-pv-text font-body text-[18px] leading-relaxed overflow-x-hidden">

  
  <div id="secao-0" className="w-full text-center text-sm sm:text-lg py-3 px-4 font-bold tracking-wide bg-pv-accent text-white">
    ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE <span>{today}</span>
  </div>
  
  <section id="secao-1" className="bg-pv-primary text-white px-4 py-8 sm:py-14">
    <div className="max-w-pv-container mx-auto text-center">
      
      <span className="inline-block text-xs sm:text-sm font-bold px-6 py-2 rounded-full mb-6 bg-pv-cream text-pv-primary">
        +120 diagnósticos para impressoras
      </span>
      
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
        120 diagnósticos prontos para identificar o defeito da impressora antes de trocar qualquer peça ou condenar a cabeça de impressão.
      </h1>
      
      <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-white/90 font-medium leading-normal">
        Prontos para abrir no celular ou imprimir e consultar durante a manutenção, com o equipamento aberto na sua bancada (Epson, HP, Canon e Brother).
      </p>
      
      <div className="mb-8 max-w-[800px] mx-auto">
        <img 
          src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png" 
          alt="Mockup Impressoras" 
          className="w-full h-auto object-contain max-h-[380px] sm:max-h-[520px] rounded-pv mx-auto" 
          loading="eager"
        />
      </div>
      
      <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-white/90 mb-6 text-left sm:text-center leading-relaxed">
        <p>
          Você já sabe mexer no equipamento. O que trava é descobrir a causa raiz. Você chega na bancada, desmonta a carcaça, mede a placa, limpa o sensor e mesmo assim fica na dúvida se é o cabo flat, se é a placa lógica, se é o atuador ou se é entupimento severo. Aí você para o serviço para procurar um vídeo de 20 minutos no YouTube, manda mensagem no grupo de WhatsApp, espera alguém responder, decide no chute e na próxima impressora começa tudo de novo.
        </p>
        <p className="border-t border-white/10 pt-6 font-semibold text-white">
          Aqui é diferente. Você recebe mais de 120 diagnósticos que mostram, in a page só, o sintoma, as causas mais prováveis, as verificações na ordem certa e o próximo passo. Não é curso teórico para assistir depois, é consulta visual para usar na hora, com a impressora aberta na sua frente.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto text-left mb-8 bg-white/5 p-6 rounded-pv border border-white/10">
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 shrink-0 text-pv-success mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="text-sm sm:text-base font-semibold text-pv-cream">Sintoma, causas prováveis, verificações e próximo passo na mesma página</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 shrink-0 text-pv-success mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="text-sm sm:text-base font-semibold text-pv-cream">Índice por sintoma para achar o diagnóstico em segundos</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 shrink-0 text-pv-success mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="text-sm sm:text-base font-semibold text-pv-cream">Organizado por sintoma e por sistema, não por marca, então vale para os modelos que você atende</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="h-5 w-5 shrink-0 text-pv-success mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="text-sm sm:text-base font-semibold text-pv-cream">Versão digital e imprimível, com acesso vitalício</span>
          </li>
        </ul>
      </div>
      
      <div>
        <a 
          href="https://diagnosticosimpressoras.escolaesportiva.com/%23planos" 
          className="inline-block px-10 py-5 text-lg sm:text-xl font-bold rounded-full bg-pv-success hover:bg-emerald-600 transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] uppercase tracking-wide"
        >
          QUERO OS 120 DIAGNÓSTICOS
        </a>
        <p className="text-sm opacity-80 mt-4">
          📲 Você recebe tudo na hora, direto no seu WhatsApp e no seu e-mail.
        </p>
      </div>
    </div>
  </section>
  
  <section id="secao-2" className="bg-pv-cream text-pv-text px-4 pt-10 pb-4 sm:pt-14 sm:pb-6">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center mb-6">
        VEJA COMO SÃO OS DIAGNÓSTICOS QUE VOCÊ VAI RECEBER
      </h2>
      
      <div className="relative overflow-hidden w-screen max-w-full -mx-4 sm:-mx-0">
        <div className="marquee-track space-x-6 py-4">
          
          <div className="flex shrink-0 space-x-6">
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-001_papel_entra_torto.png" alt="Visualização do Diagnóstico 1" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-002_patina_e_nao_puxa_o_papel.png" alt="Visualização do Diagnóstico 2" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-005_papel_sai_sanfonado_ou_amassado.png" alt="Visualização do Diagnóstico 3" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-006_solenoide_estalando_sem_parar.png" alt="Visualização do Diagnóstico 4" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-010_amassa_o_cabecalho_da_folha.png" alt="Visualização do Diagnóstico 5" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-012_erro_fatal_de_disco_encoder_pf.png" alt="Visualização do Diagnóstico 6" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-014_atolamento_recorrente_em_papel_pesado.png" alt="Visualização do Diagnóstico 7" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-016_barulho_de_metralhadora_no_atuador.png" alt="Visualização do Diagnóstico 8" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-017_impressao_desalinhada_em_diagonal.png" alt="Visualização do Diagnóstico 9" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
          </div>
          
          <div className="flex shrink-0 space-x-6">
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-001_papel_entra_torto.png" alt="Visualização do Diagnóstico 1" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-002_patina_e_nao_puxa_o_papel.png" alt="Visualização do Diagnóstico 2" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-005_papel_sai_sanfonado_ou_amassado.png" alt="Visualização do Diagnóstico 3" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-006_solenoide_estalando_sem_parar.png" alt="Visualização do Diagnóstico 4" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-010_amassa_o_cabecalho_da_folha.png" alt="Visualização do Diagnóstico 5" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-012_erro_fatal_de_disco_encoder_pf.png" alt="Visualização do Diagnóstico 6" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-014_atolamento_recorrente_em_papel_pesado.png" alt="Visualização do Diagnóstico 7" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-016_barulho_de_metralhadora_no_atuador.png" alt="Visualização do Diagnóstico 8" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-017_impressao_desalinhada_em_diagonal.png" alt="Visualização do Diagnóstico 9" className="h-[400px] sm:h-[600px] md:h-[900px] w-auto object-contain rounded-lg shadow-md" draggable={false} />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="secao-3" className="bg-pv-cream border-t border-black/5 px-4 pt-4 pb-12 sm:pt-6 sm:pb-16 text-pv-text">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center mb-6">
        OS +120 DIAGNÓSTICOS POSSUEM:
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        <div className="bg-white rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.03] border border-black/5 shadow-sm">
          <img src="https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/checklist_entrega-item_1_icon-1784053022550.webp" alt="Icon 1" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
          <span className="font-semibold text-sm sm:text-base leading-snug">Um defeito inteiro em uma página só: sintoma observado, causas mais prováveis, verificações na ordem e próximo passo.</span>
        </div>
        
        <div className="bg-white rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.03] border border-black/5 shadow-sm">
          <img src="https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/checklist_entrega-item_2_icon-1784053041623.webp" alt="Icon 2" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
          <span className="font-semibold text-sm sm:text-base leading-snug">Organização por sintoma e por sistema: índice visual para achar o diagnóstico em poucos toques.</span>
        </div>
        
        <div className="bg-white rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.03] border border-black/5 shadow-sm">
          <img src="https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/checklist_entrega-item_3_icon-1784053047571.webp" alt="Icon 3" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
          <span className="font-semibold text-sm sm:text-base leading-snug">Versão digital para o celular e versão A4: para imprimir e deixar em uma pasta na bancada.</span>
        </div>
        
        <div className="bg-white rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.03] border border-black/5 shadow-sm">
          <img src="https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/checklist_entrega-item_4_icon-1784053061652.webp" alt="Icon 4" className="h-12 w-12 shrink-0 object-contain" loading="lazy" />
          <span className="font-semibold text-sm sm:text-base leading-snug">Download imediato: sem mensalidade e com acesso vitalício.</span>
        </div>
      </div>
    </div>
  </section>
  
  <section id="secao-4" className="bg-pv-primary text-white pt-10 pb-10 sm:pt-14 sm:pb-14 overflow-hidden">
    <div className="max-w-pv-container mx-auto">
      
      <div className="relative overflow-hidden w-screen max-w-full -mx-4 sm:-mx-0 mb-8">
        <div className="marquee-track space-x-6 py-2">
          <div className="flex shrink-0 space-x-6">
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-019.png" alt="Page 1" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-024.png" alt="Page 2" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-038.png" alt="Page 3" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-041.png" alt="Page 4" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-052.png" alt="Page 5" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-054.png" alt="Page 6" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-062.png" alt="Page 7" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-062(1).png" alt="Page 8" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-083.png" alt="Page 9" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-087.png" alt="Page 10" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-097.png" alt="Page 11" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-133.png" alt="Page 12" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-137.png" alt="Page 13" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-140.png" alt="Page 14" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-141.png" alt="Page 15" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-150.png" alt="Page 16" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-151.png" alt="Page 17" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
          </div>
          
          <div className="flex shrink-0 space-x-6">
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-019.png" alt="Page 1" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-024.png" alt="Page 2" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-038.png" alt="Page 3" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-041.png" alt="Page 4" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-052.png" alt="Page 5" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-054.png" alt="Page 6" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-062.png" alt="Page 7" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-062(1).png" alt="Page 8" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-083.png" alt="Page 9" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-087.png" alt="Page 10" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-097.png" alt="Page 11" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-133.png" alt="Page 12" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-137.png" alt="Page 13" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-140.png" alt="Page 14" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-141.png" alt="Page 15" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-150.png" alt="Page 16" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
            <img src="https://diagnosticosimpressoras.escolaesportiva.com/D-151.png" alt="Page 17" className="h-[380px] sm:h-[600px] w-auto object-contain rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center px-4">
        
        <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.2em] text-[#ff0000] italic mb-4">
          Aproveite a oferta por tempo limitado
        </p>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white mb-6">
          Quantas peças você ainda vai trocar antes de ter certeza do que era o defeito?
        </h2>
        
        <a 
          href="https://diagnosticosimpressoras.escolaesportiva.com/%23planos" 
          className="inline-block px-10 py-5 text-lg sm:text-xl font-bold rounded-full bg-pv-success hover:bg-emerald-600 transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] uppercase tracking-wide"
        >
          QUERO ACESSAR AGORA
        </a>
      </div>
    </div>
  </section>
  
  <section id="secao-5" className="bg-pv-bg text-pv-text px-4 pt-10 pb-10 sm:pt-14 sm:pb-14">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center mb-8">
        ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA:
      </h2>
      
      <div className="flex justify-center mb-8">
        <img 
          src="https://diagnosticosimpressoras.escolaesportiva.com/%5Bimagemt%C3%A9cnicoantesedepois%5D.png" 
          alt="Técnico Antes e Depois" 
          className="max-h-[440px] sm:max-h-[800px] w-auto object-contain rounded-pv shadow-lg"
          loading="lazy"
        />
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Parar de diagnosticar no chute</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Ter um caminho definido para seguir em cada sintoma, em vez de ir trocando peça até o equipamento voltar a funcionar.</p>
          </div>
        </div>
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Saber por onde começar</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Abrir no sintoma que está na sua frente e já ter a primeira verificação na tela, sem ficar perdendo tempo decidindo por onde atacar.</p>
          </div>
        </div>
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Confirmar antes de trocar o componente</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Fazer as verificações que descartam as outras causas antes de condenar placa lógica, cabeça de impressão, fusor ou fonte.</p>
          </div>
        </div>
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Não parar o atendimento para procurar vídeo</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Resolver a dúvida no próprio celular, em segundos, sem depender de YouTube, grupo de WhatsApp ou ligar para outro técnico.</p>
          </div>
        </div>
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Falar com segurança na frente do cliente</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Explicar o que está acontecendo e o valor do orçamento com base em verificações reais, não em suposição.</p>
          </div>
        </div>
        
        <div className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.03] bg-pv-mint border border-pv-mint-border">
          <span className="shrink-0 mt-1">
            <svg className="h-4 w-4 text-pv-success" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
          </span>
          <div>
            <h3 className="font-black font-heading uppercase text-lg mb-2 text-pv-text tracking-tight">Girar a bancada mais rápido</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">Reduzir o tempo perdido em tentativa e erro, liberando espaço para consertar mais impressoras no mesmo dia.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="secao-7" className="bg-pv-pink text-pv-text px-4 pt-10 pb-10 sm:pt-14 sm:pb-14">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center mb-8">
        TUDO O QUE VOCÊ VAI RECEBER
      </h2>
      
      <div className="max-w-2xl mx-auto rounded-pv overflow-hidden p-6 sm:p-10 space-y-8 bg-pv-primary text-white shadow-xl">
        <div className="text-center">
          <span className="inline-block text-sm sm:text-base font-extrabold px-6 py-2.5 rounded-full bg-pv-success text-white">
            ⚡ ACESSO IMEDIATO — TUDO FOI ORGANIZADO PARA SER CONSULTADO NA BANCADA.
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black font-heading text-center tracking-tight leading-snug">
          TUDO FOI ORGANIZADO PARA SER CONSULTADO NA BANCADA.
        </h3>
        <p className="text-center text-sm sm:text-base text-white/80 leading-normal">
          Você abre o índice, encontra o sintoma que está na sua frente e usa o diagnóstico enquanto está com a impressora aberta.
        </p>
        
        <div className="flex justify-center my-4">
          <img 
            src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png" 
            alt="Pacote Diagnósticos Mockup" 
            className="max-h-[330px] sm:max-h-[420px] object-contain rounded-lg w-full"
            loading="lazy"
          />
        </div>
        
        <ul className="divide-y divide-white/10 text-sm sm:text-base">
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-extrabold text-white">Mais de 120 diagnósticos de defeitos em impressoras (EcoTank, Jato de Tinta e Laser):</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 1, Falhas de Impressão e Qualidade: riscos brancos, falha de cor, borrado, efeito fantasma, impressão fraca ou falhas recorrentes.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 2, Tracionamento e Papel: não puxa papel (pick-up roller), puxa várias folhas, amassa a folha, atolamento no meio do percurso.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 3, Alimentação e Placa Lógica: impressora não liga, reinicia sozinha, pisca luzes sem código, travada no boot ou erro de comunicação.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 4, Sistema de Tintas e Toners: ar nas mangueiras (bulky/EcoTank), cartucho/toner não reconhecido, vazamento interno, lixeira cheia (reset).</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 5, Unidade Fusora e Laser (Laserjet): película rasgada, toner não fixa no papel (sai na mão), bucha gasta, lâmpada queimada.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 6, Ruídos e Trava Mecânica: estalos fortes nas engrenagens, motor de passo forçado, carro de impressão batendo nas laterais.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 7, Scanner e Cópia: erro de scanner, lâmpada travada, cópia desalinhada, riscos pretos no escaneamento.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Bloco 8, Tabela de Códigos de Erro: decodificação de erros comuns (Epson, HP, Canon, Brother) com testes práticos antes de condenar peças.</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Índice de navegação por sintoma</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Guia inicial de utilização na bancada</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-bold text-white">Arquivos em alta resolução (Versão Celular/Tablet e Versão A4 Imprimível)</span>
          </li>
          <li className="flex gap-3 items-start py-3.5">
            <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
            <span className="font-extrabold text-white">Download imediato e Acesso Vitalício</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  
  <section id="secao-8" className="bg-pv-pink border-t border-black/5 px-4 pt-4 pb-10 sm:pt-6 sm:pb-14 text-pv-text">
    <div className="max-w-pv-container mx-auto text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] mb-2">
        E NÃO PARA POR AÍ... TEM MAIS!
      </h2>
      <p className="text-xl sm:text-2xl italic font-bold opacity-90 mb-4">
        Você também vai receber…
      </p>
      
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/Mockupipbonus1.png" 
              alt="Bônus 1 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #1
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">+40 Diagnósticos Extras de Defeitos Intermitentes e Falhas Térmicas</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Aqueles problemas sérios que só acontecem depois de imprimir 30 páginas ou quando a máquina esquenta na bancada.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/Mockupipbonus2.png" 
              alt="Bônus 2 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #2
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">Mapa de Parafusos e Travas Ocultas das 20 Impressoras Mais Vendidas</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Localização exata dos pontos críticos das linhas Epson L, HP Ink Tank e Brother para abrir sem quebrar a carcaça do cliente.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/Mockupipbonus3.png" 
              alt="Bônus 3 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #3
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">Tabela de Testes Frequentes de Placa Lógica (Fusíveis F1/F2, Termistores e Fontes)</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Valores exatos de medição para testar rapidamente se o fusível da placa queimou, sem precisar condenar a placa inteira.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipbonus4.png" 
              alt="Bônus 4 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #4
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">Guia de Desentupimento Rápido de Cabeça & Lubrificação de Fusora</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Como desentupir sem rasgar o piezocristal e qual graxa específica usar nos eixos e películas para evitar travamentos.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipbonus5.png" 
              alt="Bônus 5 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #5
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">Checklist de Segurança Antes de Condenar Cabeça de Impressão ou Placa</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Os 5 testes obrigatórios antes de dar o diagnóstico final, garantindo que você não pague uma peça do próprio bolso.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-pv overflow-hidden flex flex-col bg-pv-cream border border-black/5 shadow-sm transition-transform duration-300 hover:scale-[1.03]">
          <div className="relative bg-black/[0.04] flex items-center justify-center p-4">
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipbonus6.png" 
              alt="Bônus 6 Cover" 
              className="h-72 w-full object-contain"
              loading="lazy"
            />
            <span className="absolute top-3 right-3 text-xs font-extrabold px-3 py-1.5 rounded bg-[#FFE08A] text-[#2D1107] border border-amber-300">
              BÔNUS #6
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-4">
            <h3 className="font-black font-heading leading-tight text-xl text-pv-text">Guia "Não Troque a Peça Errada": Os 15 Erros de Diagnóstico Mais Comuns na Bancada</h3>
            <p className="text-sm sm:text-base text-pv-text-muted leading-relaxed">
              Como não confundir sujeira no disco encoder/fita com defeito de placa ou motor, economizando tempo e dinheiro.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full bg-[#1F1410] text-white">
                <span className="opacity-80">Valor:</span>
                <s className="opacity-60">R$ 27</s>
                <span className="text-pv-gold font-extrabold">GRÁTIS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="planos" className="bg-pv-bg text-pv-text px-4 pt-8 pb-10 sm:pt-10 sm:pb-14 border-t border-black/5">
    <div className="max-w-pv-container mx-auto">
      
      <div className="text-center mb-4 space-y-2">
        <span className="inline-block text-sm sm:text-base font-extrabold px-7 py-3 rounded-full bg-pv-accent text-white shadow-sm uppercase tracking-wide">
          🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-pv-text">
          ESCOLHA A MELHOR OPÇÃO PARA VOCÊ
        </h2>
        <div className="mx-auto h-[3px] w-24 rounded-full bg-pv-text mt-4"></div>
      </div>
      
      <div className="grid gap-8 mx-auto items-stretch md:grid-cols-2 max-w-5xl">
        
        <div className="rounded-pv p-5 sm:p-6 flex flex-col gap-4 overflow-hidden bg-pv-cream border border-black/5 shadow-md justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-center tracking-tight">
              PLANO BÁSICO
            </h3>
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/mockupplanobasicoip-Photoroom.png" 
              alt="Plano Basico Mockup" 
              className="h-64 sm:h-72 w-full object-contain mx-auto"
              loading="lazy"
            />
            <p className="text-sm font-bold uppercase tracking-wider text-pv-text-muted">Você recebe:</p>
            <ul className="divide-y divide-black/10 text-sm sm:text-base">
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span>Mais de 120 Diagnósticos para Impressoras</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span>Sintoma, causas, verificações e próximo passo</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-left">Índice por sintoma e guia inicial</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span>Versão digital e imprimível</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span>Acesso imediato e vitalício</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pt-3 border-t border-black/5">
            
            <div className="text-center">
              <p className="text-sm line-through text-[#E74C3C] font-black">de R$47,90 por:</p>
              <p className="text-5xl sm:text-6xl font-black font-heading text-pv-success mt-1">R$ 17,90</p>
              <p className="text-sm text-pv-text-muted mt-1 font-medium">ou 4x de R$4,48</p>
              <p className="text-sm sm:text-base text-pv-success mt-2 font-bold flex items-center justify-center gap-1">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Você economiza <strong>R$30,00</strong>
              </p>
            </div>
            
            <a 
              href="https://diagnosticosimpressoras.escolaesportiva.com/javascript%3Avoid(0)%3B" 
              onClick={openModal}
              id="btn-plano-basico"
              className="block w-full py-5 text-center text-base sm:text-lg font-black rounded-full bg-pv-success hover:bg-emerald-600 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] text-white shadow-md uppercase tracking-wider"
            >
              QUERO O PLANO BÁSICO
            </a>
            
            <div className="block md:hidden -mx-6 -mb-6 p-3 text-center text-xs font-bold bg-[#FFD54A] text-pv-text">
              92% das pessoas aproveitam o plano abaixo 👇
            </div>
          </div>
        </div>
        
        <div className="rounded-pv p-5 sm:p-6 flex flex-col gap-4 relative bg-pv-primary text-white border-2 border-pv-success shadow-2xl justify-between">
          
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-extrabold px-6 py-2 rounded-full bg-pv-success text-white shadow-md uppercase tracking-wide">
            ⚡ MAIS VENDIDO
          </span>
          <div className="space-y-4 pt-4">
            
            <div className="text-center">
              <span className="inline-block text-[11px] font-extrabold px-4 py-1.5 rounded-full bg-pv-accent text-white uppercase tracking-wider">
                🔥 ÚLTIMA CHANCE — OFERTA TERMINA HOJE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-center tracking-tight text-white">
              PLANO COMPLETO
            </h3>
            <img 
              src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png" 
              alt="Plano Completo Mockup" 
              className="h-64 sm:h-72 w-full object-contain mx-auto"
              loading="lazy"
            />
            
            <div className="text-center text-xs sm:text-sm font-extrabold rounded-full py-1.5 bg-pv-success/15 text-pv-success">
              ⚡ +120 diagnósticos + 6 bônus
            </div>
            <ul className="divide-y divide-white/10 text-sm sm:text-base">
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90">Mais de 120 Diagnósticos para Impressoras</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90">Sintoma, causas, verificações e próximo passo</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90">Índice por sintoma e guia inicial</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90">Versão digital e imprimível</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #1 (+40 Diagnósticos Intermitentes)</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #2 (Mapa de Parafusos e Travas Ocultas)</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #3 (Tabela de Medição de Placa e Fusíveis)</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #4 (Guia de Desentupimento e Lubrificação)</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #5 (Checklist Antes de Condenar Peças)</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/90 font-medium">🎁 Bônus #6 (Guia "Não Troque a Peça Errada")</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="text-white/80">Atualizações futuras da biblioteca</span>
              </li>
              <li className="flex gap-3 items-start py-2">
                <svg className="h-5 w-5 text-pv-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                <span className="font-extrabold text-white">Acesso vitalício a todo o material</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 pt-3 border-t border-white/10">
            
            <div className="text-center">
              <p className="text-sm line-through text-[#E74C3C] font-black">de R$147,90 por:</p>
              <p className="text-5xl sm:text-6xl font-black font-heading text-pv-success mt-1">R$ 37,90</p>
              <p className="text-sm text-white/80 mt-1 font-medium">ou 6x de R$7,22</p>
              <p className="text-sm sm:text-base text-pv-success mt-2 font-bold flex items-center justify-center gap-1">
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Você economiza <strong>R$110,00</strong>
              </p>
            </div>
            
            <a 
              href="https://pay.hotmart.com/R107304807U?off=y38dugls&checkoutMode=10" 
              target="_blank"
              className="block w-full py-5 text-center text-base sm:text-lg font-black rounded-full bg-pv-success hover:bg-emerald-600 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] uppercase tracking-wider"
            >
              QUERO O PLANO COMPLETO
            </a>
            
            <div className="flex justify-center pt-3">
              <img 
                src="https://site.arquivopratico.online/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png" 
                alt="Meios de pagamento" 
                className="h-7 object-contain opacity-95"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto rounded-pv p-6 flex gap-4 items-start bg-pv-mint border border-pv-mint-border">
        <span className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-white bg-pv-success font-black text-lg">
          ✓
        </span>
        <div>
          <p className="font-extrabold uppercase text-sm sm:text-base">
            Uma única peça trocada sem necessidade ou um orçamento errado custa mais que o plano completo.
          </p>
          <p className="text-sm sm:text-base text-pv-text-muted mt-1 font-medium">
            Os diagnósticos ficam com você para todas as impressoras que entrarem na sua bancada.
          </p>
        </div>
      </div>
      
      <p className="text-xs sm:text-sm mt-6 text-center text-pv-text-muted font-semibold">
        🔒 Compra 100% segura e garantida.
      </p>
    </div>
  </section>
  
  <section id="secao-10" className="bg-white text-pv-text px-4 pt-4 pb-10 sm:pt-4 sm:pb-14 border-t border-black/5">
    <div className="max-w-pv-container mx-auto">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-[280px_1fr] gap-6 items-center">
        
        <div className="flex justify-center">
          <img 
            src="https://origin.mentoriaprocesso.com/img/5afc6802-7b23-4428-aa4c-fe7f86e07546/d08bb98d-db0f-451f-aa55-124b86c1d482/garantia-selo-1784288640730.webp" 
            alt="Garantia" 
            className="w-full max-w-[240px] sm:max-w-[280px] object-contain"
            loading="lazy"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-[1.1]">
            GARANTIA DE 30 DIAS — ZERO RISCO PARA VOCÊ
          </h2>
          <p className="text-base sm:text-lg">
            <strong>Isso significa que,</strong> a qualquer momento nos próximos 30 dias, se você achar que:
          </p>
          <ul className="space-y-2 text-sm sm:text-base font-semibold">
            <li className="flex gap-2.5 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-pv-accent shrink-0"></span>
              <span>Os diagnósticos não são o que você esperava.</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-pv-accent shrink-0"></span>
              <span>O material não se aplica aos modelos de impressora que você atende.</span>
            </li>
            <li className="flex gap-2.5 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-pv-accent shrink-0"></span>
              <span>Ou simplesmente não quiser continuar com ele.</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base text-pv-text-muted pt-2 border-t border-black/5 leading-relaxed">
            Você pode solicitar o reembolso. Sem burocracia. O risco fica todo do nosso lado.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <section id="secao-11" className="bg-pv-bg text-pv-text px-4 pt-10 pb-10 sm:pt-14 sm:pb-14 border-t border-black/5">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center">
        COMO É O ACESSO
      </h2>
      <p className="text-center text-xs sm:text-sm font-bold opacity-75 mt-3 uppercase tracking-[0.25em] mb-8">
        (Veja como é simples acessar os diagnósticos)
      </p>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        
        <div className="bg-white rounded-pv p-6 border border-black/5 shadow-sm text-center flex flex-col items-center">
          <img src="https://site.arquivopratico.online/mvt/order.png" alt="Conclua sua compra" className="h-16 w-16 mb-4 object-contain" loading="lazy" />
          <h3 className="font-black font-heading text-lg sm:text-xl mb-2">Conclua sua compra</h3>
          <p className="text-xs sm:text-sm text-pv-text-muted mb-4">Após o pagamento, seu acesso é liberado automaticamente (Pagamento seguro, confirmação imediata).</p>
          <ul className="text-left space-y-1.5 w-full border-t border-black/5 pt-3">
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Pagamento seguro
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Confirmação imediata
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Acesso direto ao material
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-pv p-6 border border-black/5 shadow-sm text-center flex flex-col items-center">
          <img src="https://site.arquivopratico.online/mvt/member-card.png" alt="Entre na área de membros" className="h-16 w-16 mb-4 object-contain" loading="lazy" />
          <h3 className="font-black font-heading text-lg sm:text-xl mb-2">Entre na área de membros</h3>
          <p className="text-xs sm:text-sm text-pv-text-muted mb-4">Acesse seu painel com todos os diagnósticos e bônus (Visualização fácil e organização por sintoma).</p>
          <ul className="text-left space-y-1.5 w-full border-t border-black/5 pt-3">
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Visualização fácil
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Organização por sintoma
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Download rápido dos PDFs
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-pv p-6 border border-black/5 shadow-sm text-center flex flex-col items-center">
          <img src="https://site.arquivopratico.online/mvt/folders-1.png" alt="Baixe os arquivos" className="h-16 w-16 mb-4 object-contain" loading="lazy" />
          <h3 className="font-black font-heading text-lg sm:text-xl mb-2">Baixe os arquivos</h3>
          <p className="text-xs sm:text-sm text-pv-text-muted mb-4">Salve tudo no celular, no tablet ou no computador (Arquivos em alta resolução, prontos para imprimir em A4).</p>
          <ul className="text-left space-y-1.5 w-full border-t border-black/5 pt-3">
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Alta resolução
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Prontos para imprimir em A4
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Ficam salvos com você
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-pv p-6 border border-black/5 shadow-sm text-center flex flex-col items-center">
          <img src="https://site.arquivopratico.online/mvt/digital-drawing.png" alt="Use na bancada" className="h-16 w-16 mb-4 object-contain" loading="lazy" />
          <h3 className="font-black font-heading text-lg sm:text-xl mb-2">Use na bancada</h3>
          <p className="text-xs sm:text-sm text-pv-text-muted mb-4">Abra o diagnóstico com a impressora na sua frente (Busca rápida pelo índice e acesso vitalício).</p>
          <ul className="text-left space-y-1.5 w-full border-t border-black/5 pt-3">
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Busca rápida pelo índice
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Consulta enquanto você trabalha
            </li>
            <li className="flex gap-2 text-xs sm:text-sm items-start text-pv-text-muted">
              <span className="text-pv-success font-bold">✓</span> Acesso vitalício
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <a 
          href="https://diagnosticosimpressoras.escolaesportiva.com/%23planos" 
          className="inline-block px-10 py-5 text-lg sm:text-xl font-bold rounded-full bg-pv-success hover:bg-emerald-600 transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98] text-white shadow-[0_14px_30px_-10px_rgba(57,181,116,0.55)] uppercase tracking-wide"
        >
          QUERO ACESSAR AGORA
        </a>
      </div>
    </div>
  </section>
  
  <section id="secao-12" className="bg-pv-bg text-pv-text px-4 pt-10 pb-10 sm:pt-14 sm:pb-14 border-t border-black/5">
    <div className="max-w-pv-container mx-auto">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-center mb-8">
        PERGUNTAS FREQUENTES
      </h2>
      
      <div className="max-w-3xl mx-auto divide-y divide-black/10">
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>Serve para impressoras Tanque de Tinta (EcoTank) ou só Laser?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Servirá para ambas. O material cobre tanto modelos Jato de Tinta/EcoTank quanto impressoras Laser monocromáticas e coloridas.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>Serve para a marca que eu atendo?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Sim. O foco é a causa mecânica, elétrica e lógica do sintoma. Os diagnósticos cobrem as principais marcas do mercado: Epson, HP, Canon e Brother.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>O material ensina do zero a consertar impressoras?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Não é um curso extenso de teoria. É um guia de consulta rápida de bancada para quem já faz manutenção e quer agilizar o diagnóstico.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>Sou iniciante, vou conseguir usar?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Sim! A estrutura do material foi feita justamente para dar o passo a passo claro (Sintoma -&gt; O que testar primeiro -&gt; Próximo passo), evitando que você fique perdido.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>Já tenho experiência, isso vai ser básico demais?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Não. Mesmo técnicos experientes usam o guia como checklist de bancada para não esquecer verificações em defeitos intermitentes ou códigos de erro pouco comuns.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>Qual é o formato e preciso de internet na bancada?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            O material está em PDF de alta resolução. Você faz o download uma única vez e pode consultar offline direto no celular ou imprimir a versão A4.
          </p>
        </details>
        
        <details className="group py-4">
          <summary className="cursor-pointer text-lg sm:text-xl font-bold flex justify-between items-center list-none outline-none select-none">
            <span>E se eu não gostar?</span>
            <span className="ml-4 text-2xl transition-transform duration-300 group-open:rotate-45 text-pv-text-muted font-normal">+</span>
          </summary>
          <p className="mt-4 text-sm sm:text-base text-pv-text-muted whitespace-pre-line leading-relaxed">
            Você tem 30 dias de garantia incondicional para testar o material na sua bancada. Se não gostar, devolveremos 100% do seu dinheiro.
          </p>
        </details>
      </div>
    </div>
  </section>
  
  <footer className="px-4 py-8 text-center text-sm sm:text-base space-y-4 bg-[#111111] text-white">
    <p className="font-semibold text-base sm:text-lg">
      © Todos os direitos reservados.
    </p>
    <p className="opacity-80 max-w-3xl mx-auto leading-relaxed text-xs sm:text-sm">
      Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sexta, das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
    </p>
  </footer>
  

  <div onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }} className={`fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
    <div className={`bg-white text-pv-text rounded-pv p-4 sm:p-6 max-w-md w-full relative border-2 border-pv-success shadow-2xl flex flex-col items-center text-center space-y-3.5 transform transition-transform duration-300 ${open ? "scale-100" : "scale-95"} max-h-[90vh] overflow-y-auto`}>
      
      <button onClick={closeModal} className="absolute top-2 right-3 text-pv-text/60 hover:text-pv-text transition-colors text-xl font-bold p-1">×</button>
      
      <div className="space-y-1">
        <h4 className="text-2xl font-black font-heading text-red-600">Atenção!</h4>
        <p className="text-sm sm:text-base font-extrabold leading-snug">Você ganhou 26% de desconto disponível somente agora!</p>
      </div>
      
      <div className="my-1 max-w-[256px] sm:max-w-[320px]">
        <img 
          src="https://diagnosticosimpressoras.escolaesportiva.com/mockupipcompleto.png" 
          alt="Plano Completo Mockup" 
          className="w-full h-auto object-contain mx-auto"
          loading="lazy"
        />
      </div>
      
      <div className="text-xs sm:text-sm space-y-3 text-pv-text-muted leading-relaxed font-medium">
        <p>
          Você pode ter acesso a tudo do <strong className="text-pv-text font-black">Plano Completo de Diagnósticos para Impressoras</strong> por apenas <strong className="text-xl text-pv-success block my-0.5 font-black">R$ 27,90</strong> ou em <strong className="text-pv-success font-bold">6x de R$ 5,32</strong> no cartão.
        </p>
        <p className="bg-red-50 p-2.5 rounded-lg border border-red-200 text-[11px] sm:text-xs font-bold text-red-600 uppercase tracking-wide">
          ⚠️ Foram liberadas agora somente 10 vagas promocionais neste valor.
        </p>
      </div>
      
      <div className="w-full flex flex-col gap-2 pt-1">
        
        <a 
          href="https://pay.hotmart.com/R107304807U?off=cc9ko1lg&checkoutMode=10" 
          target="_blank"
          className="block w-full py-3 text-center text-sm font-bold rounded-full bg-pv-success hover:bg-emerald-600 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-white shadow-lg uppercase tracking-wider"
        >
          Quero o Plano Completo com Desconto
        </a>
        
        <a 
          href="https://pay.hotmart.com/R107304807U?off=nab2m97y&checkoutMode=10" 
          target="_blank"
          className="block w-full py-2 text-center text-[10px] sm:text-[11px] font-bold rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-pv-text-muted hover:text-pv-text uppercase tracking-wider"
        >
          Quero apenas o básico mesmo
        </a>
      </div>
    </div>
  </div>
  

    </div>
  );
}
