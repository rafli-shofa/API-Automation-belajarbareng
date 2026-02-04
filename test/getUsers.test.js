import fetch from 'node-fetch';
import { expect } from 'chai';

describe('GET Users API', () => {
  it('Get users without token should be rejected', async () => {
    const response = await fetch(
      'https://belajar-bareng.onrender.com/api/users'
    );

    const body = await response.json();

    // ASSERT 1: status code client error
    expect(response.status).to.equal(401);

    // ASSERT 2: error message exists
    expect(body).to.have.property('message');
  });
});
