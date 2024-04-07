# Raffle draw API
- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all ticket
- get ticket by id
- bulk buy (user can buy multiple ticket at a time)
- raffle draw

Ticket:
    - number (unique),
    - username
    - price
    - timestamp

Routes:
    - /tickets/t/:ticketId GET - find single ticket
    - /tickets/u/:username
    - /tickets/t/:ticketId PATCH - update ticket by ticket id
    - /tickets/t/:ticketId DELETE - delete ticket by ticket id
    - /tickets/u/:username GET find ticket for a given user
    - /tickets/u/:username PATCH update ticket for a given user
    - /tickets/u/:username DELETE delete all tickets for a given user
    - /tickets/sell - create tickets
    - /tickets/bulk - sell bulk tickets
    - /tickets/draw
    - /tickets - find all tickets