/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. At a high level, this code replaces
 * the substring "cal" with the string "butt" on web pages.
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

var elements = document.getElementsByTagName('*');

//***Insert whatever words you want highlighted on the page here!***
let keywordsString = "AI, AGI, ChatGPT, Algorithm, Chatbot, Cognitive Science, Machine Learning, ML, Deep Learning" +
                     "Classification, NLP, Natural Language Processing, Neural Network, supervised, unsupervised";

const keywords = keywordsString.split(",");

var keyword;

for (var h = 0; h < keywords.length; h++) {
    keyword = keywords[h];
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var regexp = new RegExp('\\b' + keyword + '\\b', "gi");
                var replaceKeyword = keyword.toUpperCase();
                if (text.match(regexp)) {
                    var replacedText = text.replace(regexp, '\u2605' + replaceKeyword + '\u2605');
                    replacedText = '\u26A1' + replacedText;
                    if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                    }
                }

            }
        }
    }
}