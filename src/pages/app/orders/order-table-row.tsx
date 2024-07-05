import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetail } from './orders-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetail />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        f321re65gfr313g165tr
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 min</TableCell>
      <TableCell className="mt-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
        <span className="font-medium text-muted-foreground">Pendente</span>
      </TableCell>
      <TableCell className="font-medium">Fco Rosendo Coelho</TableCell>
      <TableCell className="font-medium">R$ 1000,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
