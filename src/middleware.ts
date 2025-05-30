import { defineMiddleware } from 'astro:middleware';
import { defaultLang } from './i18n/ui';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  
  // Si la ruta es la raíz, redirigir al idioma por defecto
  if (pathname === '/') {
    return context.redirect(`/${defaultLang}`);
  }

  // Extraer el código de idioma de la URL
  const lang = pathname.split('/')[1];
  
  // Si no hay código de idioma o no es válido, redirigir al idioma por defecto
  if (!lang || !['es', 'en'].includes(lang)) {
    return context.redirect(`/${defaultLang}${pathname}`);
  }

  // Añadir el idioma al contexto para que esté disponible en las páginas
  context.locals.lang = lang;
  
  return next();
}); 