// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// console.log(mockUpStrand())

const pAequorFactory = (num, arr) => {
  return {
    _specimenNum: num,
    _dna: arr,
    get specimenNum() {
      return this._specimenNum;
    },
    set specimenNum(newSpecimen) {
      this._specimenNum = newSpecimen;
    },
    get dna() {
      return this._dna
    },
    set dna(newDna) {
      this._dna = newDna;
    },
    mutate() {
      const newDna = this._dna;
      console.log(newDna[Math.floor(Math.random() * 4)])
      return newDna[Math.floor(Math.random() * 4)] 
    },
    compareDNA(pAequor) {
      const comparison = pAequor.filter(stringInCommon => {
        return returnRandBase().includes(stringInCommon);
      });
      const scurrentSpecimen = this._specimenNum;
      this._specimenNum = comparison.length;

      const comparisonPercentage = (comparison.length / 4) * 100;
      return `Specimen #${scurrentSpecimen} and Specimen #${this._specimenNum} have ${comparisonPercentage}% DNA in common`;
    },
    willLikelySurvive() {
      console.log(this._dna)
      const dnaCString = this._dna.filter(stringSurvival => stringSurvival === 'C').length;
      const dnaGString = this._dna.filter(stringSurvival => stringSurvival === 'G').length;
      console.log(dnaGString, dnaCString);
      const survivalCString = Math.round((dnaCString / this._dna.length) * 100);
      const survivalGString = Math.round((dnaGString / this._dna.length) * 100);
      console.log(
        survivalCString,
        survivalGString
      )
      if (survivalCString >= 40 || survivalGString >= 40) {
        return true
      }
      return false;
    }

  }
}
const comparedSpecimen = ['T', 'A', 'G', 'C']
const newDnaDetails = pAequorFactory(4, mockUpStrand())
const finalDnaDetails = `
Details:
Speciment with a chance of mutation: <strong>${newDnaDetails.mutate()}</strong><br>
Comparison between specimens: <strong>${newDnaDetails.compareDNA(comparedSpecimen)}</strong><br>
Chance of survival? <strong>${newDnaDetails.willLikelySurvive()}</strong>`
console.log(finalDnaDetails)

const specimenResDet = document.querySelector('.res-specimen');
specimenResDet.innerHTML = finalDnaDetails;
