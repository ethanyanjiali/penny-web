export const logApi = (url, req, res) => {
	console.group(` API ${url}`);
	console.log('request: ', req);
	console.log('response: ', res);
	console.groupEnd();
};

export const logApiRequest = (url, req) => {
	console.group(` API ${url}`);
	console.log('request: ', req);
	console.groupEnd();
};

export const logApiResponse = (url, res) => {
	console.group(` API ${url}`);
	console.log('response: ', res);
	console.groupEnd();
};