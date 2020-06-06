import axios from 'axios';
import {Response} from '../interfaces/response';
import {Test} from '../interfaces/test';

export class ApiService {
    static TEST_URL: string = 'test';
    private baseUrl: any;

    constructor() {
        this.baseUrl = process.env.TESTAPIURL;
    }

    async getTest(): Promise<Response<Array<Test>>> {
        console.log('12313213');
        return await axios.get('http://localhost:9090');
    }
}
