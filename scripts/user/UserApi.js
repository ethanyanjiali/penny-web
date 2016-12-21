import request from '../utils/request';
import { logApi, logApiRequest, logApiResponse } from '../utils/console';
import cookie from 'react-cookie';

class UserApi {
	static logout() {
		cookie.remove('token', { path: '/' });
	}

	static login(form) {
		const payload = form;
		return request.post(`/auth`, payload)
			.then(response => {
				logApi('POST /auth', payload, response);
				cookie.save('token', response.data.access_token, { path: '/' });
				return response.data.access_token;
			});
	}

	static signUp(form) {
		const payload = {
			user: form
		};
		return request.post(`/user/create`, payload)
			.then(response => {
				logApi('POST /user/create', payload, response);
				return response.data.user;
			});
	}

	static viewCurrentUser() {
		return request.get(`/user/view`, {
				headers: { 'Authorization': `JWT ${cookie.load('token')}` }
			})
			.then(response => {
				logApi('GET /user/view', null, response);
				return response.data.user;
			});
	}

	static updateUser(form) {
		const payload = {
			user: form
		};
		logApiRequest('PUT /user/update', payload);
		return request.put(`/user/update`, payload, {
				headers: { 'Authorization': `JWT ${cookie.load('token')}` }
			})
			.then(response => {
				logApiResponse('PUT /user/update', response);
				return response.data.user;
			});
	}

	static updatePassword(form) {
		const payload = {
			credentials: form
		};
		logApiRequest('PUT /user/password', payload);
		return request.put(`/user/password`, payload, {
				headers: { 'Authorization': `JWT ${cookie.load('token')}` }
			})
			.then(response => {
				logApiResponse('PUT /user/password', response);
				return response.data;
			});
	}

	static sendResetEmail(form) {
		const payload = {
			token: form
		};
		logApiRequest('POST /user/forget', payload);
		return request.post(`/user/forget`, payload, {
				headers: { 'Authorization': `JWT ${cookie.load('token')}` }
			})
			.then(response => {
				logApiResponse('POST /user/forget', response);
				return response.data;
			});
	}
}

export default UserApi;