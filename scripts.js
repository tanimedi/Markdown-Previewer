marked.setOptions({
  breaks: true,

});


function getPreview() {
  document.getElementById("preview").innerHTML = marked(
    document.getElementById("editor").value
  );
}

window.onload = function () {
  document.getElementById(
    "editor"
  ).value = `# Bacon ipsum dolor amet!

  ## Incididunt turkey culpa
  ### Lorem shank laborum

  Amet rump labore , \`<div></div>\`, chicken deserunt cow eu.

\`\`\`
//  ut andouille sed ipsum:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


  doner sausage prosciutto  **buffalo**!
  Oh _ribs_.
  Oh... round eu esse... **_jerky!_**
  drumstick tail lorem  ~~pork belly~~.

  There's also [links](https://www.freecodecamp.org), and
  >xcepteur est hamburger!

 Biltong labore consequat ut:

  Porchetta | Fatback | Sirloin?
  ------------ | ------------- | -------------
  T-bone ex non | meatball excepteur |  nostrud venison....
  And hare. | velit pig. | officia boudin leberkas.

  - Consequat velit elit cupim s.
    -  Swine chicken esse.
       - Velit eu venison ut.
          - Ducken meatball flanks.


  1. Ex strip steak ullamco id.
  1. deserunt corned beef tri-tip doner
  1. Gobble Gobble Gobble Gobble Gobble Gobble:

  ![picture](https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/atom_page_thumbnail/public/thumbnails/image/male%20turkey%20strut%20usfws_0.jpg)
  `;

  let textDefault = document.getElementById("editor").value;
  document.getElementById("preview").innerHTML = marked(textDefault);
};
