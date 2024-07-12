const maxDaysInMonth = (mois) => {
  const joursDansMois = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  }

  return joursDansMois[mois];
}

function isValidDate(date) {
  const dateFormatTab = date.split("/");
  const jour = dateFormatTab[0];
  const mois = dateFormatTab[1];
  const annee = dateFormatTab[2];

  // if ((annee > 999 && annee <= 9999) 
  //     && (mois >= 1 && mois <= 12) 
  //     && (jour >= 1 && jour <= maxDaysInMonth(mois))) {
  //       return true;
  // }

  // return false;

  if (annee > 999 && annee <= 9999) {
    // annee valide
    if (mois >= 1 && mois <= 12) {
      // mois valide
      if (jour >= 1 && jour <= maxDaysInMonth(parseInt(mois))) {
        return true;
      }
    }
  }
  return false;
}

console.log('result:', isValidDate("30/06/2024"));
// isValidDate("03/14/2001");



// un bon debut de l'etape 2
const maDate = "30/02/2011";
const maDateSansSlash = maDate.replaceAll("/", "");
const maDateReverse = maDateSansSlash.split('').reverse().join('');

console.log('maDate:', maDate);
console.log('maDateSansSlash:', maDateSansSlash, typeof maDateSansSlash);
console.log('maDateReverse:', maDateReverse);
