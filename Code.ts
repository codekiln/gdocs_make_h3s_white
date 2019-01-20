function onOpen() {
  DocumentApp.getUi().createMenu('My Scripts')
    .addItem("Make H3s white", 'makeH3sWhite')
    .addToUi();
}

/**
 * When using a dark background color for h3s, the default 
 * dark link text doesn't show up well. This changes the text to white, 
 * even for the links in h3s.
 */
function makeH3sWhite() {
  const doc = DocumentApp.getActiveDocument();
  const paras = doc.getBody().getParagraphs();
  const h3s = paras.filter(p => p.getHeading() == DocumentApp.ParagraphHeading.HEADING3);

  h3s.forEach(h3 => h3.setAttributes({
    [DocumentApp.Attribute.FOREGROUND_COLOR]: '#FFFFFF'
  }));
}