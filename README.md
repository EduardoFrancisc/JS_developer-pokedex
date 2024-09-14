# JS Developer Pokedex

Projeto web interativo que simula uma Pokédex — o dispositivo fictício da série Pokémon que armazena informações sobre as criaturas capturadas. Este projeto foi desenvolvido com foco no aprimoramento de habilidades em JavaScript e na construção de interfaces interativas, consumindo uma API externa para fornecer dados dinâmicos.

## Descrição do Projeto

A JS Developer Pokedex oferece uma interface simples, mas funcional, que exibe uma lista de Pokémons retirados da PokeAPI. Ao clicar em um Pokémon, o usuário pode ver informações detalhadas, como:

- **Imagem** do Pokémon
- **Nome** e **número na Pokédex**
- **Tipo(s)** do Pokémon
- **Habilidades**
- **Estatísticas** básicas (HP, ataque, defesa, etc.)

### Componentes Principais

1. **Lista de Pokémons**: Apresenta os Pokémons de forma paginada, permitindo uma navegação simples e eficiente.

2. **Página de Detalhes**: Quando o usuário clica em um Pokémon, uma página dedicada exibe suas informações detalhadas, incluindo seu tipo, habilidades e estatísticas.

3. **Design Responsivo**: A aplicação foi projetada para funcionar bem em diferentes tamanhos de tela, proporcionando uma experiência fluida tanto em dispositivos móveis quanto em desktops.

### PokeAPI

Toda a informação sobre os Pokémons é consumida da [PokeAPI](https://pokeapi.co/), uma API pública que fornece dados completos sobre todas as gerações de Pokémon. A integração com essa API permite que a Pokédex seja sempre atualizada com dados consistentes e precisos.

## Como Funciona

- A aplicação faz uma chamada para a PokeAPI para buscar informações sobre os Pokémons.
- Exibe a lista de Pokémons.
- O usuário pode clicar em um Pokémon da lista para ver mais detalhes sobre ele.
