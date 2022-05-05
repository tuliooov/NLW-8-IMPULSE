# (Feedback Widget) Next Level Week - Edição 8 - Impulse

Em programação não existe atalho... Mas o problema é que existe o contrário disso: Demorar muito mais tempo para aprender e dominar algo que não precisaria demorar tanto. Por isso, aqui nessa aula você vai aprender os pilares da nossa metodologia para entrarmos na parte prática e revelar o que vamos desenvolver juntos. Vamos dar início ao desenvolvimento da nossa aplicação pelo front-end com ReactJS. Você vai entender como utilizar o TailwindCSS, Headless UI, conceitos de acessibilidade, componentes, propriedades, estado e muito mais. O seu portfólio vai ganhar uma aplicação nova e de destaque.

![img](./README-ASSETS//NLW-return-%202560x1600.png)

## Material complementar:
https://efficient-sloth-d85.notion.site/Impulse-58f2daadb8e1433894420cbc57571087

## Extensões utilizadas
![img](./README-ASSETS//Captura%20de%20Tela%202022-05-02%20%C3%A0s%2020.39.55.png)
![img](./README-ASSETS/Captura%20de%20Tela%202022-05-02%20%C3%A0s%2020.40.18.png)
![img](./README-ASSETS/Captura%20de%20Tela%202022-05-02%20%C3%A0s%2020.40.30.png)
![img](./README-ASSETS/Captura%20de%20Tela%202022-05-02%20%C3%A0s%2020.41.07.png\)


## SSR ( Server Side Rendering )

SSR é a sigla para Server Side Rendering, ou Renderização do Lado do Servidor. O SSR vem para solucionar um pouco dos problemas das aplicações SPAs, tentando manter suas principais vantagens. O SSR inverte o processo de renderização, trazendo uma parte do esforço de renderização de aplicações SPA para o servidor, de maneira similar ao carregamento tradicional.

O SSR pode fornecer aos usuários um carregamento mais eficiente da aplicação, já que parte da renderização é feita no servidor. Além da possibilidade de melhoria da performance, o SSR ajuda a lidar com alguns problemas de SEO (como indexação), já que parte da aplicação ainda é carregada pelo servidor.

- SSR é uma boa opção quando…

* Ter boa indexação no Google é um requisito;
* Existir a necessidade da fluidez do SPA, porém, com um tempo de carga para o usuário mais eficiente;
* A aplicação possui um número mais extenso de páginas. Nesse cenário, a divisão do trabalho de renderização com o servidor pode vir a ser interessante.

## SPA

SPA é uma sigla para Single Page Application, ou Aplicação de Página Única. A utilização de SPAs traz uma melhor experiência do usuário através da sensação de navegação entre as páginas de maneira muito mais rápida. Apesar do nome, isso não quer dizer necessariamente que aplicações SPA terão apenas uma única página.

Aplicações SPA são sempre executadas do lado do cliente – no caso, o navegador. O conteúdo de uma aplicação SPA é carregado completamente logo na primeira requisição – incluindo templates e arquivos JavaScript.

Quando novas páginas precisam ser carregadas, não há a necessidade de uma nova requisição para o servidor: estas páginas são carregadas através de rotinas JavaScript, tirando a necessidade de requisições para o servidor para obtenção do novo conteúdo a ser renderizado: a partir da primeira carga da aplicação, toda a interação para carga de conteúdo passa a acontecer exclusivamente do lado do cliente através do JavaScript.

- SPA é uma boa opção caso…

* A página precise oferecer uma experiência de usuário mais rica e fluída;
* Existirão muitas interações na página com a renderização de conteúdos dinâmicos;
* A indexação no Google não seja prioridade.

------------------------------------------------------------

# WEB 

## Criação do projeto

Usamos o comando ```─ npm create vite@latest``` (https://vitejs.dev/guide/)

## CSS - Tailwindcss com PostCSS

Instalar o Tailwind CSS como um plugin PostCSS é a maneira mais simples de integrá-lo com ferramentas de construção como webpack, Rollup, Vite e Parcel. (https://tailwindcss.com/docs/installation/using-postcss)
``` npm install -D tailwindcss postcss autoprefixer ```
``` npx tailwindcss init ```

Um plug-in que fornece uma redefinição básica para estilos de formulário que facilitam a substituição de elementos de formulário com utilitários.
 ``` npm install -D @tailwindcss/forms ``` (https://github.com/tailwindlabs/tailwindcss-forms)

Adiciona utilitários de estilo para barras de rolagem no Firefox e navegadores baseados em webkit.
``` npm install --save-dev tailwind-scrollbar ``` (https://www.npmjs.com/package/tailwind-scrollbar)

## Icones - Phospor React

Phosphor é uma família de ícones flexível para interfaces, diagramas, apresentações —  o que for, na verdade. ``` npm install phosphor-react ``` (https://phosphoricons.com/)


## Acessibilidade - Headless UI

Componentes de interface do usuário totalmente sem estilo e totalmente acessíveis, projetados para se integrar perfeitamente ao Tailwind CSS.

```npm install @headlessui/react``` (https://headlessui.dev/react/popover)

## Prisma com SQL Lite

O Prisma ajuda os desenvolvedores de aplicativos a criar mais rapidamente e  cometer menos erros com um kit de ferramentas de banco de dados de código aberto para PostgreSQL, MySQL, SQL Server, SQLite, MongoDB e CockroachDB. (https://www.prisma.io/docs/concepts/database-connectors/sqlite)

``` npm i prisma -D ```
``` npx prisma init ```

### O que são Database Migrations?

Você conhece o conceito de Database Migrations (ou Schema Migrations)? Trata-se de técnicas e ferramentas que auxiliam no versionamento da base de dados durante o desenvolvimento, que normalmente evitam a escrita de scripts SQL e fazem as atualizações no banco por meio da própria linguagem de programação e frameworks que estejamos utilizando.

### Criando tabela

``` npx prisma migrate dev ``` dev or deploy

### Visualizando tabelas

``` npx prisma studio ```


## NODEMAILER

O Nodemailer é um módulo para aplicativos Node.js para permitir o envio de e-mail fácil como um bolo. O projeto começou em 2010, quando não havia uma opção sensata para enviar mensagens de e-mail, hoje é a solução que a maioria dos usuários do Node.js recorre por padrão. (https://nodemailer.com/about/)

### MailTrap

Serviço de sandbox de e-mail. Capture o tráfego SMTP de ambientes de preparação e desenvolvimento Automatize fluxos e cenários de teste com API flexível Analise o conteúdo de e-mail para pontuação de spam e valide HTML/CSS (https://mailtrap.io/inboxes/1727079/messages/2761371621)


## SOLID

1. Single Responsibility Principle
2. Open/closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

.....

1. Cada classe tem uma responsabilidade única;
2. As classes de aplicação devem ser abertas para extensão mas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ...
5. 



