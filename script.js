document.querySelector('.first-button').addEventListener('click', function () {
    document.querySelector('.animated-icon1').classList.toggle('open');
    document.querySelector('#navbarToggleExternalContent9').classList.toggle('show');
  });
  
 // Funkce pro prohledání textového obsahu elementů, nalezení a nahrazení teček
function findAndReplaceDots() {
  let dots = [];

  // Funkce pro rekurzivní prohledání elementů
  function searchElement(element) {
      // Projít všechny děti daného elementu
      element.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
              // Pokud je to textový uzel, prohledat ho na tečky
              let text = node.nodeValue;

              // Odstranit mezery kolem teček
              let trimmedText = text.replace(/\s*\.\s*/g, '. ');

              // Zjistit, zda došlo ke změnám
              if (text !== trimmedText) {
                  // Uložit původní text a indexy teček
                  let matches = [...text.matchAll(/\s*\.\s*/g)];
                  matches.forEach(match => {
                      dots.push({
                          originalText: text,
                          trimmedText: trimmedText,
                          index: match.index
                      });
                  });

                  // Aktualizovat text uzlu
                  node.nodeValue = trimmedText;
              }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
              // Pokud je to element, rekurzivně prohledat jeho děti
              searchElement(node);
          }
      });
  }

  // Začít hledání od těla dokumentu
  searchElement(document.body);

  return dots;
}

// Zavolej funkci a ulož výsledky
let foundDots = findAndReplaceDots();



