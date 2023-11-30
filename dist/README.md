# Validapix - Biblioteca

Essa é a biblioteca oficial do <a href="https://validapix.tech" target="_blank">ValidaPix</a>. Aqui você encontra diversas ferramentas que pode te ajudar no dia adia de desenvolvimento envolvendo Pix e muito mais!

## Gerador de pix

Para gerar um pix (emv) você primeiramente precisa instalar o nosso pacote.

<br />

<strong>NPM:</strong>

```
npm i validapix
```

<strong>PNPM:</strong>

```
pnpm add validapix
```

<br />

Importe nosso pacote dentro da sua aplicação:

```Typescript
import { emv } from "validapix";

emv.pixKey = "exemplo@exemplo.com";
emv.price = 150.99;
emv.generate(); // retorna o famoso pix copia e cola (emv)
```
