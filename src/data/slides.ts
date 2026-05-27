export interface SlideInfo {
  id: string;
  title: string;
  subtitle: string;
}

export const SLIDES_METADATA: SlideInfo[] = [
  { id: "hero", title: "Ерөнхий харах", subtitle: "Танилцуулга" },
  { id: "problem", title: "Сорилт бэрхшээл", subtitle: "Асуудал" },
  { id: "solution", title: "Шийдэл хувилбар", subtitle: "Mechi платформ" },
  { id: "stats", title: "Үндсэн тоо баримт", subtitle: "Хэмжигдэхүүн" },
  { id: "features", title: "Бүтээгдэхүүний агуулга", subtitle: "Экосистем" },
  { id: "flow", title: "Суралцах шатлал", subtitle: "Сурагчийн зам" },
  { id: "why-mechi", title: "Mechi-гийн давуу тал", subtitle: "Харьцуулалт" },
  { id: "vision", title: "Алсын хараа", subtitle: "Зорилт" },
  { id: "ending", title: "Төгсгөл", subtitle: "Дүгнэлт" }
];
