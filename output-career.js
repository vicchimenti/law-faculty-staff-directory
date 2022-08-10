/***
 *      @author Victor Chimenti, MSCS
 *      @see Seattle University School of Law Directory Profile Type
 *      @file output-career.js
 *          Law - Directory Profile for Faculty-Staff
 *          ID: 5548
 *          output/career
 *
 *      Document will write once when the page loads
 *
 *      @version 6.0
 */




/***
 *      Import T4 Utilities
 */
// importClass(com.terminalfour.media.IMediaManager);
// importClass(com.terminalfour.spring.ApplicationContextProvider);
importClass(com.terminalfour.publish.utils.BrokerUtils);
// importClass(com.terminalfour.media.utils.ImageInfo);




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
 *      Write the document
 */
function writeDocument(array) {

    for (let i = 0; i < array.length; i++) {

        document.write(array[i]);
    }
}








    /***
     *  Main
     */
    try {


        /***
         *      Dictionary of content
         * */
        let departmentBioDict = {

            contentName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
            fullName: getContentValues('<t4 type="content" name="Name of Faculty or Staff Member" output="normal" modifiers="striptags,htmlentities" />'),
            lastName: getContentValues('<t4 type="content" name="Last Name" output="normal" modifiers="striptags,htmlentities" />'),
            firstName: getContentValues('<t4 type="content" name="First Name" output="normal" modifiers="striptags,htmlentities" />'),
            pronouns: getContentValues('<t4 type="content" name="Pronouns" output="normal" modifiers="striptags,htmlentities" />'),
            positionTitle: getContentValues('<t4 type="content" name="Position Title(s)" output="normal" modifiers="striptags,htmlentities" />'),
            college: getContentValues('<t4 type="content" name="College" output="normal" modifiers="striptags,htmlentities" />'),
            description: getContentValues('<t4 type="content" name="Description" output="normal" modifiers="striptags,htmlentities" />'),
            officePhone: getContentValues('<t4 type="content" name="Phone" output="normal" modifiers="striptags,htmlentities" />'),
            emailAddress: getContentValues('<t4 type="content" name="Email Address" output="normal" modifiers="striptags,htmlentities,encode_emails" />'),
            bldgRoom: getContentValues('<t4 type="content" name="Building/Room Number" output="normal" modifiers="striptags,htmlentities" />'),
            departments: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
            primaryImagePath: getContentValues('<t4 type="content" name="Photo" output="normal" formatter="path/*" />'),
            fullTextLink: getContentValues('<t4 type="content" name="Name" output="fulltext" use-element="true" filename-element="Name" modifiers="striptags,htmlentities" />'),
            contentId: getContentValues('<t4 type="meta" meta="content_id" />')

        };




/***
 *  Main
 */
try {

    /***
     *      Dictionary of content
     * */
    let directoryBioDict = {

        contentName: getContentValues
        
    }

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var contentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    var affiliation = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Affiliation' output='normal' modifiers='striptags,htmlentities />");
    var department = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Department' output='normal' modifiers='striptags,htmlentities />");
    var emailAddress = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Email' output='normal' modifiers='striptags,htmlentities,encode_emails' />");
    var firstName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='FirstName' output='normal' modifiers='striptags,htmlentities' />");
    var lastName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='LastName' output='normal' modifiers='striptags,htmlentities' />");
    var title = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities />");
    var phone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Phone' output='normal' modifiers='striptags,htmlentities />");
    var streetAddress = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Street Address' output='normal' modifiers='striptags,htmlentities />");
    var htmlOutput = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='HTMLOutput' output='normal' modifiers='striptags,htmlentities />");
    var hiddenOption = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Hidden' output='normal' />");
    var contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var hiddenFields = '';
    var openHiddenFields = '<div class="hiddenSearchText visually-hidden">';
    var closeHiddenFields = '</div>';
    var emailAddressString = '<p class="card-link mb-0 email"><a href="mailto:' + emailAddress + '?subject=From your Directory Profile" title="Email ' + firstName + ' ' + lastName + '">Contact ' + firstName + '</a></p>';
    var titleString = '<p class="card-title mb-0 title">' + title + '</p>';
    var departmentString = '<p class="card-text mb-0 division">' + department + '</p>';
    var streetAddressString = '<p class="card-text mb-0 address">' + streetAddress + '</p>';
    var phoneString = '<p class="card-text mb-0 phone"><a class="contactPhone" href="tel:' + phone + '" title="Call ' + firstName + '">' + phone + '</a></p>';
    var openCardBody = '<div class="card-body">';
    var closeCardBody = '</div>';
    var cardHeader = '<h3 class="card-header border-0">' + firstName + ' ' + lastName + '</h3>';
    var beginningHTML = '<article class="StaffListBox card w-100 border-0" id="directory' + contentID + '" aria-label="' + firstName + ' ' + lastName + '">';
    var endingHTML = '</article>';




    /***
     *  write hidden search fields
     * 
     * */
    if (affiliation != "") {
        var affiliationHidden = '<span class="visually-hidden affiliation">' + affiliation + '</span>';
        hiddenFields += affiliationHidden;
    }




    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(cardHeader);
    document.write(openCardBody);
    document.write(titleString);
    document.write(departmentString);
    document.write(streetAddressString);
    document.write(phoneString);
    document.write(emailAddressString);
    document.write(closeCardBody);
    document.write(openHiddenFields);
    document.write(hiddenFields);
    document.write(closeHiddenFields);
    document.write(endingHTML);





    /***
     *  write document once
     * 
     * */
    writeDocument (
        [
            beginningHTML,
            openRow,
            openImageWrapper,
            imageString,
            closeImageWrapper,
            openBodyWrapper,
            openBody,
            titleLink,
            titleString,
            subtitleString,
            summaryBioString,
            closeBody,
            closeBodyWrapper,
            closeRow,
            endingHTML
        ]
    );





} catch (err) {
    document.write(err.message);
}