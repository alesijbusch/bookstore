interface Book {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
}

interface PdfChapters {
  [chapter: string]: string;
}

interface BookDetail {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  language: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: PdfChapters;
}
export type { Book, BookDetail };
