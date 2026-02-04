import fetch from 'node-fetch';
import { expect } from 'chai';

describe('POST Login Negative', () => {
  it('Login failed - wrong password', async () => {
    const response = await fetch(
      'https://belajar-bareng.onrender.com/api/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'admin',
          password: ''
        })
      }
    );

    const body = await response.json();

    expect(response.status).to.equal(400);
    expect(body).to.have.property('message');
  });
});
