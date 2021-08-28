import { storageService } from "../../../services/storage.service.js"

storageService

const KEY = "booksDB"

export const bookService = {
  query,
  getBookById,
  addReview,
  getBookReviews,
  deleteReview,
  addGoogleBook,
  showGoogleBooks,
}
var gBooks = [
  {
    id: "OXeMG8wNskc",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "metus hendrerit",
    subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
    authors: ["Barbara Cartland"],
    publishedDate: 1999,
    description:
      "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
    pageCount: 713,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/20.jpg",
    language: "en",
    listPrice: {
      amount: 109,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
  {
    id: "JYOJa2NpSCq",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "morbi",
    subtitle: "lorem euismod dictumst inceptos mi",
    authors: ["Barbara Cartland"],
    publishedDate: 1978,
    description:
      "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
    pageCount: 129,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/14.jpg",
    language: "sp",
    listPrice: {
      amount: 44,
      currencyCode: "EUR",
      isOnSale: true,
    },
  },
  {
    id: "1y0Oqts35DQ",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "at viverra venenatis",
    subtitle: "gravida libero facilisis rhoncus urna etiam",
    authors: ["Dr. Seuss"],
    publishedDate: 1999,
    description:
      "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
    pageCount: 972,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/2.jpg",
    language: "he",
    listPrice: {
      amount: 108,
      currencyCode: "ILS",
      isOnSale: false,
    },
  },
  {
    id: "kSnfIJyikTP",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "dictum",
    subtitle:
      "augue eu consectetur class curabitur conubia ligula in ullamcorper",
    authors: ["Danielle Steel"],
    publishedDate: 1978,
    description:
      "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
    pageCount: 303,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/16.jpg",
    language: "en",
    listPrice: {
      amount: 30,
      currencyCode: "EUR",
      isOnSale: true,
    },
  },
  {
    id: "f4iuVmbuKCC",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "sem himenaeos aptent",
    subtitle: "interdum per habitasse luctus purus est",
    authors: ["Dr. Seuss"],
    publishedDate: 2011,
    description:
      "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
    pageCount: 337,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/12.jpg",
    language: "sp",
    listPrice: {
      amount: 19,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: "U2rfZO6oBZf",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "mi ante posuere",
    subtitle:
      "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
    authors: ["Leo Tolstoy"],
    publishedDate: 1978,
    description:
      "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
    pageCount: 748,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/1.jpg",
    language: "en",
    listPrice: {
      amount: 91,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: "xI0wrXaaAcq",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "non",
    subtitle:
      "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
    authors: ["Leo Tolstoy"],
    publishedDate: 2011,
    description:
      "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
    pageCount: 65,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/14.jpg",
    language: "he",
    listPrice: {
      amount: 90,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: "9laHCEdSpFy",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "tristique",
    subtitle: "consectetur a eu tincidunt condimentum amet nisi",
    authors: ["Dr. Seuss"],
    publishedDate: 1999,
    description:
      "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
    pageCount: 299,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/11.jpg",
    language: "he",
    listPrice: {
      amount: 176,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
  {
    id: "nGhVwZvGCGp",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "urna ornare gravida",
    subtitle: "sem vestibulum semper convallis pharetra tempor himenaeos ut",
    authors: ["Jin Yong"],
    publishedDate: 2011,
    description:
      "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
    pageCount: 803,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/10.jpg",
    language: "sp",
    listPrice: {
      amount: 116,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: "Q8Q9Lsd03BD",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "consequat neque volutpat",
    subtitle: "vel quis taciti fermentum feugiat ullamcorper curae praesent",
    authors: ["Dr. Seuss"],
    publishedDate: 1978,
    description:
      "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
    pageCount: 891,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/5.jpg",
    language: "en",
    listPrice: {
      amount: 145,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
  {
    id: "bd7a76kARao",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "risus",
    subtitle: "pretium bibendum pharetra curabitur quisque dictumst",
    authors: ["Danielle Steel"],
    publishedDate: 2018,
    description:
      "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
    pageCount: 86,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/16.jpg",
    language: "sp",
    listPrice: {
      amount: 157,
      currencyCode: "ILS",
      isOnSale: true,
    },
  },
  {
    id: "qKyG0vqeO3e",
    reviews: [
      {
        name: "Shmulik",
        rate: "⭐⭐⭐",
        date: "2021-08-28",
        text: "I grew absolutely tired with King’s more recent novels obsessing over Donald Trump. I figured it would be a thing of the past considering he’s no longer President but boy was I wrong. Within the first 50 pages I believe there were about five or six Trump references.",
      },
      {
        name: "Shmulik",
        rate: "⭐",
        date: "2021-04-29",
        text: "I have always been a big Stephen King fan, I have all his works and love them. But....this is a big disappointment.",
      },
      {
        name: "Shmulik",
        rate: "⭐⭐⭐⭐⭐",
        date: "2020-02-09",
        text: "This latest work from King is another thriller/crime novel. There are 24 chapters, and about 515 pages of story.",
      },
    ],
    title: "interdum etiam vulputate",
    subtitle: "velit sapien eget tincidunt nunc tortor",
    authors: ["Danielle Steel"],
    publishedDate: 2018,
    description:
      "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
    pageCount: 882,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/17.jpg",
    language: "sp",
    listPrice: {
      amount: 57,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: "2RvT48ZNInj",
    reviews: [],
    title: "sagittis justo",
    subtitle: "etiam primis proin praesent placerat nisi fermentum nisi",
    authors: ["Agatha Christie"],
    publishedDate: 2011,
    description:
      "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
    pageCount: 598,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/8.jpg",
    language: "en",
    listPrice: {
      amount: 167,
      currencyCode: "ILS",
      isOnSale: false,
    },
  },
  {
    id: "5z2s9pDXAYj",
    reviews: [],
    title: "quam ullamcorper himenaeos",
    subtitle: "ut placerat eu dapibus sapien sodales laoreet",
    authors: ["Danielle Steel"],
    publishedDate: 1999,
    description:
      "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
    pageCount: 608,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/3.jpg",
    language: "he",
    listPrice: {
      amount: 150,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: "zBZu5cDEWha",
    reviews: [],
    title: "quis",
    subtitle: "suscipit turpis etiam turpis libero lobortis",
    authors: ["Jin Yong"],
    publishedDate: 2011,
    description:
      "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
    pageCount: 583,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/6.jpg",
    language: "en",
    listPrice: {
      amount: 58,
      currencyCode: "ILS",
      isOnSale: true,
    },
  },
  {
    id: "aOI7tQuPZ2f",
    reviews: [],
    title: "aliquam aliquet dapibus",
    subtitle:
      "neque eu purus euismod placerat adipiscing odio egestas consequat",
    authors: ["Leo Tolstoy"],
    publishedDate: 2011,
    description:
      "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
    pageCount: 497,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/7.jpg",
    language: "en",
    listPrice: {
      amount: 78,
      currencyCode: "USD",
      isOnSale: false,
    },
  },
  {
    id: "WBooB82Uvwu",
    reviews: [],
    title: "class",
    subtitle:
      "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
    authors: ["Danielle Steel"],
    publishedDate: 1999,
    description:
      "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
    pageCount: 804,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/10.jpg",
    language: "en",
    listPrice: {
      amount: 118,
      currencyCode: "ILS",
      isOnSale: false,
    },
  },
  {
    id: "xm1z5bbZjlS",
    reviews: [],
    title: "vitae",
    subtitle: "class habitant at commodo semper ligula a bibendum",
    authors: ["Leo Tolstoy"],
    publishedDate: 1999,
    description:
      "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
    pageCount: 231,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/12.jpg",
    language: "he",
    listPrice: {
      amount: 60,
      currencyCode: "EUR",
      isOnSale: false,
    },
  },
  {
    id: "u3j6QIKLlJb",
    reviews: [],
    title: "rhoncus vivamus",
    subtitle: "nullam class risus amet senectus scelerisque etiam curabitur",
    authors: ["Agatha Christie"],
    publishedDate: 1978,
    description:
      "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
    pageCount: 652,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/20.jpg",
    language: "he",
    listPrice: {
      amount: 110,
      currencyCode: "USD",
      isOnSale: true,
    },
  },
  {
    id: "vxYYYdVlEH3",
    reviews: [],
    title: "donec mi ullamcorper",
    subtitle:
      "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
    authors: ["William Shakespeare"],
    publishedDate: 2011,
    description:
      "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
    pageCount: 904,
    categories: ["Computers", "Hack"],
    thumbnail: "http://coding-academy.org/books-photos/2.jpg",
    language: "sp",
    listPrice: {
      amount: 186,
      currencyCode: "ILS",
      isOnSale: true,
    },
  },
]

function query(filterBy) {
  let books = storageService.loadFromStorage(KEY)
  if (!books) {
    storageService.saveToStorage(KEY, gBooks)
    books = gBooks
  }
  if (filterBy) {
    let { name, minPrice, maxPrice } = filterBy
    maxPrice = maxPrice ? maxPrice : Infinity
    minPrice = minPrice ? minPrice : 0
    const booksToShow = books.filter(
      (book) =>
        book.title.includes(name) &&
        +book.listPrice.amount >= minPrice &&
        +book.listPrice.amount <= maxPrice
    )
    return Promise.resolve(booksToShow)
  }
  gBooks = books
  return Promise.resolve(gBooks)
}

function getBookById(bookId) {
  var book = gBooks.find(function (book) {
    return bookId === book.id
  })
  return Promise.resolve(book)
}

function addReview(review, bookId) {
  if (!review.rate || review.rate === "1") review.rate = "⭐"
  if (review.rate === "2") review.rate = "⭐⭐"
  if (review.rate === "3") review.rate = "⭐⭐⭐"
  if (review.rate === "4") review.rate = "⭐⭐⭐⭐"
  if (review.rate === "5") review.rate = "⭐⭐⭐⭐⭐"

  const bookIdx = gBooks.findIndex((book) => book.id === bookId)

  gBooks[bookIdx].reviews.push(review)
  storageService.saveToStorage(KEY, gBooks)
}

function getBookReviews(bookId) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId)
  return gBooks[bookIdx].reviews
}

function deleteReview(bookId, reviewIdx) {
  const bookIdx = gBooks.findIndex((book) => book.id === bookId)
  gBooks[bookIdx].reviews.splice(reviewIdx, 1)
  storageService.saveToStorage(KEY, gBooks)
}

function addGoogleBook(googleBook) {
  console.log(googleBook)
  const book = {
    id: googleBook.id,
    reviews: [],
    title: googleBook.volumeInfo.title,
    authors: googleBook.volumeInfo.authors
      ? googleBook.volumeInfo.authors
      : ["Unknown Author"],
    publishedDate: googleBook.volumeInfo.publishedDate,
    description: googleBook.volumeInfo.description
      ? googleBook.volumeInfo.description
      : "No Description",
    pageCount: googleBook.volumeInfo.pageCount,
    categories: googleBook.volumeInfo.categories,
    thumbnail: googleBook.volumeInfo.imageLinks
      ? googleBook.volumeInfo.imageLinks.thumbnail
      : "",
    language: googleBook.volumeInfo.language,
    listPrice: {
      amount: Math.floor(Math.random() * 120),
      currencyCode: "EUR",
      isOnSale: false,
    },
  }
  gBooks.push(book)
  storageService.saveToStorage(KEY, gBooks)
}

function showGoogleBooks(text) {
  const prm = axios.get(
    `https://www.googleapis.com/books/v1/volumes?printType=books&q=${text}`
  )
  return prm.then((res) => {
    return res.data.items
  })
}
