/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file law-organizer-directory.js
 *      @see Seattle University School of Law Faculty Profile Type
 *      law/organizer/directory/
 *
 *      This content layout will be the organizer layout and will link to the
 *      full text layout to reveal the full article.
 *
 *      Document will write once when the page loads
 *
 *      @version 4.2
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
     var emailAddressString = '<p class="card-link email"><a href="mailto:' + emailAddress + '?subject=From your Directory Profile" title="Email ' + firstName + ' ' + lastName + '">Contact ' + firstName + '</a></p>';
     var titleString = '<p class="card-title title">' + title + '</p>';
     var departmentString = '<p class="card-text division">' + department + '</p>';
     var streetAddressString = '<p class="card-text address">' + streetAddress + '</p>';
     var phoneString = '<p class="card-text phone">' + phone + '</p>';
     var openCardBody = '<div class="card-body">';
     var closeCardBody = '</div>';
     var cardHeader = '<h4 class="card-header">' + firstName + ' ' + lastName + '</h4>';
     var beginningHTML = '<div class="StaffListBox contentItem card w-100 border-0" aria-label="' + firstName + ' ' + lastName + '" id="id' + contentID + '" data-position-default="Main" data-position-selected="Main">';
     var endingHTML = '</div>';
     var horizontalRule = '<hr class="lawProfileBorderRule" />'



    // var primaryImageString = '<img src="' + primaryImage + '" class="card-img rounded-circle" alt="' + firstName + ' ' + lastName + ', ' + primaryTitle + '">';
    // var closeCardTitle = '</h4>';
    // var openBodyWrapper = '<div class="col-md-8 d-flex align-items-center">';
    // var closeBodyWrapper = '</div>';
    // var openImageWrapper = '<div class="col-md-4">';
    // var closeImageWrapper = '</div>';
    // var openRow = '<div class="row g-0">';
    // var closeRow = '</div>';
    // var anchorWrap = '<div class="visually-hidden">' + anchorTag + '</div>';







    /***
     *  determine if the article contains full text content
     * 
     * */
    // if (biography != "") {
    //     cardTitle = '<h3 class="card-title d-flex justify-content-center justify-content-md-start text-center text-md-start"><a href="' + fullTextLink + '" title="' + firstName + ' ' + lastName + ', ' + primaryTitle + '">' + firstName + ' ' + lastName + '</a></h3>';
    // }




    /***
     *  write hidden search fields
     * 
     * */
    if (affiliation != "") {
        var affiliationHidden = '<span class="visually-hidden affiliation">' + affiliation + '</span>';
        hiddenFields += affiliationHidden;
    }
    // if (education != "") {
    //     var educationHidden = '<span class="visually-hidden education">' + education + '</span>';
    //     hiddenFields += educationHidden;
    // }
    // if (expertise != "") {
    //     var expertiseHidden = '<span class="visually-hidden expertise">' + expertise + '</span>';
    //     hiddenFields += expertiseHidden;
    // }
    // if (affiliations != "") {
    //     var affiliationsHidden = '<span class="visually-hidden affiliations">' + affiliations + '</span>';
    //     hiddenFields += affiliationsHidden;
    // }
    // if (courses != "") {
    //     var coursesHidden = '<span class="visually-hidden courses">' + courses + '</span>';
    //     hiddenFields += coursesHidden;
    // }
    // if (biography != "") {
    //     var biographyHidden = '<span class="visually-hidden biography">' + biography + '</span>';
    //     hiddenFields += biographyHidden;
    // }
    // if (publications != "") {
    //     var publicationsHidden = '<span class="visually-hidden publications">' + publications + '</span>';
    //     hiddenFields += publicationsHidden;
    // }
    // if (activity != "") {
    //     var activityHidden = '<span class="visually-hidden activity">' + activity + '</span>';
    //     hiddenFields += activityHidden;
    // }
    // if (facultyStatus != "") {
    //     var facultyStatusyHidden = '<span class="visually-hidden facultyStatus">' + facultyStatus + '</span>';
    //     hiddenFields += facultyStatusyHidden;
    // }



    
    /***
     *  Write the document once
     * 
     * */
    document.write(beginningHTML);
    document.write(anchorWrap);
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
    document.write(horizontalRule);
    document.write(endingHTML);


    // document.write(openRow);
    // document.write(openImageWrapper);
    // document.write(primaryImageString);
    // document.write(closeImageWrapper);
    // document.write(primaryTitleString);
    // document.write(emailAddressString);
    // document.write(closeBodyWrapper);
    // document.write(closeRow);






} catch (err) {
    document.write(err.message);
}
