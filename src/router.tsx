import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { SimpleLoader } from '#/components/ui/SimpleLoader.tsx'
import { DefaultError } from '#/components/ui/DefaultError.tsx'
import { NotFoundComponent } from '#/components/ui/NotFound.tsx'

export function getRouter() {
  return createTanStackRouter({
    defaultPendingComponent: () =>
      SimpleLoader({ text: 'loading app...', minH: 'dvh' }),
    defaultErrorComponent: DefaultError,
    defaultNotFoundComponent: NotFoundComponent,
    routeTree,
    scrollRestoration: true,
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
