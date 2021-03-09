import axios from 'axios'

export default axios.create({
	//this can also be in an env
	baseURL: `https://staging.soundfit.app/backoffice/api/`,
})
