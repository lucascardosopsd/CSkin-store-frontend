# README.md [Front-end]

# Desafio CSkin Store (Front-end)

Projeto desenvolvido para o desafio da empresa CSkin Store com o propósito de servir de front end para a api localizada [neste repositório](https://github.com/lucascardosopsd/CSkin-store-backend.git)

---

### Screenshots

![image.png](https://i.imgur.com/3hhDysi.png)

![image.png](https://i.imgur.com/eusrbVv.png)

![image.png](https://i.imgur.com/Dfigg1y.png)

---

### Tecnologias

- Next.js 14
- Chakra UI
- Typescript
- React Hook Form
- Zod
- Jest
- Axios

---

### Requisitos

- Nodejs v20+
- Yarn 1.22+

---

### Como Rodar

1. Abra o terminal na pasta do projeto e digite yarn
2. Crie um arquivo na .env na raiz do projeto e coloque a seguinte varíavel

```jsx
API_URL=http://localhost:3333
```

1. Digite no terminal `yarn dev`

---

### Funcionalidades

- Listar skins
- Buscar skins por nome, ordem, ordem de preço, valor do float, preço inicial e preço final
- Paginação
- Tema claro e escuro

---

### Componentes Principais

- Home: Faz uma chamada paginada ao banco de dados na rota /skins, recebe dela a quantidade de skins disponível na página atual e passa os dados para o grid de skins. Além disso exibe o componente de paginação.
- Navbar: Exibe o logo da loja e o botão para alternar o tema
- MobileMenu: Menu exibido apenas quando o tamanho da tela for compatível com celular ou tablet
- FilterForm: Fomulário utilizado para enviar a query de filtro de busca para o banco de dados
- Paginate: Exibe a quantidade de páginas disponível, avança e retrocede páginas baseando-se na query da URL
- SkinsGrid: Recebe as skins da página atual e cria um grid com os cards correspondentes
- SkinCard: Recebe os dados de uma skin e renderiza um card com título, categoria, imagem, preço, float, categoria e botão de compra

### Testes

Os testes foram do tipo integração e abordaram as seguintes funcionalidades:

- Renderizar navbar com menu mobile
- Renderizar menu mobile com o formulário de filtros
- Funcionalidade de pesquisa por nome e ordem
- Renderizar menu mobile sem o formulário de filtro
- Renderizar a Home com a grade de skins

Para rodar os testes basta digitar o comando `test:watch` no terminal do projeto

---

### Considerações Técnicas

- A proposta dos testes realizados neste projeto foram apenas para fins de demonstração, portanto nem todos os componentes e possibilidades foram testados.
- As possibilidades de categorias estão localizadas em `src/constants/categories.ts`
