import { useState } from 'react'
import { mockTickets } from '../data/mockData'
import { TicketCard } from '../components/tickets/TicketCard'
import {
  TicketFilters,
  type PriorityFilter,
  type StatusFilter,
} from '../components/tickets/TicketFilters'
import './TicketsPage.css'

export function TicketsPage() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [priority, setPriority] = useState<PriorityFilter>('all')

  const visibleTickets = mockTickets.filter((ticket) => {
    const matchesQuery = ticket.title
      .toLowerCase()
      .includes(query.trim().toLowerCase())
    const matchesStatus = status === 'all' || ticket.status === status
    const matchesPriority = priority === 'all' || ticket.priority === priority

    return matchesQuery && matchesStatus && matchesPriority
  })

  const clearFilters = () => {
    setQuery('')
    setStatus('all')
    setPriority('all')
  }

  return (
    <section>
      <h1 className="page-title">Tickets</h1>
      <p className="page-subtitle">
        {visibleTickets.length} of {mockTickets.length} tickets
      </p>

      <TicketFilters
        query={query}
        status={status}
        priority={priority}
        onQueryChange={setQuery}
        onStatusChange={setStatus}
        onPriorityChange={setPriority}
        onClear={clearFilters}
      />

      {visibleTickets.length === 0 ? (
        <p className="ticket-empty">No tickets match your filters.</p>
      ) : (
        <div className="ticket-list">
          {visibleTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </section>
  )
}