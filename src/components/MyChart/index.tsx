"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  egresados: {
    label: "Egresados",
    color: "hsl(var(--chart-1))",
  },
  titulados: {
    label: "Titulados",
    color: "hsl(var(--chart-2))",
  },
  cambios_carrera: {
    label: "Cambios",
    color: "hsl(var(--chart-3))",
  },
  cambios_6ta_oportunidad: {
    label: "Cambios",
    color: "hsl(var(--chart-4))",
  },

} satisfies ChartConfig

export function MyChart({
  title = "Area Chart - Stacked",
  description = "Showing total visitors for the last 6 months",
  data = [],
  keys = [],
}) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="periodo"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            {
              keys.map((key) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  strokeWidth={2}
                  fillOpacity={1}
                  stroke={chartConfig[key].color}
                  fill={chartConfig[key].color}
                />
              ))

            }
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  )
}
