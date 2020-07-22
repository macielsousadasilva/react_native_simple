# Estrutura de pastas


# Motivações
- Propriedade clara dos recursos
- Previsibilidade de uso do módulo (refatoração, manutenção, você sabe o que é compartilhado, o que não é, evita regressões acidentais, evita enormes diretórios de módulos não reutilizáveis, etc.)
- O CI executa apenas os testes que importam (futuro)
- Divisão de código (futuro)


# Como funciona
A estrutura do arquivo é mapeada diretamente para a hierarquia da rota, que é mapeada diretamente para a hierarquia da interface do usuário.
É invertido do modelo que usamos em outros sistemas.Se considerarmos todas as pastas uma pasta "genérica" ou uma "característica", teremos apenas uma pasta "característica", mas muitas pastas "genéricas".

Exemplos de pastas "feature":

- Home
- Profile



Exemplos de pastas "genérica":

- components
- config
- stores
- services



Dada esta configuração de rota a navegação do arquivo routes.js:

```
src
└── routes.js
```

```js
<NavigationContainer>
  <AppStack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#B2F8F8", //troca a cor do fundo do app em todas as pages
      },
    }}
  >
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Profile" component={Profile} />
  </AppStack.Navigator>
</NavigationContainer>

```
O mesmo poderá acessar outras paginas e navegar conforme configurarmos.





Agora, configuraríamos nossos diretórios assim:

```
src
├── assets
├── components
├── config
└── pages
    └── Home
    │    ├── index.js
    │    └── styles.js
    └── Profile  
    │    ├── index.js
    │    └── styles.js
                
```

Em seguida, cada uma dessas pages que possui um index.js arquivo, que é o arquivo que lida com a entrada na tela, também conhecido como "Manipulador de rota" no roteador do React.
É muito parecido com um Route em Ember.Também teremos o styles.js que e responsavel por desenvolver o stilo da tela, ficam mais limpo para qualquer manutenção










### components


```

src
├── assets
├── components
│   ├── Card
│   │   ├── index.js
│   │   └── styles.js
│   └── Button
│       ├── index.js
│       └── styles.js
├── config
├── pages
│   ├── Home
│   │   ├── index.js
│   │   └── styles.js
│   └── Profile
│       ├── index.js
│       └── styles.js

```


Esses componentes são usados de forma global a fins de reutilizar o que foi desenvolvido, evitando repetição de codigos para interface compartilhando entre as pages.


### Serviços compartilhados

Toda page precisa de informações e busca essas informações de Api's e precisamos organizar os endpoints por esse motivo utilizamos a pasta "services" onde qualquer tipo de configuração de busca de serviços externos ou internos como banco de dados e busca de informações.


```
src
├── assets
├── components
├── config
├── pages
└── services
    └── api.js
```







### Store para comunicação e organização de informações

Utilizamos o store para utilizar e organizar as informações, distribuir em qualquer tela ou atualizar alguma informação utilizando o redux ou outra biblioteca.

```
src
├── assets
├── components
├── config
├── pages
├── services
└── store
    └── index.js

```

