# Smart-WS

A Socket.IO v1.0 demonstrative application

## Sample Events

### entrance

response: `{ message: 'You just joined the party' }`

### join_room

params: `{ room: 'room-name' }`

e.g. { room: 'Django' }

### toggle

params: `{ room: 'room-name', status: 'status-value' }`

e.g. { room: 'Django', status: 'on' }

### disconnect

Default event.
