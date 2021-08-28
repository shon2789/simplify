import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    getMailById,
    deleteMail,
    ToggleStar,
    sendMail,
    onReadMail,
    getAllUnreadMails,
}
const KEY = "mailsDB"
let gEmails = [
    {
        id: utilService.makeId(),
        from: "Jonathan",
        subject: "Auto reply!",
        body: `“Thank you for your email! I am out of the office until 29/08/2021 . I will allow each sender one email. If you send me multiple emails, I will randomly delete your emails until it is pared down to one. Alternatively, you may contact Raz , who does not have a one-email policy for their inbox. 

        Please note that you already sent me one email.
        
        Sincerely, 
        
        Jonathan” `,
        isRead: false,
        sentAt: 155114120594,
        to: "shon@simplify.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Hello!",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "Raz",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "Dana",
        subject: "Remember this?",
        body: `In my junior year of high school, this guy asked me on a date. He rented a Redbox movie and made a pizza. We were watching the movie and the oven beeped so the pizza was done. He looked me dead in the eye and said, “This is the worst part.” I then watched this boy open the oven and pull the pizza out with his bare hands, rack and all, screaming at the top of his lungs. We never had a second date.`,
        isRead: false,
        sentAt: 1551133930594,
        to: "shon@simplify.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "Yohanan",
        subject: "Did you hear the news?!",
        body: `Hi [Name]

        I hope you’re having a wonderful day!
        I am emailing you today to let you know we have opened doors to our iOS app development team.
        If you have any questions about the position, please respond to this email or use the live chat on the product page. Our staff is waiting to respond to you.
        Make sure you try it before contacting us.
        
        Thank you,
        
        Yohanan`,
        isRead: true,
        sentAt: 1551133930594,
        to: "shon@simplify.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "Yuval",
        subject: "Check it out",
        body: `Hi Shon,

        I just read your post 'How to find a first job'. It’s both well written and useful. I especially like how you present the information.
        
        I am emailing you today to let you know I have written the post that describes my current position.
        
        I think you will find it useful, as it is relevant to your post on "How to find a first job" . Could you take a quick peek at it and let me know what you think?
        
        Enjoy!
        
        Yuval`,
        isRead: false,
        sentAt: 1551133930594,
        to: "shon@simplify.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "Farfetch",
        subject: "Your Order has been shipped",
        body: utilService.makeLorem(),
        isRead: false,
        sentAt: 1551133930594,
        to: "shon@simplify.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Please hire me!",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "stevejobs@apple.com",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "I want free money",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "bank@leumi.co.il",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Let's play",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "Jonathan@Simplify.com",
        isStarred: false,
        status: "sent",
    },
]

_createMails()

function _createMails() {
    let mails = storageService.loadFromStorage(KEY)
    if (!mails || !mails.length) {
        mails = gEmails
    }
    gEmails = mails
    _saveNotesToStorage()
}

function query(filterBy) {
    if (filterBy) {
        let { txt } = filterBy
        txt.toUpperCase()
        const txtFilteredMails = gEmails.filter((mail) => {
            return mail.subject.toLowerCase().includes(txt) || mail.body.toLowerCase().includes(txt) || mail.from.toLowerCase().includes(txt)
        })
        var mails = txtFilteredMails
            ? (mails = txtFilteredMails)
            : (mails = gEmails)

        let mailsToShow
        switch (filterBy.status) {
            case "inbox":
                mailsToShow = mails.filter((mail) => {
                    return mail.status === "inbox"
                })
                return Promise.resolve(mailsToShow)

            case "starred":
                mailsToShow = mails.filter((mail) => {
                    return mail.isStarred
                })
                return Promise.resolve(mailsToShow)

            case "sent":
                mailsToShow = mails.filter((mail) => {
                    return mail.status === "sent"
                })
                return Promise.resolve(mailsToShow)
            case "trash":
                mailsToShow = mails.filter((mail) => {
                    return mail.status === "trash"
                })
                return Promise.resolve(mailsToShow)
            case "draft":
                mailsToShow = mails.filter((mail) => {
                    return mail.status === "draft"
                })
                return Promise.resolve(mailsToShow)
        }
    }
    const inboxMails = gEmails.filter((mail) => {
        return mail.status === "inbox"
    })

    return Promise.resolve(inboxMails)
}

function getMailById(mailId) {
    const mail = gEmails.find(function (mail) {
        return mail.id === mailId
    })
    return Promise.resolve(mail)
}

function deleteMail(mailId) {
    const mailIdx = gEmails.findIndex(function (mail) {
        return mailId === mail.id
    })

    if (gEmails[mailIdx].status === "trash") {
        gEmails.splice(mailIdx, 1)

    } else {
        if (gEmails[mailIdx].isStarred) gEmails[mailIdx].isStarred = false
        gEmails[mailIdx].status = "trash"
    }
    _saveNotesToStorage()
    return Promise.resolve()
}

function ToggleStar(mailId) {
    const mailIdx = gEmails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gEmails[mailIdx].isStarred = !gEmails[mailIdx].isStarred
    _saveNotesToStorage()
    return Promise.resolve()
}

function sendMail(mail, isDrafted = false) {
    const newMail = {
        id: utilService.makeId(),
        from: "You",
        subject: mail.subject,
        body: mail.body,
        isRead: true,
        sentAt: Date.now(),
        to: mail.to,
        isStarred: false,
        status: `${isDrafted ? 'draft' : 'sent'}`,
    }
    gEmails.unshift(newMail)
    _saveNotesToStorage()
    return Promise.resolve()
}

function onReadMail(mailId) {
    const mailIdx = gEmails.findIndex(function (mail) {
        return mailId === mail.id
    })
    gEmails[mailIdx].isRead = true
    _saveNotesToStorage()
    return Promise.resolve()
}



function getAllUnreadMails() {
    const unReadMails = gEmails.filter((mail) => {
        return !mail.isRead
    })
    return Promise.resolve(unReadMails.length)
}

function _saveNotesToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
