/**
 * rounds numbers to the specified decimal place 
 * @param {number} whichNumber 
 * @param {number} numberOfDigits 
 * @returns {number}
 */
function roundNumber( whichNumber, numberOfDigits )
{
    var faktor, rounded;
    faktor = Math.pow( 10, numberOfDigits );
    rounded = Math.round( whichNumber * faktor ) / faktor;
    return rounded;
}

/**
 * generates whole random number (inclusive from/to)
 * @param {number} from 
 * @param {number} bis 
 * @returns {number}
 */
 
function randomNumber( from, to )
{
    var numberq;
    numberq = Math.floor( Math.random() * ( to-from+1 ) )+from;
    return numberq;
}
