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
 *      @version 6.1
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
    let directoryBioDict = {

        contentName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
        affiliation: getContentValues('<t4 type="content" name="Affiliation" output="normal" modifiers="striptags,htmlentities" />'),
        department: getContentValues('<t4 type="content" name="Department" output="normal" modifiers="striptags,htmlentities" />'),
        emailAddress: getContentValues('<t4 type="content" name="Email" output="normal" modifiers="striptags,htmlentities,encode_emails" />'),
        firstName: getContentValues('<t4 type="content" name="FirstName" output="normal" modifiers="striptags,htmlentities" />'),
        lastName: getContentValues('<t4 type="content" name="LastName" output="normal" modifiers="striptags,htmlentities" />'),
        title: getContentValues('<t4 type="content" name="Title" output="normal" modifiers="striptags,htmlentities" />'),
        phone: getContentValues('<t4 type="content" name="Phone" output="normal" modifiers="striptags,htmlentities" />'),
        streetAddress: getContentValues('<t4 type="content" name="Street Address" output="normal" modifiers="striptags,htmlentities" />'),
        contentID: getContentValues('<t4 type="meta" meta="content_id" />')
        
    };

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    let contentName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' modifiers='striptags,htmlentities' />");
    let affiliation = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Affiliation' output='normal' modifiers='striptags,htmlentities />");
    let department = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Department' output='normal' modifiers='striptags,htmlentities />");
    let emailAddress = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Email' output='normal' modifiers='striptags,htmlentities,encode_emails' />");
    let firstName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='FirstName' output='normal' modifiers='striptags,htmlentities' />");
    let lastName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='LastName' output='normal' modifiers='striptags,htmlentities' />");
    let title = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Title' output='normal' modifiers='striptags,htmlentities />");
    let phone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Phone' output='normal' modifiers='striptags,htmlentities />");
    let streetAddress = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Street Address' output='normal' modifiers='striptags,htmlentities />");
    let htmlOutput = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='HTMLOutput' output='normal' modifiers='striptags,htmlentities />");
    let hiddenOption = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Hidden' output='normal' />");
    let contentID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='content_id' />");




    /***
     *  Declare/Assign local variables with base formatting
     * 
     * */
    let hiddenFields = '';
    let openHiddenFields = '<div class="hiddenSearchText visually-hidden">';
    let closeHiddenFields = '</div>';

    let openCardBody = '<div class="card-body">';
    let closeCardBody = '</div>';
    let endingHTML = '</article>';


    let titleString = '<p class="card-title mb-0 title">' + title + '</p>';
    let departmentString = '<p class="card-text mb-0 division">' + department + '</p>';
    let streetAddressString = '<p class="card-text mb-0 address">' + streetAddress + '</p>';
    let phoneString = '<p class="card-text mb-0 phone"><a class="contactPhone" href="tel:' + phone + '" title="Call ' + firstName + '">' + phone + '</a></p>';

    let cardHeader = '<h3 class="card-header border-0">' + firstName + ' ' + lastName + '</h3>';
    let beginningHTML = '<article class="StaffListBox card w-100 border-0" id="directory' + contentID + '" aria-label="' + firstName + ' ' + lastName + '">';





    /**
     * Parse for email address
     */
    let emailAddressString =
        (directoryBioDict.emailAddress.content && directoryBioDict.firstName.content && directoryBioDict.lastName.content) ?
        '<p class="card-link mb-0 email"><a href="mailto:' + directoryBioDict.emailAddress.content + '?subject=From your Directory Profile" title="Email ' + directoryBioDict.firstName.content + ' ' + directoryBioDict.lastName.content + '">Contact ' + directoryBioDict.firstName.content + '</a></p>' :
        (directoryBioDict.emailAddress.content && directoryBioDict.firstName.content) ?
        '<p class="card-link mb-0 email"><a href="mailto:' + directoryBioDict.emailAddress.content + '?subject=From your Directory Profile" title="Email ' + directoryBioDict.firstName.content + '">Contact ' + directoryBioDict.firstName.content + '</a></p>' :
        (directoryBioDict.emailAddress.content && directoryBioDict.contentName.content) ?
        '<p class="card-link mb-0 email"><a href="mailto:' + directoryBioDict.emailAddress.content + '?subject=From your Directory Profile" title="Email ' + directoryBioDict.contentName.content + '">Contact ' + directoryBioDict.fircontentNamestName.content + '</a></p>' :
        '<span class="card-link mb-0 email hidden visually-hidden">No valid email information provided</span>';




    /***
     *  write hidden search fields
     * 
     * */
    if (affiliation != "") {
        let affiliationHidden = '<span class="visually-hidden affiliation">' + affiliation + '</span>';
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