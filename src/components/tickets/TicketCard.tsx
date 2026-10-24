import type { Ticket, TicketCategory, TicketPriority, TicketStatus } from '../../types/ticket'
import { Badge, type BadgeTone } from '../ui/Badge'
import './TicketCard.css'

const statusLabels: Record<TicketStatus, string> = {
  open: 'Open',
  in_progress: 'In progress',
  resolved: 'Resolved',
  closed: 'Closed',
}

const statusTones: Record<TicketStatus, BadgeTone> = {
  open: 'info',
  in_progress: 'warning',
  resolved: 'success',
  closed: 'neutral',
}

const priorityLabels: Record<TicketPriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  urgent: 'Urgent',
}

const priorityTones: Record<TicketPriority, BadgeTone> = {
  low: 'neutral',
  medium: 'info',
  high: 'warning',
  urgent: 'danger',
}

const categoryLabels: Record<TicketCategory, string> = {
  hardware: 'Hardware',
  software: 'Software',
  network: 'Network',
  access: 'Access',
  other: 'Other',
}

export function TicketCard({ ticket }: { ticket: Ticket }) {
  const created = new Date(ticket.createdAt).toLocaleDateString()

  return (
    <article className="ticket-card">
      <div className="ticket-card-head">
        <span className="ticket-id">#{ticket.id.replace('t-', '')}</span>
        <div className="ticket-badges">
          <Badge tone={priorityTones[ticket.priority]}>
            {priorityLabels[ticket.priority]}
          </Badge>
          <Badge tone={statusTones[ticket.status]}>
            {statusLabels[ticket.status]}
          </Badge>
        </div>
      </div>

      <h2 className="ticket-title">{ticket.title}</h2>
      <p className="ticket-meta">
        {categoryLabels[ticket.category]} · {ticket.requesterName} · {created}
      </p>
    </article>
  )
}