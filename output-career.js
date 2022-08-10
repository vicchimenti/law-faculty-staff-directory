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
 *      @version 6.2
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
 *      Parse Department Field when multiple inputs exist
 */
function parseDepartment(dept, seperator) {

    let departmentArray = dept.split(seperator);
    let rawString = departmentArray[departmentArray.length - 1];

    return parsedDepartment = (departmentArray.length > 1) ?
        rawString.trim() :
        dept;
}




/***
 *      Clean Department Field
 */
function cleanDepartment(raw) {

    let dash = "-";

    let deptString = (raw.includes(dash)) ?
        parseDepartment(raw, dash) :
        raw;

    return '<p class="card-text mb-0 division">' + deptString + '</p>';
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
     *  Declare base formatting
     * 
     * */
    let hiddenFields = '';
    let openHiddenFields = '<div class="hiddenSearchText visually-hidden">';
    let closeHiddenFields = '</div>';
    let openCardBody = '<div class="card-body">';
    let closeCardBody = '</div>';
    let endingHTML = '</article>';




    /**
     * Define wrapper
     */
    let beginningHTML = (directoryBioDict.firstName.content && directoryBioDict.lastName.content) ?
        '<article class="StaffListBox card w-100 border-0" id="directory' + directoryBioDict.contentID.content + '" aria-label="' + directoryBioDict.firstName.content + ' ' + directoryBioDict.lastName.content + '">' :
        (directoryBioDict.contentName.content) ?
        '<article class="StaffListBox card w-100 border-0" id="directory' + directoryBioDict.contentID.content + '" aria-label="' + directoryBioDict.contentName.content + '">' :
        '<article class="StaffListBox card w-100 border-0 hidden visually-hidden">';




    /**
     * Parse for name
     */
    let cardHeader = (directoryBioDict.firstName.content && directoryBioDict.lastName.content) ?
        '<h3 class="card-header border-0">' + directoryBioDict.firstName.content + ' ' + directoryBioDict.lastName.content + '</h3>' :
        (directoryBioDict.contentName.content) ?
        '<h3 class="card-header border-0">' + directoryBioDict.contentName.content + '</h3>' :
        '<span class="card-header border-0 hidden visually-hidden">No valid name provided</span>';




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




    /**
     * Parse for title
     */
     let titleString = (directoryBioDict.title.content) ?
        '<p class="card-title mb-0 title">' + directoryBioDict.title.content + '</p>' :
        '<span class="card-title mb-0 title hidden visually-hidden">No valid title provided</span>';




    /**
     * Parse for department
     */
    let departmentString = (directoryBioDict.department.content) ?
        cleanDepartment(directoryBioDict.department.content) :
        '<span class="card-text mb-0 division hidden visually-hidden">No valid department entered</span>';




    /**
     * Parse for address
     */
    let streetAddressString = (directoryBioDict.streetAddress.content) ?
        '<p class="card-text mb-0 address">' + directoryBioDict.streetAddress.content + '</p>' :
        '<span class="card-text mb-0 address hidden visually-hidden">No valid address provided</span>';




    /**
     * Parse for phone
     */
    let phoneString = (directoryBioDict.phone.content && directoryBioDict.firstName.content) ?
        '<p class="card-text mb-0 phone"><a class="contactPhone" href="tel:' + directoryBioDict.phone.content + '" title="Call ' + directoryBioDict.firstName.content + '">' + directoryBioDict.phone.content + '</a></p>' :
        (directoryBioDict.phone.content && directoryBioDict.contentName.content) ?
        '<p class="card-text mb-0 phone"><a class="contactPhone" href="tel:' + directoryBioDict.phone.content + '" title="Call ' + directoryBioDict.contentName.content + '">' + directoryBioDict.phone.content + '</a></p>' :
        '<span class="card-text mb-0 phone hidden visually-hidden"></span>' ;




    /***
     *  write hidden search fields
     * 
     * */
    if (directoryBioDict.affiliation.content) {
        let affiliationHidden = '<span class="visually-hidden affiliation">' + directoryBioDict.affiliation.content + '</span>';
        hiddenFields += affiliationHidden;
    }




    /***
     *  write document once
     * 
     * */
    writeDocument (
        [
            beginningHTML,
            cardHeader,
            openCardBody,
            titleString,
            departmentString,
            streetAddressString,
            phoneString,
            emailAddressString,
            closeCardBody,
            openHiddenFields,
            hiddenFields,
            closeHiddenFields,
            endingHTML
        ]
    );




} catch (err) {
    document.write(err.message);
}