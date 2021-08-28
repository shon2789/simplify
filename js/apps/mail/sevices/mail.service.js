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
    subject: "H!",
    body: utilService.makeLorem(),
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
    subject: "Have you seen my post?",
    body: utilService.makeLorem(),
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
    body: utilService.makeLorem(),
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
    body: utilService.makeLorem(),
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
      return mail.subject.toLowerCase().includes(txt)
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
    }
  }
  const inboxMails = gEmails.filter((mail) => {
    return mail.status === "inbox"
  })

  return Promise.resolve(inboxMails)
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
  _saveNotesToStorage()
  return Promise.resolve()
}

function ToggleStar(mailId) {
  var mailIdx = gEmails.findIndex(function (mail) {
    return mailId === mail.id
  })
  gEmails[mailIdx].isStarred = !gEmails[mailIdx].isStarred
  _saveNotesToStorage()
  return Promise.resolve()
}

function sendMail(mail) {
  const newMail = {
    id: utilService.makeId(),
    from: "You",
    subject: mail.subject,
    body: mail.body,
    isRead: true,
    sentAt: Date.now(),
    to: mail.to,
    isStarred: false,
    status: "sent",
  }
  gEmails.push(newMail)
  _saveNotesToStorage()
  return Promise.resolve()
}

function onReadMail(mailId) {
  var mailIdx = gEmails.findIndex(function (mail) {
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
