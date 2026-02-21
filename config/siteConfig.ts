// config/siteConfig.ts

import { Scissors, Zap, Wind, User } from 'lucide-react';
import React from 'react';

export const siteConfig = {
    // Configurações Gerias do Site
    name: "Barbearia Brutal & Co.",
    shortName: "BRUTAL & CO.",
    tagline: "Estilo de Homem",
    description: "Mais que um corte, um ritual. Barbearia clássica para o homem moderno.",

    // Informações de Contato
    contact: {
        whatsapp: "5531995453632", // Coloque apenas números com DDI + DDD
        phoneFormated: "(11) 99999-8888",
        email: "contato@barbeariabrutal.com.br",
        address: {
            street: "Av. Paulista, 1000 - Bela Vista",
            cityState: "São Paulo - SP, 01310-100",
            mapQueryUrl: "https://www.google.com/maps?q=Av.+Paulista,+São+Paulo+-+SP&z=16&output=embed"
        }
    },

    // Redes Sociais
    social: {
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
        youtube: "https://youtube.com/"
    },

    // Horários de Funcionamento
    hours: [
        { days: "Segunda - Sexta", hours: "09h - 20h" },
        { days: "Sábado", hours: "08h - 18h" },
        { days: "Domingo", hours: "Fechado" } // Use strings como "Fechado" se precisar
    ],

    // Textos e Labels
    labels: {
        bookingButton: "AGENDAR AGORA",
        servicesButton: "VER NOSSOS SERVIÇOS",
        openToday: "ABERTO HOJE ATÉ AS 20H",
        heroTitle: "MAIS QUE UM CORTE,",
        heroHighlight: "UM RITUAL.",
        heroSubtitle: "Domine o seu estilo na barbearia que entende de força, tradição e excelência. Onde cada navalha conta uma história de respeito."
    },

    // Menu de Navegação Superior
    navItems: [
        { name: 'Início', href: '#' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Agendar', href: '#agendamento' },
        { name: 'Galeria', href: '#galeria' },
        { name: 'Unidade', href: '#unidade' },
    ],

    // Configurações de Agendamento Expresso
    booking: {
        services: ["Corte Brutal", "Barba de Respeito", "Combo Ouro", "Pai & Filho"],
        barbers: ["Mestre Silva", "Ricardo 'Navalha'", "Felipe 'Fade'"],
        dates: ["Hoje", "Amanhã (Ter)", "Quarta", "Quinta"],
        times: ["09:00", "10:30", "13:00", "14:30", "16:00", "18:00"],
    },

    // Galeria de Fotos
    gallery: [
        {
            url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
            title: 'FADE DE PRECISÃO',
            author: 'Felipe Fade'
        },
        {
            url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800',
            title: 'LÂMINAS DE AÇO',
            author: 'Mestre Silva'
        },
        {
            url: 'https://images.unsplash.com/photo-1592647420448-61635605094e?auto=format&fit=crop&q=80&w=800',
            title: 'CONFORTO VINTAGE',
            author: 'Unidade Paulista'
        },
        {
            url: 'https://images.unsplash.com/photo-1626014303757-6466006769f3?auto=format&fit=crop&q=80&w=800',
            title: 'BARBA ESCULPIDA',
            author: 'Ricardo Navalha'
        },
        {
            url: 'https://images.unsplash.com/photo-1622286332618-f2803b186711?auto=format&fit=crop&q=80&w=800',
            title: 'RITUAL DA TOALHA',
            author: 'Mestre Silva'
        },
        {
            url: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?auto=format&fit=crop&q=80&w=800',
            title: 'FERRAMENTAS DO OFÍCIO',
            author: 'Equipe Brutal'
        },
        {
            url: 'https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&q=80&w=800',
            title: 'CORTE EXECUTIVO',
            author: 'Felipe Fade'
        },
        {
            url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
            title: 'ESPUMA TRADICIONAL',
            author: 'Ricardo Navalha'
        },
        {
            url: 'https://images.unsplash.com/photo-1618331835717-8016f122c19e?auto=format&fit=crop&q=80&w=800',
            title: 'VISAGISMO MODERNO',
            author: 'Mestre Silva'
        }
    ],

    // Depoimentos
    testimonials: [
        {
            name: "Carlos Alberto",
            role: "Empresário",
            text: "Lugar de homem. Ambiente foda, atendimento de primeira e o corte impecável. Não troco por nada.",
            rating: 5
        },
        {
            name: "Marcos Vinícius",
            role: "Desenvolvedor",
            text: "O sistema de agendamento funciona muito bem. Cheguei e já fui atendido. A cerveja cortesia é o toque final.",
            rating: 5
        },
        {
            name: "Roberto Freitas",
            role: "Advogado",
            text: "A melhor barba que já fiz. A toalha quente com essência de cedro é um ritual que todo homem deveria passar.",
            rating: 5
        }
    ]
};

// Como os ícones são baseados em React Components, exportamos serviços separadamente para evitar conflitos se o config for usado no SSR (caso o template seja migrado depois).
export const servicesConfig = [
    {
        title: "Corte Brutal",
        price: "R$ 60",
        description: "Corte clássico ou moderno com finalização premium e secagem.",
        iconName: "Scissors",
        duration: "45 min"
    },
    {
        title: "Barba de Respeito",
        price: "R$ 45",
        description: "Alinhamento, toalha quente, shave gel e balm amadeirado.",
        iconName: "Wind",
        duration: "30 min"
    },
    {
        title: "Combo Ouro",
        price: "R$ 95",
        description: "Corte + Barba + Lavagem especial + Cerveja gelada cortesia.",
        iconName: "Zap",
        duration: "1h 15 min"
    },
    {
        title: "Pai & Filho",
        price: "R$ 100",
        description: "Dois cortes para fortalecer a tradição entre gerações.",
        iconName: "User",
        duration: "1h 30 min"
    }
];
