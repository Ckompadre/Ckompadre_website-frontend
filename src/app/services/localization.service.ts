import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  en = {
    header: {
      search: 'search',
      blog: 'blog',
      projects: 'projects',
      portfolio: 'portfolio',
      about: 'about',
    },
  };
  ru = {
    header: {
      search: 'поиск',
      blog: 'блог',
      projects: 'проекты',
      portfolio: 'портфолио',
      about: 'обо мне',
    },
  };
}
