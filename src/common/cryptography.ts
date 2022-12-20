import crypto from "crypto";

export class Cryptography {
  private algorithm: string;
  private secretKey: string;

  constructor() {
      this.algorithm = process.env.NEXT_PUBLIC_CRYPTO_ALG_SECRET || "alg_secret";
      this.secretKey = process.env.NEXT_PUBLIC_CRYPTO_SECRET_KEY || "secret_key";
  }

  encrypt(text: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(this.algorithm, this.secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return `${iv.toString("hex")}*${encrypted.toString("hex")}`;
}

  decrypt(hash: string) {
      const iv = hash.split("*")[0];
      const content = hash.split("*")[1];
      const decipher = crypto.createDecipheriv(this.algorithm, this.secretKey, Buffer.from(iv, "hex"));
      const decrpyted = Buffer.concat([decipher.update(Buffer.from(content, "hex")), decipher.final()]);
      return decrpyted.toString();
  }

  async compare(
      hash: string,
      descrypted_to_compare: string
  ) {
      const descrypted = this.decrypt(hash);
      if (descrypted_to_compare == descrypted) {
          return true;
      } else {
          return false;
      }
  }
}