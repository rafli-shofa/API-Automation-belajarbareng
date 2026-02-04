import fetch from 'node-fetch';
import { expect } from 'chai';

describe('POST Login Positive', () => {
  it('Login success', async () => {
    const response = await fetch(
      'https://belajar-bareng.onrender.com/api/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'admin',
          password: 'admin'
        })
      }
    );

    const body = await response.json();

    expect(response.status).to.equal(200);
    expect(body).to.have.property('message');
  });
});
