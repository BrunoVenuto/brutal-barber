<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Barbearia Brutal & Co. - Template Configurável

Este projeto fornece uma landing page de barbearia completa, moderna e totalmente configurável. Todo o texto, mídia e cores principais podem ser personalizados em arquivos de configuração locais, sem precisar modificar diretamente o código dos componentes ou lidar com as classes do Tailwind.

## Como Executar Localmente

**Pré-requisitos:** Node.js

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Defina a sua variável `VITE_GEMINI_API_KEY` num arquivo `.env.local` (Opcional, usado para o Consultor de Estilo com IA).
3. Execute a aplicação (modo de desenvolvimento):
   ```bash
   npm run dev
   ```
4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

## Como Personalizar o seu Template

Toda a customização e dados da página foram extraídos para a pasta `/config`. Dessa forma, é possível editar o template sem quebrar o layout original!

### 1. `config/siteConfig.ts`
Este arquivo centraliza todo o conteúdo da página:
- **Textos Gerais:** Títulos, subtítulos, descrições e labels de botões.
- **Informações de Contato:** Link do WhatsApp, Endereço completo (com mapa do Google Maps) e e-mail.
- **Redes Sociais:** Links para Instagram, Facebook e YouTube.
- **Listas e Arrays:** Dados dos Serviços oferecidos, imagens da Galeria, Depoimentos de clientes e a lista de Barbeiros disponíveis no agendamento expresso.

### 2. `config/theme.ts`
Este arquivo controla a paleta de cores principal:
- **brand:** A cor de destaque (amarelo originalmente). Edite este código Hexadecimal para mudar a cor principal de todos os botões, detalhes, bordas e textos de destaque instantaneamente!
- **brandHover:** A cor de destaque ao passar o mouse por cima.
- **background:** A cor de fundo principal (preto originalmente).
- **text:** A cor principal dos textos curtos e contínuos.

As cores definidas no `theme.ts` são injetadas no Tailwind e aplicadas em toda a aplicação automaticamente.

---
**Nota:** O layout original não será alterado a não ser que você adicione imagens de proporções muito discrepantes ou remova dados essenciais. Faça o uso das configurações com os mesmos arquivos para o melhor resultado estético final!
