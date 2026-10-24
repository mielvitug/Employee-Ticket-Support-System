import type { TicketPriority, TicketStatus } from '../../types/ticket'
import './TicketFilters.css'

export type StatusFilter = TicketStatus | 'all'
export type PriorityFilter = TicketPriority | 'all'

type TicketFiltersProps = {
  query: string
  status: StatusFilter
  priority: PriorityFilter
  onQueryChange: (value: string) => void
  onStatusChange: (value: StatusFilter) => void
  onPriorityChange: (value: PriorityFilter) => void
  onClear: () => void
}

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'open', label: 'Open' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'resolved', label: 'Resolved' },
  { value: 'closed', label: 'Closed' },
]

const priorityOptions: { value: PriorityFilter; label: string }[] = [
  { value: 'all', label: 'All priorities' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
]

export function TicketFilters({
  query,
  status,
  priority,
  onQueryChange,
  onStatusChange,
  onPriorityChange,
  onClear,
}: TicketFiltersProps) {
  return (
    <div className="ticket-filters">
      <input
        className="ticket-filters-search"
        type="search"
        placeholder="Search tickets..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />

      <select
        className="ticket-filters-select"
        value={status}
        onChange={(event) => onStatusChange(event.target.value as StatusFilter)}
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <select
        className="ticket-filters-select"
        value={priority}
        onChange={(event) => onPriorityChange(event.target.value as PriorityFilter)}
      >
        {priorityOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button type="button" className="ticket-filters-clear" onClick={onClear}>
        Clear
      </button>
    </div>
  )
}