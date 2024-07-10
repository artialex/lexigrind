export class Files {
  static upload(file: File, cb: (result?: string) => void) {
    const reader = new FileReader();

    reader.onload = (e) => {
      cb(e.target?.result as string);
    };

    reader.readAsText(file);
  }

  static download(text: string, name: string) {
    const element = document.createElement('a');

    element.setAttribute('href', 'data:application/json:charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', name);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}
