# Validapix - Biblioteca

Essa é a biblioteca oficial do <a href="https://validapix.tech" target="_blank">ValidaPix</a>. Aqui você encontra diversas ferramentas que pode te ajudar no dia a dia de desenvolvimento envolvendo Pix e muito mais!

## Gerador de pix

Se você precisa gerar um pix copia e cola, esse é o modulo correto.

<br />

### Instalação

<strong>NPM:</strong>

```
npm i validapix
```

<strong>YARN:</strong>

```
yarn add validapix
```

<strong>PNPM:</strong>

```
pnpm add validapix
```

<br />

### Como usar

```Typescript
import { emv } from "validapix";

emv.pixKey = "exemplo@exemplo.com";
emv.price = 150.99;
emv.generate(); // retorna o famoso pix copia e cola (emv)
```
