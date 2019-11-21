import axios from 'axios';
const serviceEndPoint = 'http://localhost:3030/bugs';

const bugApi = {
    getAll(){
        let p = axios.get(serviceEndPoint);
        var p2 = p.then(function(response){
            return response.data;
        });
        return p2;
    },
    save(bugData){
        if (bugData.id === 0){
            return axios
                .post(serviceEndPoint, bugData)
                .then(response => response.data);
        } else {
            return axios
                .put(`${serviceEndPoint}/${bugData.id}`, bugData)
                .then(response => response.data);
        }
    },
    async remove(bugData){
        const response = await axios.delete(`${serviceEndPoint}/${bugData.id}`);
        return response.data;
    }
}

export default bugApi;