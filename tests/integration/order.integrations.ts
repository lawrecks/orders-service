import { expect } from 'chai';
import request from 'supertest';

import db from '../../app/db';
import app from '../../app/server';

describe('Order', () => {
  before(async () => {
    await db.query({
      text: `INSERT INTO orders (code, total_amount, status, created_at, updated_at) 
      VALUES 
        ('ORD123', 100.00, 'CONFIRMED', '2024-02-11 08:00:00', '2024-02-11 08:00:00'),
        ('ORD456', 150.50, 'PENDING', '2024-02-10 10:30:00', '2024-02-10 10:30:00'),
        ('ORD789', 200.75, 'DELIVERED', '2024-02-09 15:45:00', '2024-02-09 15:45:00'),
        ('ORDABC', 75.25, 'REFUNDED', '2024-02-08 12:15:00', '2024-02-08 12:15:00');
        `,
    });
  });
  it('should process orders successfully', (done) => {
    request(app)
      .patch('/api/v1/orders/process')
      .set('Accept', 'application/json')
      .end((req, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.code).to.be.equal(200);
        expect(res.body.message).to.be.equal('Orders processed successfully');
        expect(res.body.data).to.have.property('noOfOrdersProcessed');
        expect(res.body.data).to.have.property('noOfOrdersYetToBeProcessed');
        done();
      });
  });

  it('should refund order successfully', (done) => {
    request(app)
      .patch('/api/v1/orders/refund/1')
      .set('Accept', 'application/json')
      .end((req, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.code).to.be.equal(200);
        expect(res.body.message).to.be.equal('Order refunded successfully');
        done();
      });
  });
});
