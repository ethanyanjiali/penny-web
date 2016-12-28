import request from '../utils/request';
import { logApi, logApiRequest, logApiResponse } from '../utils/console';

class CommonApi {

	static submitFeedback(feedback) {
		const payload = {
			feedback: feedback
		};

		console.log(payload);
		
		return request.post(`/common/feedback`, payload)
			.then(response => {
				logApi(`POST /common/feedback`, payload, response);
				return response.data.feedback;
			});
	}
}

export default CommonApi;