import axios from 'axios';
import { getImageURLs } from './shibeAPI';
import mockResult from '../fixtures/imageURLs.json';

jest.mock('axios');

describe('shibeAPI', () => {
  it('loads URLs', done => {
    axios.get.mockResolvedValue(mockResult);
    getImageURLs(16).then(result => {
        expect(result).toEqual(mockResult);
        done();
    })
  });
});
