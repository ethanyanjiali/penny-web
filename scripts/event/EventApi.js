import request from '../utils/request';
import { logApi, logApiRequest, logApiResponse } from '../utils/console';

class EventApi {

	static getEvent(eventId) {
		return request.get(`/event/${eventId}`)
			.then(response => {
				logApi(`GET /event/${eventId}`, null, response);
				return response.data.event
			});
	}

	static createEvent(event) {
		const payload = {
			event: event
		};

		return request.post(`/event/create`, payload)
			.then(response => {
				logApi(`POST /event/create`, payload, response);
				return response.data.event
			});
	}

	static updateEvent(event, eventId) {
		const payload = {
			event: event
		};

		console.log(payload);

		return request.post(`/event/edit/${eventId}`, payload)
			.then(response => {
				logApi(`POST /event/edit/${eventId}`, payload, response);
				return response.data.event
			});
	}

	static addExpense(eventId, expense) {
		const payload = {
			expense: expense
		};

		return request.post(`/event/edit/${eventId}/add-expense`, payload)
			.then(response => {
				logApi(`POST /event/${eventId}/add-expense`, payload, response);
				return response.data.event;
			});
	}

	static updateExpense(eventId, expense, count, expenseId) {
        const payload = {
            expense: expense
        };

        return request.put(`/event/edit/${eventId}/${count}/update-expense/${expenseId}`, payload)
            .then(response => {
                logApi(`POST /event/${eventId}/${count}/update-expense/${expenseId}`, payload, response);
                return response.data.event;
            });
	}

	static deleteExpense(eventId, expenseId) {
		const payload = {
			expenseId,
		};

		return request.post(`/event/delete/${eventId}/${expenseId}`, payload)
			.then(response => {
				logApi(`POST /event/${eventId}/delete-expense`, payload, response);
				return response.data.event
			});
	}
}

export default EventApi;
