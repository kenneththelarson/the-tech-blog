const { Post } = require('../models');

const postdata = [
    {
        title: 'Final Space Found',
        content: "I'm nobody's taxi service; I'm not gonna be there to catch you every time you feel like jumping out of a spaceship. The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant.",
        user_id: 10
    },
    {
        title: 'Olan Rogers Hits 1 Million Subcribers',
        content: "Okay Doc, this is it. Yeah, he's right here. What was it, George, bird watching? Of course, the Enchantment Under The Sea Dance they're supposed to go to this, that's where they kiss for the first time. No, why, what's a matter?",
        user_id: 8
    },
    {
        title: 'Once a Time-lord, Always a Time-lord',
        content: "It was meant to be. Anyway, if Grandpa hadn't hit him, then none of you would have been born. Doc, I'm from the future. I came here in a time machine that you invented. Now, I need your help to get back to the year 1985. I don't know, I can't keep up with all of your boyfriends. Looks like a airplane, without wings.",
        user_id: 1
    },
    {
        title: 'Galaxy One and Her Crew',
        content: "All I've got to do is pass as an ordinary human being. Simple. What could possibly go wrong? Sorry, checking all the water in this area; there's an escaped fish. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.",
        user_id: 4
    },
    {
        title: 'Electronics Aboard the TARDIS and How You Can Build One at Home',
        content: "You hit me with a cricket bat. The way I see it, every life is a pile of good things and bad things.…hey.…the good things don't always soften the bad things; but vice-versa the bad things don't necessarily spoil the good things and make them unimportant.",
        user_id: 7
    },
    {
        title: 'Good News, Everyone!',
        content: "I hate yogurt. It's just stuff with bits in. I hate yogurt. It's just stuff with bits in. It's a fez. I wear a fez now. Fezes are cool. Father Christmas. Santa Claus. Or as I've always known him: Jeff.",
        user_id: 4
    },
    {
        title: 'Lord Commander on the Frailties of Finding Mooncake',
        content: "I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. We're also Santa Claus! Then we'll go with that data file! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!",
        user_id: 1
    },
    {
        title: 'Casting the Amazing Talent of Final Space',
        content: "Ye-ha! I want to come with you to Alderaan. There's nothing for me here now. I want to learn the ways of the Force and be a Jedi, like my father before me. I suggest you try it again, Luke. This time, let go your conscious self and act on instinct.",
        user_id: 1
    },
    {
        title: 'Pros and Cons of CGI in Disney Star Wars',
        content: "Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense. Red Five standing by.",
        user_id: 9
    },
    {
        title: 'Will Blender Become the Industry standard?',
        content: "It's a hug, Michael. I'm hugging you. I care deeply for nature. I'm half machine. I'm a monster. Well, what do you expect, mother?",
        user_id: 5
    },
    {
        title: 'Pilot vs. Show: an Inside Look at Final Space',
        content: "So tell me, Marty, how long have you been in port? And he could sleep in my room. You're George McFly. Silence Earthling. my name is Darth Vader. I'm am an extra-terrestrial from the planet Vulcan. Good. Have a good trip Einstein, watch your head.",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
