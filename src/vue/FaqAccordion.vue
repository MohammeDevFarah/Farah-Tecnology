<template>
  <div class="faq-list">
    <div
      v-for="(item, idx) in faqs"
      :key="idx"
      class="faq-item"
      :class="{ open: activeIdx === idx }"
    >
      <!-- Botão da pergunta -->
      <button class="faq-q" @click="toggle(idx)">
        <span>{{ item.q }}</span>
        <span class="faq-ico">
          <i class="fas" :class="activeIdx === idx ? 'fa-minus' : 'fa-plus'"></i>
        </span>
      </button>

      <!-- Resposta — altura medida pelo scrollHeight para animação suave -->
      <div
        class="faq-a"
        :ref="(el) => setRef(el, idx)"
        :style="{
          height: activeIdx === idx ? (heights[idx] ?? 0) + 'px' : '0px'
        }"
      >
        <div class="faq-a-inner">{{ item.a }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const activeIdx  = ref(null)
const answerRefs = ref({})
const heights    = ref({})

/* Guarda referência do elemento e mede sua altura real */
const setRef = (el, idx) => {
  if (!el) return
  answerRefs.value[idx] = el
}

/* Mede a altura de todos os painéis após montagem */
const measureAll = async () => {
  await nextTick()
  Object.entries(answerRefs.value).forEach(([i, el]) => {
    if (el) heights.value[parseInt(i)] = el.scrollHeight
  })
}

onMounted(measureAll)

const toggle = (idx) => {
  activeIdx.value = activeIdx.value === idx ? null : idx
}

/* ── Perguntas & Respostas ──────────────────────────── */
const faqs = [
  {
    q: 'Quanto tempo leva para criar um site profissional?',
    a: 'Depende da complexidade. Uma landing page fica pronta em 5–7 dias úteis. Um site completo leva de 2 a 4 semanas. Sistemas e aplicações web são dimensionados após o briefing inicial. Somos ágeis sem abrir mão da qualidade.'
  },
  {
    q: 'Preciso ter domínio e hospedagem para contratar?',
    a: 'Não. Cuidamos de tudo: aquisição de domínio, configuração de hospedagem e certificado SSL. Você não precisa de nenhum conhecimento técnico — é tudo por nossa conta.'
  },
  {
    q: 'Vou poder atualizar o conteúdo do meu site depois?',
    a: 'Sim. Entregamos sites com painel de gerenciamento (CMS) intuitivo, onde você edita textos, imagens e publica novidades sem precisar de conhecimento técnico. Se preferir, nosso plano de manutenção faz isso por você.'
  },
  {
    q: 'O site vai aparecer no Google?',
    a: 'Todo site que desenvolvemos já sai com SEO On-Page configurado — estrutura de código limpa, velocidade otimizada, meta tags e sitemap. Para aparecer nas primeiras posições, oferecemos também estratégia de SEO contínuo e produção de conteúdo.'
  },
  {
    q: 'Funciona para qualquer tipo de negócio ou segmento?',
    a: 'Absolutamente. Já desenvolvemos projetos para clínicas, restaurantes, escritórios jurídicos, e-commerces, startups, academias e indústrias. Cada projeto começa pelo entendimento profundo do seu negócio.'
  },
  {
    q: 'Como funciona o suporte após a entrega?',
    a: 'Todos os planos incluem período de suporte pós-entrega. Além disso, oferecemos planos mensais de manutenção, monitoramento e evolução contínua. Não somos o tipo de empresa que entrega e desaparece.'
  },
  {
    q: 'Posso ver projetos realizados antes de contratar?',
    a: 'Claro. Solicite uma conversa gratuita e mostraremos nosso portfólio completo, com cases detalhados e métricas reais de projetos do mesmo segmento que o seu.'
  },
]
</script>
