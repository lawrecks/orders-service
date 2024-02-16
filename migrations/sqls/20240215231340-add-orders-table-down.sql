/* Replace with your SQL commands */
DROP INDEX IF EXISTS "idx_order_id";

DROP INDEX IF EXISTS "idx_order_status";

DROP TYPE IF EXISTS order_status_enum CASCADE;

DROP TABLE IF EXISTS orders CASCADE;
