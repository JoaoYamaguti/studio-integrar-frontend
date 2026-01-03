export const procedure = {
  page: {
    slug: 'procedimentos',
    title: 'Procedimentos – Studio Integrar',
    subtitle: 'Cuidado integrativo para corpo, mente e energia',
    description:
      'No Studio Integrar, cada procedimento é parte de um cuidado completo e individualizado, unindo ciência, terapias integrativas e sabedoria ancestral.',
  },
  categories: [
    {
      id: 'mtc',
      name: 'Medicina Tradicional Chinesa',
      description:
        'Atua no equilíbrio do Yin e Yang, na harmonia dos Cinco Elementos e na livre circulação da energia vital (Qi).',
      procedures: [
        {
          id: 'acupuntura',
          name: 'Acupuntura',
          description:
            'Estimulação de pontos específicos para analgesia, equilíbrio emocional e tratamento de disfunções físicas.',
          benefits: ['Alívio da dor', 'Equilíbrio emocional', 'Melhora funcional dos órgãos'],
        },
        {
          id: 'auriculoterapia',
          name: 'Auriculoterapia',
          description: 'Estimulação de pontos na orelha que refletem todo o corpo.',
          benefits: [
            'Equilíbrio físico e emocional',
            'Auxílio no controle da dor',
            'Manutenção do tratamento ao longo do dia',
          ],
        },
        {
          id: 'moxabustao',
          name: 'Moxabustão',
          description:
            'Uso do calor terapêutico da Artemísia para fortalecer e desbloquear a energia vital.',
          benefits: [
            'Aquecimento energético',
            'Fortalecimento do organismo',
            'Alívio de dores e tensões',
          ],
        },
        {
          id: 'ventosaterapia',
          name: 'Ventosaterapia',
          description:
            'Aplicação de ventosas para liberar tensões musculares e melhorar a circulação.',
          benefits: [
            'Liberação miofascial',
            'Melhora da circulação sanguínea',
            'Redução de estagnações energéticas',
          ],
        },
        {
          id: 'laserpuntura',
          name: 'Laserpuntura',
          description:
            'Estimulação dos pontos de acupuntura com laser terapêutico, sem uso de agulhas.',
          benefits: [
            'Procedimento indolor',
            'Segurança e eficácia',
            'Indicado para pessoas sensíveis',
          ],
        },
      ],
    },
    {
      id: 'japonesa',
      name: 'Medicina Tradicional Japonesa',
      description:
        'Terapias manuais e energéticas que utilizam movimentos sutis para restaurar o equilíbrio corporal.',
      procedures: [
        {
          id: 'seitai',
          name: 'Seitai e New Seitai',
          description: 'Terapia manual japonesa que restabelece o alinhamento natural do corpo.',
          benefits: ['Alívio de dores na coluna', 'Melhora da postura', 'Aumento da mobilidade'],
        },
        {
          id: 'quiropraxia-japonesa',
          name: 'Quiropraxia Japonesa',
          description: 'Realinhamento corporal com técnicas suaves e precisas.',
          benefits: [
            'Liberação de tensões profundas',
            'Equilíbrio físico e energético',
            'Movimentos mais leves e naturais',
          ],
        },
        {
          id: 'mubun-dashi',
          name: 'Mubun Dashi',
          description: 'Acupuntura abdominal japonesa que atua no centro da energia vital (Hara).',
          benefits: ['Equilíbrio corporal profundo', 'Liberação emocional', 'Regulação energética'],
        },
      ],
    },
    {
      id: 'ozonioterapia',
      name: 'Ozonioterapia',
      description:
        'Terapia integrativa com ação anti-inflamatória, analgésica, antimicrobiana e regeneradora.',
      indications: [
        'Dores musculoesqueléticas',
        'Feridas crônicas',
        'Distúrbios circulatórios',
        'Estresse e baixa imunidade',
        'Aplicações estéticas',
      ],
    },
    {
      id: 'terapia-neural',
      name: 'Terapia Neural',
      description:
        'Regulação do sistema nervoso autônomo e desbloqueio de campos de interferência.',
      benefits: [
        'Redução de dores crônicas',
        'Liberação de memórias corporais',
        'Equilíbrio funcional do organismo',
      ],
    },
    {
      id: 'laserterapia',
      name: 'Laserterapia',
      description: 'Uso terapêutico do laser para analgesia, regeneração e cicatrização.',
      indications: [
        'Dores musculares e articulares',
        'Feridas e pós-operatório',
        'Estética e rejuvenescimento',
        'Neuromodulação',
      ],
    },
    {
      id: 'energeticas',
      name: 'Terapias Energéticas e Ancestrais',
      procedures: [
        {
          id: 'reiki-xamanico',
          name: 'Reiki Xamânico',
          description:
            'Cura energética profunda que integra Reiki e práticas ancestrais xamânicas.',
          benefits: ['Limpeza energética', 'Cura emocional', 'Reconexão espiritual'],
        },
        {
          id: 'sound-healing',
          name: 'Sound Healing Shamanic',
          description: 'Terapia sonora com instrumentos ancestrais que harmonizam corpo e mente.',
          benefits: [
            'Regulação do sistema nervoso',
            'Liberação emocional',
            'Elevação da frequência vibracional',
          ],
        },
      ],
    },
  ],
  cta: {
    text: 'Agende sua sessão',
    description: 'Vivencie uma experiência integrativa única, preparada especialmente para você.',
  },
}
