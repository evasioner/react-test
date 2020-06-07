import axios from 'axios';
import {Response} from '../interfaces/response';
import {Test} from '../interfaces/test';

export class ApiService {
    static TEST_URL: string = 'tests';
    private baseUrl: string;

    constructor() {
        this.baseUrl = `${process.env.REACT_APP_TESTAPIURL}/${ApiService.TEST_URL}`;
    }

    async getTest(queryParam: string): Promise<Response<Array<Test>>> {
        return await axios.get(this.baseUrl + '?query=' + queryParam);
    }
}
