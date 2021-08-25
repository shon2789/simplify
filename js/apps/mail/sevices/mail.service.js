import { utilService } from "../../../services/util.service.js";

export const mailService = {
    query,
    getMailById,
    deleteMail
}

const gEmails = [
    {
        id: utilService.makeId(),
        from: 'Jonathan',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 155114120594,
        to: 'shon@simplify.com',
    },
    {
        id: utilService.makeId(),
        from: 'Raz',
        subject: 'Hello!',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'shon@simplify.com'
    }
]

function query(filterBy) {
    if (filterBy) {
        let { txt } = filterBy
        txt.toUpperCase();
        console.log(txt)
        const mailsToShow = gEmails.filter(mail => {
            mail.subject.toLowerCase();
            console.log(mail.subject.toLowerCase())
            return mail.subject.includes(txt)
        })
        return Promise.resolve(mailsToShow)
    }

    return Promise.resolve(gEmails)
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