import { utilService } from "../../../services/util.service.js";

export const mailService = {
    query,
    getMailById,
    deleteMail,
    ToggleStar
}

const gEmails = [
    {
        id: utilService.makeId(),
        from: 'Jonathan',
        subject: 'Miss you!',
        body: utilService.makeLorem(),
        isRead: false,
        sentAt: 155114120594,
        to: 'shon@simplify.com',
        isStarred: false,
        status: 'recieved'
    },
    {
        id: utilService.makeId(),
        from: 'Raz',
        subject: 'Hello!',
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: 'shon@simplify.com',
        isStarred: false,
        status: 'sent'
    },
    {
        id: utilService.makeId(),
        from: 'Dana',
        subject: 'Have you seen my post?',
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: 'shon@simplify.com',
        isStarred: false,
        status: 'recieved'
    }
]

function query(filterBy) {
    console.log(filterBy);
    if (filterBy) {
        let { txt } = filterBy
        txt.toUpperCase();
        const txtFilteredMails = gEmails.filter(mail => {
            return mail.subject.toLowerCase().includes(txt)
        })
        var mails = (txtFilteredMails) ? mails = txtFilteredMails : mails = gEmails;

        let mailsToShow;
        switch (filterBy.status) {
            case 'inbox':
                mailsToShow = mails.filter(mail => {

                    return mail.status === 'recieved'
                })
                return Promise.resolve(mailsToShow);

            case 'starred':
                mailsToShow = mails.filter(mail => {
                    return mail.isStarred;
                });
                return Promise.resolve(mailsToShow);

            case 'sent':
                mailsToShow = mails.filter(mail => {
                    return mail.status === 'sent';
                });
                return Promise.resolve(mailsToShow);
        }


    }
    // const inboxMails = gEmails.filter(mail => {
    //     return mail.status === 'recieved'
    // })

    return Promise.resolve(null);
}

function getMailById(mailId) {
    var mail = gEmails.find(function (mail) {
        return mail.id === mailId
    })
    return Promise.resolve(mail)
}

function deleteMail(mailId) {
    var mailIdx = gEmails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gEmails.splice(mailIdx, 1)
    return Promise.resolve()
}

function ToggleStar(mailId) {
    var mailIdx = gEmails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gEmails[mailIdx].isStarred = !gEmails[mailIdx].isStarred;
    return Promise.resolve()
}