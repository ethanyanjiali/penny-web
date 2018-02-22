import request from '../utils/request';
import _ from 'lodash';
import { logApi, logApiRequest, logApiResponse } from '../utils/console';

function translateEvent(event) {
	return {
		id: event.id,
		name: event.name,
		people: event.people,
		updated_at: event.updated_at,
		expenses: event.expenses && event.expenses.map(function(expense) {
			return {
				amount: expense.amount,
				description: expense.description,
				id: expense.id,
				payor: expense.payor,
				involved: expense.involved,
				type: expense.type,
				percentage: _.mapValues(expense.percentage && JSON.parse(expense.percentage), parseFloat),
				shares: _.mapValues(expense.shares && JSON.parse(expense.shares), parseInt),
			};
		})
	};
}

class EventApi {

	static getEvent(eventId) {
		return request.get(`/event/${eventId}`)
			.then(response => {
				logApi(`GET /event/${eventId}`, null, response);
				return translateEvent(response.data.event);
			});
	}

	static createEvent(event) {
		const payload = {
			event: event
		};

		return request.post(`/event/create`, payload)
			.then(response => {
				logApi(`POST /event/create`, payload, response);
				return translateEvent(response.data.event);
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
				return translateEvent(response.data.event);
			});
	}

	static addExpense(eventId, expense) {
		const payload = {
			expense: expense
		};

		return request.post(`/event/edit/${eventId}/add-expense`, payload)
			.then(response => {
				logApi(`POST /event/${eventId}/add-expense`, payload, response);
				return translateEvent(response.data.event);
			});
	}

	static updateExpense(eventId, expense, count, expenseId) {
		const payload = {
			expense: expense
		};

		return request.put(`/event/edit/${eventId}/${count}/update-expense/${expenseId}`, payload)
			.then(response => {
				logApi(`POST /event/${eventId}/${count}/update-expense/${expenseId}`, payload, response);
				return translateEvent(response.data.event);
			});
	}

	static deleteExpense(eventId, expenseId) {
		const payload = {
			expenseId,
		};

		return request.post(`/event/delete/${eventId}/${expenseId}`, payload)
			.then(response => {
				logApi(`POST /event/${eventId}/delete-expense`, payload, response);
				return translateEvent(response.data.event);
			});
	}
}

export default EventApi;
