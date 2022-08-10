/***
 *  law/organizer/directory
 * 
 */




/***
 *      Import T4 Utilities
 */
importClass(com.terminalfour.publish.utils.BrokerUtils);




/***
 *  declare and assign topic layout
 * 
 */
var fieldToBeEvaluated = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, '<t4 type="content" name="Department" output="normal" modifiers="striptags,htmlentities,js-var" />');
var optionToTestFor = "School of Law"; //edit this to change the option
var contentTypeLayout = 'output/career'; //edit this to change the Content Layout to use for output
var n = fieldToBeEvaluated.indexOf(optionToTestFor); /* determines starting character of string */


 
 
 
 
/***
 *      Extract values from T4 element tags
 *      and confirm valid existing content item field
 */
function getContentValues(tag) {
    try {
        let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim();
        return {
            isError: false,
            content: _tag == '' ? null : _tag
        }
    } catch (error) {
        return {
            isError: true,
            message: error.message
        }
    }
}


/***
 *  send correct layout to the document
 * 
 */
try {

    /* if content exists, it'll start at 0 or later, so process this */
    if ((n >= 0)) {
        var sw = new java.io.StringWriter();
        var t4w = new com.terminalfour.utils.T4StreamWriter(sw);
        new com.terminalfour.publish.ContentPublisher().write(t4w, dbStatement, publishCache, section, content, contentTypeLayout, isPreview);
        output = sw.toString();

        // write to page document
        document.write(output);
    }


} catch (err) {
    document.write(err.message);
}