const Promise = require('bluebird');
const gravatarGen = require('gravatar');

exports.seed = (knex, Promise) => {
  knex('users').count('id')
  .then((result) => {
    if(!result[0]['count(`id`)'])  {
      return Promise.join(
        // knex('posts_tags').del(),
        // knex('posts_stars').del(),
        // knex('posts').del(),
        // knex('tags').del(),
        // knex('categories').del(),
        // knex('followers_following').del(),
        // knex('users').del(),

        knex('users').insert({id: 1, username: 'sevdax', email: 'sevda.m.anefi@gmail.com', password: '123', twitterLink: 'PrettyLights',
        gravatar: gravatarGen.url('sevda.m.anefi@gmail.com', {s: '100', r: 'x', d: 'retro'}, true) ,openness: 0.60  ,conscientiousness: 0.10, extraversion: 0.40, agreeableness: 0.20, emotionalRange: 0.80}),
        knex('users').insert({id: 2, username: 'isaacx', email: 'isaacxpreston@gmail.com', password: '123', twitterLink: 'andrewchen',
        gravatar: gravatarGen.url('isaacxpreston@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.35 ,conscientiousness: 0.25, extraversion: 0.70, agreeableness: 0.45, emotionalRange: 0.55}),
        knex('users').insert({id: 3, username: 'wasiff', email: 'wassiff@g.com', password: '123',  twitterLink: 'dan_abramov',
        gravatar: gravatarGen.url('wassiff@g.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.90 ,conscientiousness: 0.49, extraversion: 0.58, agreeableness: 0.15, emotionalRange: 0.82}),
        knex('users').insert({id: 4, username: 'elliott', email: 'elau002@gmail.com', password: '123',  twitterLink: 'vjeux',
        gravatar: gravatarGen.url('elau002@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.93 ,conscientiousness: 0.69, extraversion: 0.78, agreeableness: 0.65, emotionalRange: 0.92}),
        knex('users').insert({id: 5, username: 'iana', email: 'filonenko.jana@gmail.com', password: '123',  twitterLink: 'react_native',
        gravatar: gravatarGen.url('filonenko.jana@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.30 ,conscientiousness: 0.49, extraversion: 0.58, agreeableness: 0.54, emotionalRange: 0.82}),
        knex('users').insert({id: 6, username: 'eric', email: 'churchie@imail.iu.edu', password: '123',  twitterLink: 'midnight',
        gravatar: gravatarGen.url('churchie@imail.iu.edu', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.80 ,conscientiousness: 0.39, extraversion: 0.18, agreeableness: 0.92, emotionalRange: 0.72}),
        knex('users').insert({id: 7, username: 'val', email: 'valerie.m.ernst@gmail.com', password: '123',  twitterLink: 'GirlsinTech',
        gravatar: gravatarGen.url('valerie.m.ernst@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.90 ,conscientiousness: 0.79, extraversion: 0.28, agreeableness: 0.22, emotionalRange: 0.82}),
        knex('users').insert({id: 8, username: 'nate', email: 'nathan.hackman@gmail.com', password: '123',  twitterLink: 'tylertate',
        gravatar: gravatarGen.url('nathan.hackman@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.20 ,conscientiousness: 0.99, extraversion: 0.38, agreeableness: 0.21, emotionalRange: 0.52}),
        knex('users').insert({id: 9, username: 'colin', email: 'catharp@gmail.com', password: '123',  twitterLink: 'Boubouille_MMO',
        gravatar: gravatarGen.url('catharp@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.30 ,conscientiousness: 0.49, extraversion: 0.58, agreeableness: 0.20, emotionalRange: 0.42}),
        knex('users').insert({id: 10, username: 'alissa', email: 'zeninspire@gmail.com', password: '123',  twitterLink: 'TeenVogue',
        gravatar: gravatarGen.url('zeninspire@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.40 ,conscientiousness: 0.39, extraversion: 0.98, agreeableness: 0.19, emotionalRange: 0.92}),
        knex('users').insert({id: 11, username: 'neil', email: 'wazzupnickz@gmail.com', password: '123',  twitterLink: 'HotlineJosh',
        gravatar: gravatarGen.url('wazzupnickz@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.50 ,conscientiousness: 0.79, extraversion: 0.88, agreeableness: 0.18, emotionalRange: 0.82}),
        knex('users').insert({id: 12, username: 'paul', email: 'ksuphankanok@gmail.com', password: '123',  twitterLink: 'hotsince82',
        gravatar: gravatarGen.url('ksuphankanok@gmail.comm', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.60 ,conscientiousness: 0.29, extraversion: 0.78, agreeableness: 0.17, emotionalRange: 0.72}),
        knex('users').insert({id: 13, username: 'ben', email: 'benjamin.tran25@gmail.com', password: '123',  twitterLink: '500Startups',
        gravatar: gravatarGen.url('benjamin.tran25@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.70 ,conscientiousness: 0.39, extraversion: 0.68, agreeableness: 0.16, emotionalRange: 0.62}),
        knex('users').insert({id: 14, username: 'nikshala', email: 'niky.vel@gmail.com', password: '123',  twitterLink: 'MichelleObama',
        gravatar: gravatarGen.url('niky.vel@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.80 ,conscientiousness: 0.29, extraversion: 0.58, agreeableness: 0.15, emotionalRange: 0.52}),
        knex('users').insert({id: 15, username: 'barktek', email: 'bartekr@gmail.com', password: '123',  twitterLink: 'alexiskold',
        gravatar: gravatarGen.url('bartekr@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.90 ,conscientiousness: 0.79, extraversion: 0.48, agreeableness: 0.14, emotionalRange: 0.42}),
        knex('users').insert({id: 16, username: 'whiteshadow', email: 'romaindejean58@gmail.com', password: '123',  twitterLink: 'BarackObama',
        gravatar: gravatarGen.url('romaindejean58@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.01 ,conscientiousness: 0.01, extraversion: 0.01, agreeableness: 0.13, emotionalRange: 0.32}),
        knex('users').insert({id: 17, username: 'bei', email: 'bei5258@gmail.com', password: '123',  twitterLink: 'GiGiHadid',
        gravatar: gravatarGen.url('bei5258@gmail.com', {s: '100', r: 'x', d: 'retro'}, true), openness: 0.30 ,conscientiousness: 0.49, extraversion: 0.38, agreeableness: 0.12, emotionalRange: 0.22}),


       knex('followers_following').insert({id: 1, follower_id: 1, followed_id: 3}),
       knex('followers_following').insert({id: 2, follower_id: 2, followed_id: 3}),
       knex('followers_following').insert({id: 3, follower_id: 3, followed_id: 2}),
       knex('followers_following').insert({id: 4, follower_id: 4, followed_id: 1}),
       knex('followers_following').insert({id: 5, follower_id: 5, followed_id: 1}),
       knex('followers_following').insert({id: 6, follower_id: 5, followed_id: 2}),
       knex('followers_following').insert({id: 7, follower_id: 5, followed_id: 3}),
       knex('followers_following').insert({id: 8, follower_id: 6, followed_id: 3}),
       knex('followers_following').insert({id: 9, follower_id: 7, followed_id: 4}),
       knex('followers_following').insert({id: 10, follower_id: 8, followed_id: 5}),
       knex('followers_following').insert({id: 11, follower_id: 9, followed_id: 6}),
       knex('followers_following').insert({id: 12, follower_id: 10, followed_id: 7}),
       knex('followers_following').insert({id: 13, follower_id: 11, followed_id: 8}),
       knex('followers_following').insert({id: 14, follower_id: 12, followed_id: 9}),
       knex('followers_following').insert({id: 15, follower_id: 13, followed_id: 10}),
       knex('followers_following').insert({id: 16, follower_id: 14, followed_id: 11}),
       knex('followers_following').insert({id: 17, follower_id: 15, followed_id: 11}),
       knex('followers_following').insert({id: 18, follower_id: 16, followed_id: 13}),
       knex('followers_following').insert({id: 19, follower_id: 17, followed_id: 13}),
       knex('followers_following').insert({id: 20, follower_id: 17, followed_id: 5}),


        knex('categories').insert({id: 1, name: 'coffee'}),
        knex('categories').insert({id: 2, name: 'uncategorized'}),
        knex('categories').insert({id: 3, name: 'food'}),
        knex('categories').insert({id: 4, name: 'outdoors'}),
        knex('categories').insert({id: 5, name: 'concert'}),
        knex('categories').insert({id: 6, name: 'movies'}),
        knex('categories').insert({id: 7, name: 'developers'}),
        knex('categories').insert({id: 8, name: 'startups'}),
        knex('categories').insert({id: 9, name: 'meetups'}),


        knex('tags').insert({id: 1, name: 'hiking'}),
        knex('tags').insert({id: 2, name: 'react'}),
        knex('tags').insert({id: 3, name: 'jquery'}),
        knex('tags').insert({id: 4, name: 'angular'}),
        knex('tags').insert({id: 5, name: 'js'}),
        knex('tags').insert({id: 6, name: 'pinkfloyd'}),
        knex('tags').insert({id: 7, name: 'peets'}),
        knex('tags').insert({id: 8, name: 'starbucks'}),
        knex('tags').insert({id: 9, name: 'starwars'}),
        knex('tags').insert({id: 10, name: 'business'}),
        knex('tags').insert({id: 11, name: 'redux'}),
        knex('tags').insert({id: 12, name: 'caffine'}),
        knex('tags').insert({id: 13, name: 'health'}),
        knex('tags').insert({id: 14, name: 'summer'}),
        knex('tags').insert({id: 15, name: 'hackathon'}),
        knex('tags').insert({id: 16, name: 'burgers'}),
        knex('tags').insert({id: 17, name: 'engineering'}),
        knex('tags').insert({id: 18, name: 'oasis'}),
        knex('tags').insert({id: 19, name: 'random'}),

        knex('posts').insert({id: 1, content: "The biggest problem with the word bold is that it can be very broad—for example a guest looking for a delicious cup of medium to lighter-roasted black coffee exploding with flavor, and one looking for a darker-roasted cup that will work well with milk, may both say they want a “bold” coffee. But that’s fine! By saying bold, the guest has already let you know that they most likely want one of those two styles of coffee, and if you think about it, there is a lot of overlap in descriptions. We know that the guest wants a strong coffee, so we can already eliminate things like an aeropress or a delicate and bright Kenya as good potential options for this guest. See, we’re already narrowing things down!", title: 'Bold Coffee', user_id: 1, category_id: 1, stars_count: 2}),
        knex('posts').insert({id: 2, content: "And what of the Rebellion? If the Rebels have obtained a complete technical readout of this station, it is possible, however unlikely, that they might find a weakness and exploit it. The plans you refer to will soon be back in our hands. Any attack made by the Rebels against this station would be a useless gesture, no matter what technical data they've obtained. This station is now the ultimate power in the universe. I suggest we use it!", title: 'Rebel!', user_id: 1, category_id:6, stars_count: 4}),
        knex('posts').insert({id: 3, content: "Learn about the Force, Luke. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. You must do what you feel is right, of course.", title: 'The Force', user_id: 2, category_id: 2, stars_count: 3}),
        knex('posts').insert({id: 4, content: "Figuring out what a guest really wants begins with really paying attention to their circumstances. If a guest is coming in looking all bleary-eyed at 7:00AM asking for a bold coffee, chances are good that they mean “bold” in the fuel kind of way. They want a coffee with serious tactile feel and rich, comforting flavors, so something like a Guatemalan or Indonesian coffee brewed on batch brew or french press might be most appropriate. If a guest comes in at 1:00PM asking for a bold coffee, they may mean “bold” in terms of lots of flavor, not necessarily lots of fuel, and so they may be more open to things like a fruitier Ethiopia, or a lower-concentration pour-over.", title: 'Guatemalan brew', user_id: 3, category_id: 1, stars_count: 3}),
        knex('posts').insert({id: 5, content: "Erin Alderson (whose initials are ELLA) broke up with fast food and all processed meat. Her blog features seasonal vegetarian recipes that are pantry-inspired. Despite ditching Big Macs, Alderson doesn't believe in being obsessive or counting calories (her philosophy is simply to exercise and eat well). Given the results—beautifully photographed whole foods we want to gobble up immediately (curried vegetarian meatballs, we're looking at you!)—it's easy to see why her approach works.", title: 'Naturally Ella', user_id: 4, category_id: 3, stars_count: 3}),
        knex('posts').insert({id: 6, content: "Our process involves putting ourselves in the mindset of a small business owner and gathering the data that would be readily available to such an individual. We perform all of our research by visiting company websites, making calls to customer service departments and interviewing real users. - See more at: http://www.businessnewsdaily.com/6780-best-business-phone-systems.html#sthash.uEpO6FmK.dpuf", title: 'Starting up', user_id: 5, category_id: 8}),
        knex('posts').insert({id: 7, content: "He says the restraining bolt has short circuited his recording system. He suggests that if you remove the bolt, he might be able to play back the entire recording. H'm? Oh, yeah, well, I guess you're too small to run away on me if I take this off! Okay. There you go. Well, wait a minute. Where'd she go? Bring her back! Play back the entire message. What message? The one you're carrying inside your rusty innards! Luke? Luke! Come to dinner! All right, I'll be right there, Aunt Beru. I'm sorry, sir, but he appears to have picked up a slight flutter. Well, see what you can do with him. I'll be right back. Just you reconsider playing that message for him. No, I don't think he likes you at all. No, I don't like you either.", title: 'Star wars', user_id: 6, category_id: 6}),
        knex('posts').insert({id: 8, content: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It's a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you'll have to use proton torpedoes. That's impossible, even for a computer. It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much bigger than two meters. Man your ships! And may the Force be with you!", title: 'Proton Torpedoes', user_id: 7, category_id: 8, stars_count: 2}),
        knex('posts').insert({id: 9, content: "Few things are more disappointing than finding what seems like the perfect recipe only to click and learn that it has more than 20 ingredients, several of which you've never heard of. True to its name, Minimalist Baker keeps things simple by sticking to 10 ingredients or less and limiting cook time to 30 minutes tops. Bonus: The recipes are anything but boring! From General Tso's tofu stir fry (pictured) to spicy buffalo chickpea wraps to toasted coconut pancakes, the culinary duo (John and Kate) really know how to pack tons of flavor into simple and oh-so-delicious dishes.", title: 'Minimalist Baker', user_id: 8, category_id: 3, stars_count: 2}),
        knex('posts').insert({id: 10, content: "We are seeking a highly-skilled front-end web developer to support our application and marketing teams by building out clean, scalable, and readable HTML5 and CSS3. We are looking for a pixel perfect developer with a high-standard of quality and deep knowledge of cross-browser implementation. Applicants should have experience building out websites from scratch (no wordpress-only developers) and should understand higher-level development concepts like ' progressive enhancement' and ' responsive design .' We want individuals who are high-energy, self-motivated, and passionate about front-end development.", title: 'Front End Web Developer', user_id: 9, category_id: 7, stars_count: 2}),
        knex('posts').insert({id: 11, content: "I can't see a thing in this helmet. This is not going to work. Why didn't you say so before? I did say so before! Where are you taking this...thing? Prisoner transfer from Block one-one-three-eight. I wasn't notified. I'll have to clear it. Look out! We've got to find out which cell this princess of yours is in. Here it is...cell twenty-one-eight-seven. You go get her. I'll hold them here. Everything is under control. Situation normal. What happened? Uh...had a slight weapons malfunction. But, uh, everything's perfectly all right now. We're fine. We're all fine here, now, thank you. How are you? We're sending a squad up. Uh, uh, negative. We had a reactor leak here now. Give us a few minutes to lock it down. Large leak...very dangerous. Who is this? What's your operating number? Boring conversation anyway. Luke! We're going to have company!",title: 'This helmet', user_id: 10, category_id: 6}),
        knex('posts').insert({id: 12, content: "There is no pain you are receding A distant ship smoke on the horizon You are only coming through in waves Your lips move but I can't hear what you're saying When I was a child I had a fever My hands felt just like two balloons Now I've got that feeling once again I can't explain you would not understand This is not how I am I have become comfortably numb", title: 'From Skywalker', user_id: 11, category_id: 5}),
        knex('posts').insert({id: 13, content: "It's San Francisco in the early '80s, and Faith No More is a little-known punk-rock band consisting of four musicians all under the age of 21. In their short time together, they've already had three name changes — previously they were Sharp Young Men and Faith No Man — one demo-tape recording session in the garage of a friend's parent's house, and an array of 's---- gigs' at seedy clubs that never card and never fail to schedule them for 1 a.m. performances just before closing.", title: 'Faith no more', user_id: 12, category_id: 5}),
        knex('posts').insert({id: 14, content: "A self-taught cook, Sarah Britton started blogging in 2007 to share her knowledge of holistic nutrition. (She attended the Institute of Holistic Nutrition in Toronto.) She's passionate about whole and vegan food—and creates mouthwatering recipes that prove it. You'll find everything from chunky chocolate buckwheat granola to sweet potato noodle soup (pictured). We love that you can also pick recipes by season.", title: 'My new roots', user_id: 13, category_id: 3}),
        knex('posts').insert({id: 15, content: "Of course the trick of it all is hitting that crucial balance between genuine education and zero superiority or shaming of the guest. You also have to be serving a range of different coffee preparations representing different concentration and flavor preferences (but that’s a whole nother article). But I think that by embracing words like “bold” that guests are already using, and using them as a starting point of an interested, engaged service interaction, you can both educate guests, and leave them happier than when they came in.", title: 'Different coffee preparations', user_id: 17, category_id: 1}),
        knex('posts').insert({id: 16, content: "Healthy recipes in 30 minutes or less? Count us in. Erin, the blogger behind The Almond Eater, writes recipes and stays healthy by listening to her body. (Though she admits she does try to keep things on the healthier side, because if she always were to listen to her body, as she says, she'd 'probably turn into a giant piece of cake.' Amen, sister.) Try everything from her dreamy almond butter chia pudding to these super-quick, roasted lemon garlic Brussels sprouts.", title: 'Almond eater', user_id: 15, category_id: 3}),
        knex('posts').insert({id: 17, content: "I think my eyes are getting better. Instead of a big dark blur, I see a big light blur. There's nothing to see. I used to live here, you know. You're gonna die here, you know. Convenient. Just stick close to Chewie and Lando. I've taken care of everything. Oh... great! Soon you will learn to appreciate me. Oh, I'm terribly sor... Artoo! What are you doing here? Well, I can see you're serving drinks, but this place is dangerous. They're going to execute Master Luke and, if we're not careful, us too! Hmm. I wish I had your confidence. Victims of the almighty Sarlacc: His Excellency hopes that you will die honorably. But should any of you wish to beg for mercy, the great Jabba the Hutt will now listen to your pleas.", title: 'Adventure', user_id: 1, category_id: 4, stars_count: 1}),
        knex('posts').insert({id: 18, content: "While cleaning out the basement of his home in the Haight last year, Gould stumbled upon the master tapes from the album's original recording session in the early '80s. On Aug. 19, Faith No More and Koolarrow Records will reissue the lost album as a double set, along with some of the band's original eight-track demos from their days as an unsigned band and some live recordings that Gould also found from stints they'd played at an Upper Haight club called The Ivy. Members pooled old photos of the band among themselves, and Gould even contacted Mosley, who now lives in Cleveland, for the reissue.", title: 'Echo Echo', user_id: 10, category_id: 5}),
        knex('posts').insert({id: 19, content: "For the right person, this is an extremely exciting job that allows you the opportunity to work with a team of top-notch developers, designers, and marketers and learn new skills while honing those you already have. Your main responsibility will be working with our split-testing department, converting PSDs given to you by our designers and collaborating with the team to come up with new ideas to help optimize our site and increase our conversion rate. You will also be afforded the opportunity to contribute to our overall front-end code infrastructure and create custom jQuery plugins and CSS frameworks.", title: 'jQuery', user_id: 2, category_id: 7, stars_count: 2}),
        knex('posts').insert({id: 20, content: "Grasshopper is a virtual phone system that lets you run your business via mobile phones. Grasshopper works with your existing mobile and home phones, so you never have to purchase, install or maintain expensive phone hardware. The system works by allowing you to create and customize extensions that forward calls to your home or mobile phones. For both a local and national presence, you can have toll-free and local numbers for your business. Other features include an autoreceptionist, music on hold, conference calling, call forwarding, call screening, voicemail and fax to email. grasshopper.com - See more at: http://www.businessnewsdaily.com/6780-best-business-phone-systems.html#sthash.uEpO6FmK.dpuf", title: 'Grasshopper', user_id: 1, category_id: 8, stars_count: 2}),
        knex('posts').insert({id: 21, content: "Concentrate...feel the Force flow. Yes. Good. Calm, yes. Through the Force, things you will see. Other places. The future...the past. Old friends long gone. Han! Leia! Hmm. Control, control. You must learn control. I saw...I saw a city in the clouds. Mmm. Friends you have there. They were in pain. It is the future you see. Future? Will they die? Difficult to see. Always in motion is the future. I've got to go to them. Decide you must how to serve them best. If you leave now, help them you could. But you would destroy all for which they have fought and suffered.", title: 'Things you will see', user_id: 3, category_id: 9}),
        knex('posts').insert({id: 22, content: "We are looking for a detailed-oriented Web Developer with great communication skills who loves to work in a collaborative environment. You’re also self-motivated and can make progress on your own. You enjoy working with code on a daily basis and are familiar with the fast-paced, agile development cycle. You're comfortable speaking to clients on occasion, helping them with design requests or explaining a feature that's been implemented. You’re always looking to grow your skill set and challenge yourself to learn new things.", title: 'Web Developer', user_id: 16, category_id: 7}),
        knex('posts').insert({id: 23, content: "Groups seven and ten will stay behind to fly the speeders. As soon as each transport is loaded, evacuation control will give clearance for immediate launch. Right, sir. Okay, that's it. Try it...Off! Turn it off! Turn it off! Off! Sir, it will take quite awhile to evacuate the T-forty-sevens. Well, forget the heavy equipment. There's plenty of time to get the smaller modules on the transports. Take care, sir. Thanks. Chewie, take care of yourself, okay? Hi, kid. There's got to be a reason for it. Check it at the other end. Wait a second. You all right? Yeah. Be careful. You, too.Reroute all power to the energy shield. We've got to hold them till all transports are away. Prepare for ground assault.", title: 'T-forty-sevens', user_id: 14, category_id: 2, stars_count: 1}),
        knex('posts').insert({id: 24, content: "Super-automatic espresso machines are getting better. I think it’s safe to say that in the not-too-distant future, they’ll be able to make coffee as consistently as a well trained barista. The efficiencies they provide are such a strong argument that their uptake is guaranteed in a significantly large portion of the service industry—both specialty and otherwise. ", title: 'Mmmmmm', user_id: 2, category_id: 1, stars_count: 1}),


        knex('posts_tags').insert({id: 1, post_id: 1, tag_id: 12}),
        knex('posts_tags').insert({id: 2, post_id: 2, tag_id: 9}),
        knex('posts_tags').insert({id: 3, post_id: 3, tag_id: 9}),
        knex('posts_tags').insert({id: 4, post_id: 4, tag_id: 7}),
        knex('posts_tags').insert({id: 5, post_id: 5, tag_id: 13}),
        knex('posts_tags').insert({id: 6, post_id: 5, tag_id: 16}),
        knex('posts_tags').insert({id: 7, post_id: 5, tag_id: 16}),
        knex('posts_tags').insert({id: 8, post_id: 7, tag_id: 9}),
        knex('posts_tags').insert({id: 9, post_id: 8, tag_id: 10}),
        knex('posts_tags').insert({id: 10, post_id: 9, tag_id: 11}),
        knex('posts_tags').insert({id: 11, post_id: 10, tag_id: 2}),
        knex('posts_tags').insert({id: 12, post_id: 11, tag_id: 9}),
        knex('posts_tags').insert({id: 13, post_id: 12, tag_id: 6}),
        knex('posts_tags').insert({id: 14, post_id: 13, tag_id: 6}),
        knex('posts_tags').insert({id: 15, post_id: 14, tag_id: 7}),
        knex('posts_tags').insert({id: 16, post_id: 2, tag_id: 14}),
        knex('posts_tags').insert({id: 17, post_id: 3, tag_id: 19}),
        knex('posts_tags').insert({id: 18, post_id: 4, tag_id: 12}),
        knex('posts_tags').insert({id: 19, post_id: 9, tag_id: 11}),
        knex('posts_tags').insert({id: 20, post_id: 10, tag_id: 5}),
        knex('posts_tags').insert({id: 21, post_id: 5, tag_id: 14}),
        knex('posts_tags').insert({id: 22, post_id: 7, tag_id: 19}),
        knex('posts_tags').insert({id: 23, post_id: 8, tag_id: 4}),
        knex('posts_tags').insert({id: 24, post_id: 9, tag_id: 3}),
        knex('posts_tags').insert({id: 25, post_id: 10, tag_id: 15}),
        knex('posts_tags').insert({id: 26, post_id: 11, tag_id: 19}),
        knex('posts_tags').insert({id: 27, post_id: 12, tag_id: 14}),
        knex('posts_tags').insert({id: 28, post_id: 9, tag_id: 4}),
        knex('posts_tags').insert({id: 29, post_id: 9, tag_id: 5}),
        knex('posts_tags').insert({id: 30, post_id: 1, tag_id: 19}),
        knex('posts_tags').insert({id: 31, post_id: 1, tag_id: 8}),
        knex('posts_tags').insert({id: 32, post_id: 4, tag_id: 19}),
        knex('posts_tags').insert({id: 33, post_id: 15, tag_id: 7}),
        knex('posts_tags').insert({id: 34, post_id: 16, tag_id: 16}),
        knex('posts_tags').insert({id: 35, post_id: 17, tag_id: 1}),
        knex('posts_tags').insert({id: 36, post_id: 18, tag_id: 14}),
        knex('posts_tags').insert({id: 37, post_id: 18, tag_id: 6}),
        knex('posts_tags').insert({id: 38, post_id: 19, tag_id: 3}),
        knex('posts_tags').insert({id: 39, post_id: 20, tag_id: 19}),
        knex('posts_tags').insert({id: 40, post_id: 21, tag_id: 4}),
        knex('posts_tags').insert({id: 41, post_id: 22, tag_id: 5}),
        knex('posts_tags').insert({id: 42, post_id: 23, tag_id: 19}),
        knex('posts_tags').insert({id: 43, post_id: 22, tag_id: 2}),
        knex('posts_tags').insert({id: 44, post_id: 19, tag_id: 5}),
        knex('posts_tags').insert({id: 45, post_id: 20, tag_id: 19}),
        knex('posts_tags').insert({id: 46, post_id: 22, tag_id: 1}),


        knex('posts_stars').insert({star_id: 1, user_id: 3}),
        knex('posts_stars').insert({star_id: 4, user_id: 9}),
        knex('posts_stars').insert({star_id: 3, user_id: 15}),
        knex('posts_stars').insert({star_id: 4, user_id: 1}),
        knex('posts_stars').insert({star_id: 5, user_id: 1}),
        knex('posts_stars').insert({star_id: 5, user_id: 5}),
        knex('posts_stars').insert({star_id: 5, user_id: 3}),
        knex('posts_stars').insert({star_id: 2, user_id: 3}),
        knex('posts_stars').insert({star_id: 4, user_id: 8}),
        knex('posts_stars').insert({star_id: 3, user_id: 14}),
        knex('posts_stars').insert({star_id: 2, user_id: 9}),
        knex('posts_stars').insert({star_id: 9, user_id: 2}),
        knex('posts_stars').insert({star_id: 2, user_id: 8}),
        knex('posts_stars').insert({star_id: 8, user_id: 2}),
        knex('posts_stars').insert({star_id: 10, user_id: 12}),
        knex('posts_stars').insert({star_id: 1, user_id: 16}),
        knex('posts_stars').insert({star_id: 19, user_id: 17}),
        knex('posts_stars').insert({star_id: 20, user_id: 13}),
        knex('posts_stars').insert({star_id: 24, user_id: 1}),
        knex('posts_stars').insert({star_id: 23, user_id: 1}),
        knex('posts_stars').insert({star_id: 20, user_id: 3}),
        knex('posts_stars').insert({star_id: 19, user_id: 4}),
        knex('posts_stars').insert({star_id: 10, user_id: 14}),
        knex('posts_stars').insert({star_id: 3, user_id: 11}),
        knex('posts_stars').insert({star_id: 17, user_id: 9}),
        knex('posts_stars').insert({star_id: 9, user_id: 16}),
        knex('posts_stars').insert({star_id: 2, user_id: 16}),
        knex('posts_stars').insert({star_id: 8, user_id: 16})
      )
      .then((seed) => {
        console.log(`Seeded db with ${seed.length} entries.`)
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
    }
  })
};
