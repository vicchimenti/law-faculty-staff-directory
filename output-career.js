/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file output-career.js
 *      @see Seattle University School of Law Directory Profile Type
 *      output/career
 *
 *      This content layout will be the organizer layout and will link to the
 *      full text layout to reveal the full article.
 *
 *      Document will write once when the page loads
 *
 *      @version 5.1
 */




try {

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
    var anchorTag = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='meta' meta='html_anchor' />");
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
    var phoneString = '<p class="card-text mb-0 phone">' + phone + '</p>';
    var openCardBody = '<div class="card-body">';
    var closeCardBody = '</div>';
    var cardHeader = '<h4 class="card-header border-0">' + firstName + ' ' + lastName + '</h4>';
    var beginningHTML = '<article class="StaffListBox contentItem card w-100 border-0" id="directory' + contentID + '" aria-label="' + firstName + ' ' + lastName + '">';
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
    document.write(anchorTag);
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




} catch (err) {
    document.write(err.message);
}