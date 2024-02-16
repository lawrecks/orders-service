/* Replace with your SQL commands */
DROP INDEX IF EXISTS "idx_payment_id";

DROP TABLE IF EXISTS payments CASCADE;

DROP TYPE IF EXISTS payment_type_enum CASCADE;

DROP TYPE IF EXISTS payment_status_enum CASCADE;