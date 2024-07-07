import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
const data = [
  { product: 'Peperone', amount: 41 },
  { product: 'Mussarela', amount: 30 },
  { product: 'Calabresa', amount: 50 },
  { product: 'Mista', amount: 20 },
  { product: 'Protuguesa', amount: 23 },
]
const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]
export function PopularProductsChartCard() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer className="w-100%" height={240}>
          <PieChart data={data} style={{ fontSize: 12 }}>
            <Pie
              dataKey="amount"
              nameKey="product"
              data={data}
              cx="58%"
              cy="58%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
