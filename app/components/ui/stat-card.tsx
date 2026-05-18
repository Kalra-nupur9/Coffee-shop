import { StoryStat } from "@/app/types"

interface StatCardProps {
  stat: StoryStat
}

export default function StatCard({
  stat,
}: StatCardProps) {
  const Icon = stat.icon

  return (
    <article className="rounded-2xl bg-card p-4 shadow-md">
      <Icon
        className="h-5 w-5 text-amber-500"
        aria-hidden="true"
      />

      <div className="mt-3 font-display text-2xl">
        {stat.value}
      </div>

      <p className="text-xs text-muted-foreground">
        {stat.label}
      </p>
    </article>
  )
}