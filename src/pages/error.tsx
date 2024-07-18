import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <h2 className="text-3xl font-bold">
        Whoops, algo de errado aconteceu...
      </h2>
      <p className="text-accent-foreground"> Detalhe do erro:</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
