/**
 * This Class Contains Matcher Functionality Tool That Work To match to text and return the simalrity between it.
 * @author AMMAR KHALIFA
 * @version 1.0.0
 * @see matcher
 * @license MIT : this function cannot used for any commercial work without back to reference 
 * @license GNU : this function can used for commercial work with refeer to reference.
 */

M = Matcher = (function () {

    function Matcher() {
    }

    Matcher.constructor = Matcher;
    Matcher.__prototype = Matcher.prototype;

    /**
     * 
     * @param {*} textForMatching text want matching
     * @param {*} sourceMatchWith source text that want match with it.
     */
    Matcher.prototype.checkMatching = function (textForMatching = "", sourceMatchWith = '') {
        let forMatchingArray = textForMatching.split(' ');
    }



    return new Matcher();

})();