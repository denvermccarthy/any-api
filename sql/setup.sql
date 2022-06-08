-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists nuts;

CREATE table nuts (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    nut VARCHAR NOT NULL,
    origin VARCHAR NOT NULL
);

INSERT INTO nuts (nut, origin) VALUES 
('Almond', 'Originated in Iran and the surrounding area.'),
('Brazil nut', 'Native to tropical South America where the nuts are gathered from forest trees growing in the wild.'),
('Cashew', 'Originated in northeastern Brazil and widely grown in the tropics.'),
('Chestnut', 'Native to temperate regions of the Northern Hemisphere.'),
('Coconut', 'Grown throughout the tropics.'),
('Hazelnut', 'Native to temperate regions of the Northern Hemisphere.'),
('Macadamia', 'Indigenous to Australia and an important food for the Aboriginal peoples'),
('Peanut', 'Originated in South America.'),
('Pecan', 'Native to the southern United States and northern Mexico.'),
('Pine Nuts', 'Seeds extracted from woody cones.'),
('Pistachio', 'Native to Central Asia, where it is a desert tree.'),
('Walnut', 'Originated in Iran and Central Asia.');
