# Lexigrind

An application in the style of [LWT](https://learning-with-texts.sourceforge.io/) for grinding English vocabulary.

> #### ⚠️ Warning
>
> This app is in a _Proof of Concept_ stage. All the data is saved inside the browser,
> in IndexedDB. It is not very stable in terms of persistence (sometimes data is lost, it seems like it depends
> on browser updates), so if you use it, it is advised to export your _Sources_ and _Terms_
> after each session to be able to restore you data after a loss. A more robust approach would be
> to make it an Electron-based app, with a proper, proven database like SQLite or MongoDB,
> which I intend to do in the future.

### Features

- Words
  - Marking words with levels from 0 to 5
  - Adding personal notes to words
- Various stats of one's vocabulary
  - Source/Fragment stats
  - Calculated percentages of source/fragment
  - Calculated paragraph levels

### Screenshots

![](docs/image-1.png)
![](docs/image-2.png)
![](docs/image-3.png)
