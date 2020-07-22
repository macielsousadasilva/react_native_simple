# Estrutura de pastas


# Motivações
Propriedade clara dos recursos
Previsibilidade de uso do módulo (refatoração, manutenção, você sabe o que é compartilhado, o que não é, evita regressões acidentais, evita enormes diretórios de módulos não reutilizáveis, etc.)
O IC executa apenas os testes que importam (futuro)
Divisão de código (futuro)


# Como funciona
A estrutura do arquivo é mapeada diretamente para a hierarquia da rota, que é mapeada diretamente para a hierarquia da interface do usuário.
É invertido do modelo que usamos em outros sistemas.Se considerarmos todas as pastas uma pasta "genérica" ou uma "característica", teremos apenas uma pasta "característica", mas muitas pastas "genéricas".

Exemplos de pastas "feature":
pesquisas
Admin
Comercial
Autor


Exemplos de pastas "genéricas":
componentes
ajudantes
lojas
ações


Dada esta configuração de rota:

var routes = (
  <Route name="App">
    <Route name="Admin">
      <Route name="Users"/>
      <Route name="Reports"/>
    </Route>
    <Route name="Course">
      <Route name="Assignments"/>
    </Route>
  </Route>
);





Agora, configuraríamos nossos diretórios assim:


- app
- └── screens
-     └── App
-         └── screens
-             ├── Admin
-             │ └── screens
-             │     ├── Reports
-             │     └── Users
-             └── Course
-                 └── screens
-                     └── Assignments





Em seguida, cada uma dessas telas possui um index.js arquivo, que é o arquivo que lida com a entrada na tela, também conhecido como "Manipulador de rota" no roteador do React.É muito parecido com um Route em Ember.Também teremos algumas coisas de bootstrap de aplicativos de nível superior na raiz, como config/routes.js.

- app
- ├── config
- │ └── routes.js
- ├── screens
- │ └── App
- │     ├── screens
- │     │ ├── Admin
- │     │ │ ├── screens
- │     │ │ │ ├── Reports
- │     │ │ │ │ └── index.js
- │     │ │ │ └── Users
- │     │ │ │     └── index.js
- │     │ │ └── index.js
- │     │ └── Course
- │     │     ├── screens
- │     │     │ └── Assignments
- │     │     │     └── index.js
- │     │     └── index.js
- │     └── index.js
- └── index.js








Com essa estrutura, cada tela tem seu próprio diretório para armazenar seus módulos. Em outras palavras, introduzimos o "escopo" em nossa estrutura de arquivos do aplicativo.
Cada um provavelmente terá um components diretório.

- app
- ├── config
- │ └── routes.js
- ├── screens
- │ └── App
- │     ├── components
- │     ├── screens
- │     │ ├── Admin
- │     │ │ ├── components
- │     │ │ ├── screens
- │     │ │ │ ├── Reports
- │     │ │ │ │ ├── components
- │     │ │ │ │ └── index.js
- │     │ │ │ └── Users
- │     │ │ │     ├── components
- │     │ │ │     └── index.js
- │     │ │ └── index.js
- │     │ └── Course
- │     │     ├── components
- │     │     ├── screens
- │     │     │ └── Assignments
- │     │     │     ├── components
- │     │     │     └── index.js
- │     │     └── index.js
- │     └── index.js
- └── index.js




Esses componentes são usadosapenas na tela atual, nem mesmo nas telas filho.E quando você tem alguns componentes compartilhados entre as telas?


# Módulos compartilhados

Toda tela também possui um diretório genérico "compartilhado".Se seus filhos compartilharem algum componente entre si ou com o pai, colocaremos o código compartilhado em "shared".Aqui está o nosso aplicativo crescente com alguns novos módulos compartilhados e não compartilhados.
- app
- ├── config
- │ └── routes.js
- ├── screens
- │ └── App
- │     ├── components
- │     ├── screens
- │     │ ├── Admin
- │     │ │ ├── components
- │     │ │ ├── screens
- │     │ │ │ ├── Reports
- │     │ │ │ │ ├── components
- │     │ │ │ │ ├── stores
- │     │ │ │ │ │ └── ReportsStore.js
- │     │ │ │ │ └── index.js
- │     │ │ │ └── Users
- │     │ │ │     ├── components
- │     │ │ │     └── index.js
- │     │ │ ├── shared
- │     │ │ │ └── stores
- │     │ │ │     ├── AccountStore.js
- │     │ │ │     └── UserStore.js
- │     │ │ └── index.js
- │     │ └── Course
- │     │     ├── components
- │     │     ├── screens
- │     │     │ └── Assignments
- │     │     │     ├── components
- │     │     │     └── index.js
- │     │     └── index.js
- │     ├── shared
- │     │ └── components
- │     │     ├── Avatar.js
- │     │     └── Icon.js
- │     └── index.js
- ├── shared
- │ └── util
- │     └── createStore.js
- └── index.js


Nota Admin/shared; Reports e Users ambos podem acessar as lojas compartilhadas. 
Além disso, todas as telas do aplicativo podem usar Avatar.js e Icon.js.
Colocamos componentes compartilhados no shared diretório mais próximo possível e o movemos para a raiz, conforme necessário.






# Resolução do módulo compartilhado

A maneira como os módulos no CommonJS são resolvidos é bastante simples na prática: tudo é relativo a partir do arquivo atual.
Há um pedaço de "mágica" na maneira como os módulos são resolvidos. Quando você faz um requisito não relativo, como require('moment') o resolvedor primeiro tenta encontrá-lo node_modules/moment. Se não estiver lá, ele procurará dentro ../node_modules/moment e subirá na árvore até encontrá-lo.
Fizemos isso de forma a shared resolver da mesma maneira com o webpack modulesDirectories. 
Dessa forma, você não precisa fazer require('../../../../../../../../../../shared/Avatar') isso simplesmente, require('components/Avatar') não importa onde esteja.

# Testes

Os testes ficam ao lado dos módulos que eles testam.Testes parashared/util/createStore.jsviver em shared/util/__tests__/createStore.test.js.
Agora, nosso aplicativo tem vários__tests__diretórios:
- app
- ├── __tests__
- ├── config
- │ └── routes.js
- ├── screens
- │ └── App
- │     ├── components
- │     │ ├── __tests__
- │     │ │ └── AppView.test.js
- │     │ └── AppView.js
 
... etc.
 
- ├── shared
- │ └── util
- │     ├── __tests__
- │     │ └── createStore.test.js
- │     └── createStore.js
- └── index.js


Por que "telas"?
A outra opção é "views", que se tornou muito parecida com "controller".O que isso significa?Tela me parece bastante intuitiva para significar "uma tela específica no aplicativo" e não algo que é compartilhado.Tem o benefício adicional de que ainda não existe um "MSC"; portanto, a palavra "tela" faz com que as pessoas perguntem "o que é uma tela?"em vez de assumir que eles sabem o que uma "visão" deve ser.


