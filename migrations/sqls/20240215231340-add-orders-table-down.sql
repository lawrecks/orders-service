/* Replace with your SQL commands */
DROP INDEX IF EXISTS "idx_order_id";

DROP INDEX IF EXISTS "idx_order_status";

DROP TABLE IF EXISTS orders CASCADE;

DROP TYPE IF EXISTS order_status_enum CASCADE;