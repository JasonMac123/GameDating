INSERT INTO users (name, email, password, phone_number, profile_picture, cover_picture, gender_identity, gender_preference, summary, latitude, longitude)
VALUES ('Jason', 'testing@gmail.com', '$2a$12$5JE.04oop7WC1tgJ310TVeZ7iHlABUaldnZ1w7QgNgVCBrNSsZtsS', '111-111-1111', 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg', 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80', 'M', 'M', 'testing', '43.649498', '-79.463405'
),
('Chris', 'testing@testing.com', '$2a$12$5JE.04oop7WC1tgJ310TVeZ7iHlABUaldnZ1w7QgNgVCBrNSsZtsS', '222-222-2222', 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg', 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', 'F', 'F', 'hello, there', '43.696022', '-79.389259'),
('Randy', 'games@testing.com', '$2a$12$5JE.04oop7WC1tgJ310TVeZ7iHlABUaldnZ1w7QgNgVCBrNSsZtsS', '333-333-3333', 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8b43d3f6ca573fd85afe0c6df608062c.jpg', 'https://www.hindustantimes.com/ht-img/img/2023/02/15/1600x900/
Death_Note_is_usually_the_first_anime__1676437361142_1676437361490_1676437361490.jpg', 'F', 'M', 'hello, there anime is my anme', '43.858886', '-78.993923'),
('Eleena', 'testing@hotmail.com', '$2a$12$5JE.04oop7WC1tgJ310TVeZ7iHlABUaldnZ1w7QgNgVCBrNSsZtsS', '444-444-4444', 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png', 'https://pokemonletsgo.pokemon.com/assets/img/common/char-pikachu.png', 'M', 'M', 'testing react features', '43.859814', '-79.304201');

INSERT INTO interests (user_id, strategy_games, cooking_games, puzzle_games, mmos, action_games, rpg_games, slice_of_life_anime, isekai_anime, shonen_anime, sports_anime, romance_anime, manga, books, comic_books)
VALUES (1, true, true, true, true, true, true, true, false, false, false, false, false, false, true),
(2, false, true, false, true, true, true, false, true, true, true, true, false, false, true),
(3, false, true, false, false, false, false, false, false, false, false, false, true, true, false),
(4, true, true, true, true, true, true, true, false, false, false, false, false, false, true);

INSERT INTO notifications (user_id, message)
VALUES (1, 'you have matched with another user!'),
(2, 'you have matched with another user!'),
(1, 'you have matched with another user!'),
(4, 'you have matched with another user!');

INSERT INTO likes (giving_user_id, receiving_user_id, liked_status)
VALUES (1, 2, true),
(2, 1, true),
(3, 1, true),
(3, 2, false),
(1, 4, true),
(4, 1, true);

INSERT INTO chat_rooms (first_user_id, second_user_id)
VALUES (1, 2),
(4, 1);

INSERT INTO messages (messaging_user_id, receiving_user_id, chat_room_id, message)
VALUES (1, 2, 1, 'hi, do you play any FPS?'),
(2, 1, 1, 'no, i sadly do not'),
(1, 2, 1, 'that sucks, you should try them out'),
(1, 2, 1, 'you will never know what you like'),
(4, 1, 2, 'hello, can you see this'),
(1, 4, 2, 'ya i can');