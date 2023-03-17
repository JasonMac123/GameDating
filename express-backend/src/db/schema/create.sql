DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255) NOT NULL,
  cover_picture VARCHAR(255) NOT NULL,
  gender_identity VARCHAR(255) NOT NULL,
  gender_preference VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS interests CASCADE;
CREATE TABLE interests (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  strategy_games BOOLEAN,
  cooking_games BOOLEAN,
  puzzle_games BOOLEAN,
  mmos BOOLEAN,
  action_games BOOLEAN,
  rpg_games BOOLEAN,
  slice_of_life_anime BOOLEAN,
  isekai_anime BOOLEAN,
  shonen_anime BOOLEAN,
  sports_anime BOOLEAN,
  romance_anime BOOLEAN,
  manga BOOLEAN,
  books BOOLEAN,
  comic_books BOOLEAN
);

DROP TABLE IF EXISTS notifications CASCADE;
CREATE TABLE notifications (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  message TEXT,
  created_date TIMESTAMP NOT NULL DEFAULT NOW()
);

DROP TABLE IF EXISTS likes CASCADE;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  giving_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  receiving_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  liked_status BOOLEAN
);

DROP TABLE IF EXISTS chat_rooms CASCADE;
CREATE TABLE chat_rooms (
  id SERIAL PRIMARY KEY NOT NULL,
  first_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  second_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  chat_room_id INTEGER NOT NULL REFERENCES chat_rooms(id) ON DELETE CASCADE,
  messaging_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  receiving_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  message TEXT,
  created_date TIMESTAMP NOT NULL DEFAULT NOW()
);