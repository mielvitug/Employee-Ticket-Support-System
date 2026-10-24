import { mockTickets } from '../data/mockData'
import { TicketCard } from '../components/tickets/TicketCard'
import './TicketsPage.css'

export function TicketsPage() {
  return (
    <section>
      <h1 className="page-title">Tickets</h1>
      <p className="page-subtitle">{mockTickets.length} tickets</p>

      <div className="ticket-list">
        {mockTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </section>
  )
}