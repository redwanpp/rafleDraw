const { purge } = require('../app/app');
const Ticket = require('../models/Ticket')

class MyDB {
    constructor() {
        this.tickets = [];
    }

    /**
     * create and save a new ticket
     * @param {string} username
     * @param {number} price
     * @returns {Ticket}
     */
    create(username, price) {
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    /**
     * Create multiple ticket for single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>} 
     */
    bulkCreate(username, price, quantity) {
        const result = [];
        for(let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket);
        }
        return result;
    }

    /**
     * return all available tickets
     */
    find() {
        return this.tickets;
    }

    /**
     * return single tickets by Id
     * @param {string} ticketId
     */
    findById(ticketId) {
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} 
             * @returns {Ticket}
             */
            (ticket) => ticket.id === ticketId
        );

        return ticket;
    }

    /**
     * find all ticket for the given user
     * @param {string} username
     * @returns {Array<Ticket>}
     */
    findByUsername(username) {
        const tickets = this.tickets.filter(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.username === username
        );
        return tickets;
    }

    /**
     * 
     * @param {string} ticketId 
     * @param {username: string, price: number} ticketBody 
     * @returns {Ticket}
     */
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();

        return ticket;
    }

    /**
     * @param {string} ticketId
     */
    deletedById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

        if(index !== -1) {
            this.tickets.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    /**
     * find winner
     * @param {number} winnerCount 
     * @returns {Array<Ticket>}
     */
    draw(winnerCount) {
        let indexes = new Array(winnerCount);
        let count = 0;

        while(count < winnerCount) {
            let index = Math.floor(Math.random() * this.tickets.length);

            if(!(indexes.includes(index))) {
                indexes[count] = index;
                count++;
            }
        }
        
        const winners = indexes.map((index) => this.tickets[index]);
        
        return winners;
    }
}

const myDB = new MyDB();
module.exports = myDB;