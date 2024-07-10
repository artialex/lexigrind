const n = new Intl.NumberFormat('en');

export class Numbers {
  static format(number: number) {
    if (isNaN(number)) return;

    return n.format(number);
  }
}
