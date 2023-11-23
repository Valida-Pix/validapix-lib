# Validapix - Biblioteca

Essa é a biblioteca oficial do <a href="https://validapix.tech" target="_blank">ValidaPix</a>. Aqui você encontra diversas ferramentas que pode te ajudar no dia adia de desenvolvimento envolvendo Pix e muito mais!

## Gerador de EMV

Para gerar uma string EMV você primeiramente precisa instalar o nosso pacote.

<br />

<strong>NPM:</strong>

```
npm i validapix-test
```

<strong>YARN:</strong>
Em breve

<br />

Importe nosso pacote dentro da sua aplicação:

```Typescript
import { emv } from "validapix-test";

emv.pixKey = "exemplo@gmail.com";
emv.price = 150.99;
emv.generate(); // retorna o emv
```
