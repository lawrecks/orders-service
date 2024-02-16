/* Replace with your SQL commands */
CREATE TYPE payment_type_enum AS ENUM('WALLET', 'CARD');
CREATE TYPE payment_status_enum AS ENUM('PENDING', 'COMPLETED', 'FAILED');

CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id),
    type payment_type_enum NOT NULL,
    status payment_status_enum NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "idx_payment_id" ON orders (id);