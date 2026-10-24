export type Role = 'employee' | 'support'

export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'
export type TicketCategory = 'hardware' | 'software' | 'network' | 'access' | 'other'

export interface Ticket {
    id: string
    title: string
    description: string
    status: TicketStatus
    priority: TicketPriority
    category: TicketCategory
    requesterId: string
    requesterName: string
    requesterEmail: string
    assigneeId: string | null
    assigneeName: string | null
    createdAt: string
    updatedAt: string
    resolvedAt: string | null
}

export interface User {
    id: string
    name: string
    email: string
    role: Role
}