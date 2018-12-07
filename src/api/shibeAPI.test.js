import axios from 'axios';
import { getImageURLs } from './shibeAPI';
import mockResult from '../fixtures/imageURLs.json';

jest.mock('axios');

describe('shibeAPI', () => {
  it('loads URLs', done => {
    axios.get.mockResolvedValue({data: mockResult});
    getImageURLs(16).then(({data}) => {
        expect(data).toEqual(mockResult);
        done();
    })
  });
});
