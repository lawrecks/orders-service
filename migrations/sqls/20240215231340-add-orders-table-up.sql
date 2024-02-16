/* Replace with your SQL commands */
CREATE TYPE order_status_enum AS ENUM('PENDING', 'CONFIRMED', 'DELIVERED', 'REFUNDED');

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    code VARCHAR NOT NULL,
    total_amount DECIMAL NOT NULL,
    status order_status_enum NOT NULL DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS "idx_order_id" ON orders (id);

CREATE INDEX IF NOT EXISTS "idx_order_status" ON orders (status);