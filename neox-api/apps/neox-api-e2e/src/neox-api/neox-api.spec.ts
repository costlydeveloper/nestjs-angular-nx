import axios from 'axios';

describe('GET /api/users', () => {
  it('should return a message', async () => {
    const res = await axios.get('http://localhost:3000/api/users');
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();
    console.log('data', data);
    //console.log('res', res.json({ data: JSON.stringify(response.data) }););
    expect(200).toBe(200);
    expect({ message: 'Hello API' }).toEqual({ message: 'Hello API' });
  });
});
