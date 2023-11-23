class Emv {
  public pixKey: string = "";
  public name: string = "";
  public city: string = "";
  public id: string = "";
  public price: number = 0;

  private formatPrice(price: number | string): string {
    price = String(price);

    if (!Number(price.replace(/\D/g, ""))) return "";
    if (price.charAt(price.length - 2) === ".") return price;
    return String(Number(price).toFixed(2));
  }

  private formatNum(num: number): number | string {
    return num < 10 ? `0${num}` : num;
  }

  private formatText(value: string): string {
    return value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "");
  }

  private crc16(data: string): string {
    const buffer = [];
    for (let i = 0; i < data.length; i++) {
      buffer.push(data.charCodeAt(i));
    }

    const polynomial = 0x1021;
    let crc = 0xffff;

    for (let i = 0; i < buffer.length; i++) {
      crc ^= buffer[i] << 8;

      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ polynomial;
        } else {
          crc <<= 1;
        }
      }
    }

    crc &= 0xffff;
    return crc.toString(16).toUpperCase();
  }

  public generate(): string {
    if (!this.pixKey) {
      throw new Error("The pixKey is required!");
    }

    const centralBank = "0014BR.GOV.BCB.PIX";
    const receiver = `01${this.formatNum(this.pixKey.length)}${this.pixKey}`;
    const merchantAccountSize = receiver.length + centralBank.length;
    const pixKeySize = this.formatNum(this.pixKey.length);
    const nameKeySize = this.formatNum(this.name.length);
    const citySize = this.formatNum(this.city.length);
    const id = this.id || "***";
    const addFieldSize = this.formatNum(4 + id.length);
    const idSize = this.formatNum(id.length);
    const price = this.formatPrice(this.price);

    const pixGenerated = `00020126${merchantAccountSize}${centralBank}01${pixKeySize}${
      this.pixKey
    }520400005303986${price}5802BR59${nameKeySize}${this.formatText(
      this.name
    )}60${citySize}${this.formatText(
      this.city
    )}62${addFieldSize}05${idSize}${id}6304`;
    const crc = this.crc16(pixGenerated);

    return `${pixGenerated}${crc}`;
  }
}

export const emv = new Emv();
