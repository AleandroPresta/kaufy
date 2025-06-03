import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
    {
        path: 'shop',
        renderMode: RenderMode.Client,
    },
    {
        path: 'shop/:documentId',
        renderMode: RenderMode.Client,
    },
    {
        path: '**',
        renderMode: RenderMode.Prerender,
    },
];
